import { Button } from '@/components/ui/button';

export default function About() {
    return (
        <section className="relative w-full">
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quod, quia, voluptatum, voluptatibus quae.
                    </p>
                    <div className="CTA mt-4 flex flex-col items-start gap-6 md:flex-row md:items-center">
                        <Button variant="outlinewhite" size="default">
                            Selengkapnya
                        </Button>
                        <Button variant="outlinewhite" size="default">
                            Stuktur Organisasi
                        </Button>
                    </div>
                </article>
            </div>
        </section>
    );
}
