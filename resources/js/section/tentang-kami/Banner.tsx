import NavHero from '@/components/NavHero';
import { Link } from '@inertiajs/react';

export default function Banner() {
    return (
        <section className="relative min-h-96 w-full">
            <img
                src="/gallery/1.JPG"
                alt="banner"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full bg-black/40" />
            <div className="nav container mx-auto">
                <NavHero />
            </div>
            <div className="relative container mx-auto mt-24 flex flex-col items-start gap-6 px-8 py-8 md:mt-24 md:px-26 md:py-16">
                <div className="breadcrumb flex items-center gap-2 text-sm text-background">
                    <Link href="/">
                        <p>Beranda</p>
                    </Link>
                    / <p className="font-semibold">Tentang Kami</p>
                </div>
                <h1 className="text-3xl font-bold text-background">
                    Tentang Kami
                </h1>
                <p className="max-w-187.5 leading-7 font-medium text-background">
                    Jelajahi lebih dalam tentang SMK Negeri 6 Surakarta, visi,
                    misi, dan komitmen kami dalam mencetak generasi muda yang
                    siap menghadapi tantangan masa depan.
                </p>
            </div>
        </section>
    );
}
