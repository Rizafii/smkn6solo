import { Link } from '@inertiajs/react';

export default function Menu() {
    const LinkData = [
        {
            id: 1,
            title: 'Sejarah',
            href: '#sejarah',
        },
        {
            id: 2,
            title: 'Visi & Misi',
            href: '#visi-misi',
        },
        {
            id: 3,
            title: 'Logo',
            href: '#logo',
        },
        {
            id: 4,
            title: 'Struktur',
            href: '#struktur',
        },
    ];
    return (
        <section className="w-full">
            <div className="grid grid-cols-4">
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
