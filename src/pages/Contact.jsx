import { FaWhatsapp, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// ⚠️ GANTI dengan nomor WhatsApp & email asli kamu sebelum deploy.
// Format nomor WhatsApp: kode negara tanpa "+" atau "0" di depan, contoh: 6281234567890
const WHATSAPP_NUMBER = "6285771089755";
const EMAIL_ADDRESS = "sidiqfaisal30@gmail.com";

const contacts = [
    {
        id: "whatsapp",
        icon: FaWhatsapp,
        label: "WhatsApp",
        value: WHATSAPP_NUMBER,
        href: `https://wa.me/${WHATSAPP_NUMBER}`,
        button: "Chat Sekarang",
        color: "bg-green-500",
    },
    {
        id: "email",
        icon: FaEnvelope,
        label: "Email",
        value: EMAIL_ADDRESS,
        href: `mailto:${EMAIL_ADDRESS}`,
        button: "Kirim Email",
        color: "bg-red-500",
    },
    {
        id: "github",
        icon: FaGithub,
        label: "GitHub",
        value: "github.com/mfaisal-Ash",
        href: "https://github.com/mfaisal-Ash",
        button: "Kunjungi",
        color: "bg-slate-800",
    },
    {
        id: "instagram",
        icon: FaInstagram,
        label: "Instagram",
        value: "@faisal_shishidiq",
        href: "https://www.instagram.com/faisal_shishidiq/",
        button: "Kunjungi",
        color: "bg-pink-500",
    },
    {
        id: "linkedin",
        icon: FaLinkedin,
        label: "LinkedIn",
        value: "Muhammad Faisal Ashshidiq",
        href: "https://www.linkedin.com/in/muhammad-faisal-ashshidiq/",
        button: "Kunjungi",
        color: "bg-blue-600",
    },
];

export default function Contacts() {
    return (
        <section className={'pt-36 pb-32 dark:bg-[#1A1A1A]'} id={'contact'}>
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-16" data-aos="zoom-in-down">
                        <h4 className={'text-lg text-primary dark:text-[#CCCCCC] font-semibold mb-2 uppercase'}>Kontak</h4>
                        <p className="text-md font-medium text-slate-600 md:text-lg dark:text-slate-300">
                            Hubungi saya, apabila ada yang ingin disampaikan 😁
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {contacts.map((c) => {
                            const Icon = c.icon;
                            return (
                                <div
                                    key={c.id}
                                    data-aos="zoom-in-up"
                                    className="w-full sm:w-[250px] bg-white dark:bg-[#242424] border border-slate-200 dark:border-[#333333] rounded-xl shadow-lg p-6 text-center"
                                >
                                    <div className={`mx-auto mb-4 h-14 w-14 rounded-full flex items-center justify-center text-white ${c.color}`}>
                                        <Icon size={26} />
                                    </div>
                                    <h3 className="font-semibold text-lg text-dark dark:text-white mb-1">{c.label}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 break-all">{c.value}</p>
                                    <a
                                        href={c.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`inline-block w-full text-sm font-semibold text-white py-2 px-4 rounded-full ${c.color} hover:opacity-85 transition duration-300`}
                                    >
                                        {c.button}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
