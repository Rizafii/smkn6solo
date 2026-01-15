import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

const vocations = [
    {
        id: 1,
        title: 'Akutansi Keuangan Lembaga',
        description:
            'Pelajari prinsip-prinsip akuntansi dan manajemen keuangan untuk lembaga bisnis dan organisasi.',
        bgImage: '/gallery/1.JPG',
    },
    {
        id: 2,
        title: 'Manajemen Perkantoran dan Layanan Bisnis',
        description:
            'Pelajari keterampilan manajemen perkantoran dan layanan bisnis.',
        bgImage: '/gallery/2.JPG',
    },
    {
        id: 3,
        title: 'Usaha Layanan Pariwisata',
        description:
            'Pelajari tentang industri pariwisata dan keterampilan yang dibutuhkan untuk mengelola usaha layanan pariwisata.',
        bgImage: '/gallery/3.jpeg',
    },

    {
        id: 4,
        title: 'Pemasaran',
        description:
            'Pelajari tentang strategi pemasaran dan teknik promosi untuk meningkatkan penjualan dan membangun merek.',
        bgImage: '/gallery/3.jpeg',
    },
    {
        id: 5,
        title: 'Desain Komunikasi Visual',
        description:
            'Pelajari tentang desain grafis, komunikasi visual, dan penggunaan media digital untuk menyampaikan pesan secara efektif.',
        bgImage: '/gallery/3.jpeg',
    },
    {
        id: 6,
        title: 'Broadcasting dan Perfilman',
        description:
            'Pelajari tentang teknik produksi media, penyiaran, dan perfilman untuk menciptakan konten yang menarik dan berkualitas.',
        bgImage: '/gallery/3.jpeg',
    },
    {
        id: 7,
        title: 'Rekayasa Perangkat Lunak',
        description:
            'Pelajari tentang pengembangan perangkat lunak, pemrograman, dan manajemen proyek teknologi informasi.',
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
            <div className="container mx-auto px-8 py-12 md:px-26 md:py-28">
                <div className="flex w-full flex-col items-center gap-12 md:gap-14">
                    <div className="top flex w-full flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-0">
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
                    <div className="content relative h-[600px] w-full overflow-hidden">
                        {/* Background Image - Left Half Only */}
                        <div className="absolute top-0 bottom-0 left-0 w-full overflow-hidden md:w-1/2">
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

                        {/* Gradient Overlay - White to Transparent */}
                        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-1/4 bg-linear-to-l from-background to-transparent opacity-0 md:opacity-100" />

                        {/* Floating Cards on the Right - Horizontal Carousel */}
                        <div className="absolute top-0 right-0 bottom-0 flex w-full items-center pr-4 pl-4 md:w-3/5">
                            <Carousel
                                setApi={setApi}
                                opts={{
                                    align: 'start',
                                    loop: true,
                                }}
                                className="w-full"
                            >
                                <CarouselContent className="w-full py-8">
                                    {vocations.map((vocation, index) => (
                                        <CarouselItem
                                            key={vocation.id}
                                            className="basis-full pl-4 md:basis-3/7"
                                        >
                                            <div
                                                className={`group flex h-[400px] cursor-pointer flex-col rounded-lg p-10 shadow-lg transition-colors duration-300 ${
                                                    index === current
                                                        ? 'bg-primary'
                                                        : 'bg-card hover:bg-primary'
                                                }`}
                                            >
                                                <div className="mb-6 flex items-start justify-between">
                                                    <h3
                                                        className={`text-3xl font-bold transition-colors ${
                                                            index === current
                                                                ? 'text-background'
                                                                : 'text-foreground group-hover:text-background'
                                                        }`}
                                                    >
                                                        {vocation.title}
                                                    </h3>
                                                </div>
                                                <div
                                                    className={`mb-6 h-1 w-16 transition-colors ${
                                                        index === current
                                                            ? 'bg-background'
                                                            : 'bg-primary group-hover:bg-background'
                                                    }`}
                                                />
                                                <p
                                                    className={`text-sm leading-relaxed transition-colors ${
                                                        index === current
                                                            ? 'text-background/90'
                                                            : 'text-muted-foreground group-hover:text-background/90'
                                                    }`}
                                                >
                                                    {vocation.description}
                                                </p>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <div className="absolute right-4 z-20 flex gap-4">
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
