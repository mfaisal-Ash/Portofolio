import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const ICON_LINK_CLASS =
    'mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8';

const TIMELINE_ITEMS = [
    {
        id: 'progate',
        year: '2022',
        href: 'https://www.progate.com/',
        image: '/images/experience/progate.jpeg',
        alt: 'Logo Progate',
        paragraphs: [
            <>
                <span className="font-bold">Progate</span> adalah salah satu platform yang digunakan oleh
                LUKANANAKIT untuk pelatihan secara online.
            </>,
            <>
                Saya bangga menjadi lulusan <span className="font-bold">Progate</span> karena menerima
                materi yang cukup membantu saya.
            </>,
        ],
        imgClassName: 'w-full',
    },
    {
        id: 'idcamp',
        year: '2022',
        href: 'https://www.dicoding.com/',
        image: '/images/experience/lukanakit.png',
        alt: 'Logo Lukanakit',
        paragraphs: [
            <>
                <span className="font-bold">(LUKANAKIT) LU KA ANAK IT</span> adalah salah satu organisasi
                yang berfokus pada pusat informasi, edukasi, dan hiburan seputar dunia IT.
            </>,
            <>
                Bekerja sama dengan <span className="font-bold">Progate</span> untuk melakukan proses
                pelatihan secara online.
            </>,
        ],
    },
    {
        id: 'kampus-merdeka',
        year: '2023',
        href: 'https://www.dicoding.com/',
        image: '/img/experience/kampusmerdeka.png',
        alt: 'Logo Kampus Merdeka',
        paragraphs: [
            <>
                <span className="font-bold">Camp404</span> adalah media pembelajaran digital yang
                menawarkan berbagai program untuk meningkatkan keahlian tanpa latar belakang. Saya
                mengikuti pelatihan React untuk bisa memahami React.
            </>,
            <>
                Saya berterima kasih dengan adanya program pelatihan yang diadakan secara gratis, karena
                memberikan pengalaman dalam menangani studi kasus yang nyata yaitu membuat project kecil.
            </>,
        ],
        imgClassName: 'w-[150px] lg:w-[200px] lg:relative lg:bottom-7',
    },
];

const SKILLS = [
    { id: 'react', name: 'React', href: 'https://reactjs.org/docs/getting-started.html' },
    { id: 'express', name: 'Express', href: 'https://expressjs.com/en/starter/installing.html' },
    { id: 'javascript', name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
    { id: 'nodejs', name: 'Node.js', href: 'https://nodejs.org/en/docs/' },
    { id: 'php', name: 'PHP', href: 'https://www.php.net/docs.php' },
    { id: 'laravel', name: 'Laravel', href: 'https://laravel.com/docs' },
    { id: 'tailwind', name: 'Tailwind CSS', href: 'https://tailwindcss.com/docs' },
    { id: 'mongodb', name: 'MongoDB', href: 'https://docs.mongodb.com/' },
    { id: 'html', name: 'HTML', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { id: 'css', name: 'CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { id: 'mysql', name: 'MySQL', href: 'https://dev.mysql.com/doc/' },
    { id: 'github', name: 'GitHub', href: 'https://github.com' },
];

function TimelineItem({ item }) {
    return (
        <div
            className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:dark:bg-slate-800 before:bg-primary before:absolute before:rounded-full before:left-[58px]"
            data-aos="zoom-out-right"
        >
            <h3 className="absolute left-0 text-lg dark:text-[#CCCCCC] text-white font-semibold">
                {item.year}
            </h3>
            <div className="container mx-auto p-4">
                <div className="clearfix">
                    <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="float-left max-w-[250px] mx-2.5 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100"
                    >
                        <img
                            src={item.image}
                            alt={item.alt}
                            loading="lazy"
                            width={200}
                            height={200}
                            className={`w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] object-contain ${item.imgClassName ?? ''}`}
                        />
                    </a>
                    {item.paragraphs.map((paragraph, i) => (
                        <p key={i.id} className="text-lg dark:text-[#CCCCCC] text-white">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

function SkillIcon({ skill }) {
    return (
        <a
            href={skill.href}
            target="_blank"
            rel="noreferrer"
            className={ICON_LINK_CLASS}
        >
            <img src={`https://skillicons.dev/icons?i=${skill.id}`} alt={`${skill.name} skill`} />
        </a>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="pt-36 pb-32 bg-[#333333] w-full dark:bg-[#1A1A1A]">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-20" data-aos="zoom-out">
                        <h4 className="text-lg dark:text-[#CCCCCC] text-white font-semibold mb-2 uppercase">
                            Pengalaman
                        </h4>
                        <h2 className="font-bold text-slate-50 text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-[#CCCCCC]">
                            Pengalaman dan Skill
                        </h2>
                        <p className="text-md font-medium md:text-lg dark:text-[#CCCCCC] text-white">
                            Pengalaman dari berbagai sumber untuk membantu mengembangkan diri{' '}
                            <span className="text-[#1A1A1A] font-bold dark:text-[#333333] dark:font-bold">
                                ...
                            </span>
                        </p>
                    </div>

                    <div
                        className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white"
                        data-aos="fade-up"
                    >
                        {TIMELINE_ITEMS.map((item) => (
                            <TimelineItem key={item.id} item={item} />
                        ))}
                    </div>

                    <div
                        className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:dark:bg-[#CCCCCC] before:bg-primary before:absolute before:rounded-full before:left-[58px]"
                        data-aos="zoom-out-right"
                    >
                        <h3 className="absolute left-0 text-lg dark:text-[#CCCCCC] text-white font-semibold">
                            Skill
                        </h3>

                        <div className="hidden lg:flex lg:flex-wrap justify-center items-center">
                            {SKILLS.map((skill) => (
                                <SkillIcon key={skill.id} skill={skill} />
                            ))}
                        </div>

                        <div className="grid grid-cols-3 lg:hidden justify-center items-center">
                            {SKILLS.map((skill) => (
                                <SkillIcon key={skill.id} skill={skill} />
                            ))}
                        </div>
                    </div>

                    <div
                        className="mt-10 py-5 lg:px-48"
                        data-aos="zoom-in-up"
                        data-aos-offset="200"
                        data-aos-duration="800"
                    >
                        <GitHubCalendar username="Faisal" />
                    </div>
                </div>
            </div>
        </section>
    );
}