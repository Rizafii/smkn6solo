import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

export default function About() {
    return (
        <section className="relative w-full" id="tentang-kami">
            <img
                src="/gallery/1.JPG"
                alt="about-image"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/50 to-black/10" />
            <div className="relative container mx-auto px-8 py-24 md:px-26 md:py-42">
                <article className="flex flex-col items-start gap-6">
                    <p className="-mb-4 text-sm font-semibold text-background uppercase">
                        SMKN 6 SURAKARTA
                    </p>
                    <h3 className="max-w-125 text-3xl font-bold text-background">
                        Tentang Kami
                    </h3>
                    <p className="max-w-162.5 text-justify text-base leading-7 text-background">
                        SMK Negeri 6 Surakarta adalah sekolah menengah kejuruan
                        yang berkomitmen untuk mencetak lulusan yang kompeten,
                        berkarakter, dan siap bersaing di dunia kerja. Dengan
                        fasilitas modern dan tenaga pengajar profesional, kami
                        mengembangkan potensi siswa melalui pembelajaran
                        berkualitas dan program-program unggulan yang inovatif.
                    </p>
                    <div className="CTA mt-4 flex flex-col items-start gap-6 md:flex-row md:items-center">
                        <Link href="/tentang-kami">
                            <Button variant="outlinewhite" size="default">
                                Selengkapnya
                            </Button>
                        </Link>
                        <Link href="/tentang-kami#struktur">
                            <Button variant="outlinewhite" size="default">
                                Stuktur Organisasi
                            </Button>
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    );
}
