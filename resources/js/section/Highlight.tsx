import { Button } from '@/components/ui/button';

export default function Highlight() {
    return (
        <section className="w-full">
            <div className="container mx-auto grid grid-cols-2 items-center justify-center px-26 py-24">
                <div className="image flex w-full items-center justify-center">
                    <img src="/smk.svg" alt="logo" className="h-auto w-82" />
                </div>

                <article className="flex flex-col items-start gap-6">
                    <p className="-mb-4 text-sm font-semibold text-primary uppercase">
                        Highlight
                    </p>
                    <h2 className="max-w-[500px] text-3xl font-semibold text-foreground">
                        Be Smart And Creative To Become an Entrepreneur
                    </h2>
                    <p className="max-w-[650px] text-base leading-7 text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quod, quia, voluptatum, voluptatibus quae
                        voluptatem quibusdam quibusdamque quas officiis
                        quibusdam. Quisquam, quod, quia, voluptatum,
                        voluptatibus quae voluptatem.
                    </p>
                    <Button variant="outlineprimary" size="default">
                        Selengkapnya
                    </Button>
                </article>
            </div>
        </section>
    );
}
