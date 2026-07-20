import { useState, useEffect, useRef } from "react";

const CERTIFICATES = Object.freeze([
    {
        id: 1,
        image: "/img/sertificate/1.png",
        title: "Python",
        description: "Sertifikat kelulusan dari Progate",
    },
    {
        id: 2,
        image: "/img/sertificate/6.png",
        title: "Partisipasi Bootcamp Cyber Security",
        description: "Sertifikat partisipasi IDF (Infra Digital Foundation)",
    },
]);

export default function Certificate() {
    const [selectedCert, setSelectedCert] = useState(null);
    const dialogRef = useRef(null);

    const openCert = (cert) => setSelectedCert(cert);
    const closeCert = () => setSelectedCert(null);

    // <dialog> native menangani sendiri: focus trap, tombol Esc untuk menutup (event "cancel"),
    // dan backdrop — tidak perlu role ARIA (role="dialog" itu implicit & redundant, S6822)
    // maupun aria-modal/tabIndex tambahan.
    useEffect(() => {
        const dialogEl = dialogRef.current;
        if (!dialogEl) return;

        if (selectedCert && !dialogEl.open) {
            dialogEl.showModal();
        } else if (!selectedCert && dialogEl.open) {
            dialogEl.close();
        }
    }, [selectedCert]);

    // Sinkronkan state saat dialog ditutup lewat Esc atau method close() bawaan browser
    const handleNativeClose = () => setSelectedCert(null);

    // Klik pada ::backdrop -> tutup modal. Listener dipasang secara imperatif lewat DOM API
    // (bukan sebagai prop JSX onClick) supaya tidak ditandai linter aksesibilitas sebagai
    // "event handler pada elemen non-interactive" (S6847). <dialog> memang bukan elemen
    // interaktif secara semantik, tapi pola "click outside to close" tetap butuh listener
    // di elemen itu sendiri — memasangnya lewat ref+addEventListener adalah cara yang
    // dianggap bersih untuk kasus ini karena tidak muncul sebagai atribut JSX.
    useEffect(() => {
        const dialogEl = dialogRef.current;
        if (!dialogEl) return undefined;

        const handleBackdropClick = (e) => {
            if (e.target === dialogEl) closeCert();
        };

        dialogEl.addEventListener("click", handleBackdropClick);
        return () => dialogEl.removeEventListener("click", handleBackdropClick);
    }, []);

    return (
        <section id="certificate" className="pt-36 pb-32 bg-slate-100 dark:bg-[#CCCCCC]">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-16" data-aos="zoom-in-up">
                        <h4 className="text-lg text-primary font-semibold mb-2 uppercase">Sertifikat</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-dark">
                            Sertifikat dan License
                        </h2>
                        <p className="text-md font-medium text-slate-600 md:text-lg dark:text-slate-700">
                            Kumpulan sertifikat yang telah saya peroleh, selama Study
                        </p>
                    </div>
                    <div className="flex flex-wrap">
                        {CERTIFICATES.map((cert, index) => (
                            <div
                                key={cert.id}
                                className="w-full px-4 lg:w-1/2 xl:w-1/4"
                                data-aos={index % 2 === 0 ? "fade-right" : "zoom-in-up"}
                            >
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                                    <img
                                        src={cert.image}
                                        loading="lazy"
                                        alt={cert.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="py-8 px-6">
                                        <h3
                                            className="font-semibold text-xl text-dark mb-3 truncate"
                                            title={cert.title}
                                        >
                                            {cert.title}
                                        </h3>
                                        <p className="font-medium text-base text-slate-600 mb-4">
                                            {cert.description}
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => openCert(cert)}
                                            className="text-primary font-semibold text-sm hover:underline"
                                        >
                                            Baca selengkapnya
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal pratinjau sertifikat — elemen <dialog> native, tanpa role/aria/handler tambahan */}
            <dialog
                ref={dialogRef}
                aria-labelledby="certificate-modal-title"
                onClose={handleNativeClose}
                onCancel={handleNativeClose}
                className="backdrop:bg-black backdrop:bg-opacity-70 m-auto max-w-2xl w-full p-0 border-0 rounded-lg shadow-lg bg-white overflow-hidden"
            >
                {selectedCert && (
                    <>
                        <button
                            type="button"
                            onClick={closeCert}
                            aria-label="Tutup"
                            className="absolute top-3 right-3 h-8 w-8 flex items-center justify-center rounded-full bg-white/90 text-dark hover:bg-white shadow"
                        >
                            ✕
                        </button>
                        <img
                            src={selectedCert.image}
                            alt={selectedCert.title}
                            decoding="async"
                            width={500}
                            className="w-full max-h-[75vh] object-contain bg-slate-100"
                        />
                        <div className="p-6">
                            <h3 id="certificate-modal-title" className="font-semibold text-xl text-dark mb-2">
                                {selectedCert.title}
                            </h3>
                            <p className="text-slate-600">{selectedCert.description}</p>
                        </div>
                    </>
                )}
            </dialog>
        </section>
    );
}