import { Separator } from '@/components/ui/separator';
import { Link } from '@inertiajs/react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const footerLinks = [
    {
        title: 'Tentang',
        links: [
            { label: 'Profil Sekolah', href: '#' },
            { label: 'Visi & Misi', href: '#' },
            { label: 'Sejarah', href: '#' },
        ],
    },
    {
        title: 'Program',
        links: [
            { label: 'Jurusan', href: '#' },
            { label: 'Ekstrakurikuler', href: '#' },
            { label: 'Prestasi', href: '#' },
        ],
    },
    {
        title: 'Informasi',
        links: [
            { label: 'Pengumuman', href: '#' },
            { label: 'Berita', href: '#' },
            { label: 'Kontak', href: '#' },
        ],
    },
];

const socialMedia = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Youtube, href: '#', label: 'Youtube' },
];

export default function Footer() {
    return (
        <footer className="w-full bg-slate-50">
            <div className="container mx-auto flex flex-col items-center gap-16 px-6 py-12 md:px-26 md:py-24">
                {/* Header Section */}
                <div className="flex flex-col items-center gap-10 text-center">
                    <Link className="flex items-center gap-2">
                        <img src="/smk.svg" alt="" className="h-auto w-20" />
                        <p className="text-start text-3xl leading-9 font-semibold tracking-wider text-foreground uppercase">
                            SMK Negeri 6 <br />
                            Surakarta
                        </p>
                    </Link>
                    <div className="link flex flex-col items-center gap-2">
                        <a
                            href="https://maps.app.goo.gl/6nZHnnuU8HdvLmEU6"
                            className="text-sm text-muted-foreground"
                        >
                            <strong>Alamat:</strong> Jl. LU Adisucipto No. 38,
                            Surakarta, Jawa Tengah 57143
                        </a>
                        <a
                            href="mailto:info@smkn6solo.sch.id"
                            className="text-sm text-muted-foreground"
                        >
                            <strong>Email:</strong> info@smkn6solo.sch.id
                        </a>
                    </div>
                </div>

                {/* Main Content - Map & Links */}
                <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2">
                    {/* Left - Map */}
                    <div className="flex flex-col gap-4">
                        <div className="h-[300px] w-full overflow-hidden border">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d349.5934362775916!2d110.79933517177857!3d-7.553351526364848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a14248f7a300b%3A0x8147b47e94da5fa2!2sSMK%20Negeri%206%20Surakarta!5e0!3m2!1sen!2sid!4v1768355144647!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* Right - Links */}
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                        {footerLinks.map((section) => (
                            <div
                                key={section.title}
                                className="flex flex-col gap-4"
                            >
                                <p className="text-sm font-semibold text-foreground">
                                    {section.title}
                                </p>
                                <ul className="flex flex-col gap-2">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <Separator />

                {/* Bottom - Copyright & Social Media */}
                <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © Copyright SMKN 6 Surakarta 2025. All Right Reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {socialMedia.map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                className="text-muted-foreground transition-colors hover:text-primary"
                                aria-label={label}
                            >
                                <Icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
