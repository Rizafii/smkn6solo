import { Link } from '@inertiajs/react';

export default function Menu() {
    const LinkData = [
        {
            id: 1,
            title: 'Profil',
            href: '#profil',
        },
        {
            id: 2,
            title: 'Sejarah',
            href: '#sejarah',
        },
        {
            id: 3,
            title: 'Visi & Misi',
            href: '#visi-misi',
        },
        {
            id: 4,
            title: 'Logo',
            href: '#logo',
        },
        {
            id: 5,
            title: 'Struktur Organisasi',
            href: '#struktur-organisasi',
        },
    ];
    return (
        <section className="w-full">
            <div className="grid grid-cols-5">
                {LinkData.map((link) => (
                    <Link
                        href={link.href}
                        className="items-center border border-x-[0.5px] border-b py-4 text-center transition-all duration-200 hover:bg-slate-100"
                    >
                        <p className="text-sm font-medium text-muted-foreground">
                            {link.title}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
