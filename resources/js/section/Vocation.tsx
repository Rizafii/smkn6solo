import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const vocations = [
    {
        id: 1,
        title: 'Bonds',
        description:
            'Jelajahi informasi terbaru tentang obligasi Pertamina, peluang investasi, serta komitmen kami terhadap pertumbuhan berkelanjutan.',
        bgImage: '/gallery/1.JPG',
    },
    {
        id: 2,
        title: 'Shareholders',
        description:
            'Ketahui struktur kepemilikan, tata kelola, serta peran kami dalam pengelolaan perusahaan.',
        bgImage: '/gallery/2.JPG',
    },
    {
        id: 3,
        title: 'Annual Report',
        description:
            'Jelajahi laporan tahunan bisnis dan kinerja keuangan setiap tahun.',
        bgImage: '/gallery/3.jpeg',
    },
];

export default function Vocation() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);
    return (
        <section className="w-full">
            <div className="container py-12 md:py-28">
                <div className="flex w-full flex-col items-center gap-12 md:gap-14">
                    <div className="top flex w-full flex-col items-end justify-between gap-6 px-6 md:flex-row md:gap-0 md:px-26">
                        <div className="title flex flex-col items-start gap-2">
                            <p className="text-sm font-semibold text-primary uppercase">
                                Vocation
                            </p>
                            <h6 className="max-w-125 text-3xl font-semibold text-foreground">
                                Jurusan Kami
                            </h6>
                        </div>
                        <div className="desc">
                            <p className="max-w-137.5 text-justify text-base leading-7 text-muted-foreground">
                                Setiap jurusan dirancang untuk memberikan
                                pengetahuan dan keterampilan yang relevan dengan
                                kebutuhan industri saat ini.
                            </p>
                        </div>
                    </div>
                    <div className="content relative h-[600px] w-full">
                        {/* Background Image - Left Half Only */}
                        <div className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden">
                            {vocations.map((vocation, index) => (
                                <img
                                    key={vocation.id}
                                    src={vocation.bgImage}
                                    alt={vocation.title}
                                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                                        index === current
                                            ? 'opacity-100'
                                            : 'opacity-0'
                                    }`}
                                />
                            ))}
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        {/* Floating Cards on the Right - Horizontal Carousel */}
                        <div className="absolute top-0 right-0 bottom-0 flex w-full items-center pr-4 md:w-3/5">
                            <Carousel
                                setApi={setApi}
                                opts={{
                                    align: 'start',
                                    loop: true,
                                }}
                                className="w-full"
                            >
                                <CarouselContent className="-ml-4 py-8">
                                    {vocations.map((vocation) => (
                                        <CarouselItem
                                            key={vocation.id}
                                            className="basis-2/5 pl-4"
                                        >
                                            <div className="group flex h-[400px] cursor-pointer flex-col rounded-lg bg-card p-12 shadow-lg transition-colors duration-300 hover:bg-primary">
                                                <div className="mb-6 flex items-start justify-between">
                                                    <h3 className="text-3xl font-bold text-foreground transition-colors group-hover:text-background">
                                                        {vocation.title}
                                                    </h3>
                                                    <ArrowUpRight className="h-6 w-6 text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-background" />
                                                </div>
                                                <div className="mb-6 h-1 w-16 bg-primary transition-colors group-hover:bg-background" />
                                                <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-background/90">
                                                    {vocation.description}
                                                </p>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <div className="absolute right-4 -bottom-20 flex gap-4">
                                    <CarouselPrevious className="relative top-0 left-0 h-12 w-12 translate-y-0" />
                                    <CarouselNext className="relative top-0 right-0 h-12 w-12 translate-y-0" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
