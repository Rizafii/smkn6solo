import { Button } from '@/components/ui/button';

export default function Highlight() {
    return (
        <section className="w-full">
            <div className="gird-cols-1 container mx-auto grid items-center justify-center gap-6 px-8 py-12 md:grid-cols-2 md:gap-0 md:px-26 md:py-28">
                <div className="image flex w-full items-center justify-center">
                    <img src="/smk.svg" alt="logo" className="h-auto w-82" />
                </div>

                <article className="flex flex-col items-start gap-6">
                    <p className="-mb-4 text-sm font-semibold text-primary uppercase">
                        Highlight
                    </p>
                    <h2 className="max-w-125 text-3xl font-semibold text-foreground">
                        Be Smart And Creative To Become an Entrepreneur
                    </h2>
                    <p className="max-w-162.5 text-justify text-base leading-7 text-muted-foreground">
                        Menjadi cerdas dan kreatif adalah kunci untuk menjadi
                        wirausahawan sukses. Di SMKN 6 Surakarta, kami tidak
                        hanya mengajarkan teori, tetapi juga mendorong siswa
                        untuk berpikir inovatif, mengembangkan jiwa
                        kewirausahaan, dan siap menciptakan peluang bisnis di
                        era digital.
                    </p>
                    <Button variant="outlineprimary" size="default">
                        Selengkapnya
                    </Button>
                </article>
            </div>
        </section>
    );
}
