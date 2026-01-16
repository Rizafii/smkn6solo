import NavHero from '@/components/NavHero';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const heroSlides = [
    {
        id: 1,
        image: '/gallery/1.JPG',
        title: 'GAMBAR 1',
    },
    {
        id: 2,
        image: '/gallery/2.JPG',
        title: 'GAMBAR 2',
    },
    {
        id: 3,
        image: '/gallery/3.jpeg',
        title: 'GAMBAR 3',
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const duration = 5000; // 5 detik per slide

    useEffect(() => {
        setProgress(0);
        const startTime = Date.now();

        const progressInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);
            setProgress(newProgress);
        }, 16); // ~60fps

        const slideTimer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, duration);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(slideTimer);
        };
    }, [currentSlide]);

    return (
        <section className="relative min-h-screen w-full bg-foreground">
            {heroSlides.map((slide, index) => (
                <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}
            <div className="absolute inset-0 bg-black/40" />
            {/* <header className="relative mx-auto flex w-full items-center overflow-hidden bg-foreground/20 px-8 py-2 text-background backdrop-blur-md md:px-26">
                <span className="shrink-0 pr-4 font-bold">
                    BERITA TERBARU :{' '}
                </span>
                <div className="flex flex-1 overflow-hidden">
                    <div className="animate-marquee flex">
                        <span className="px-4 whitespace-nowrap">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quod, quia, voluptatum, voluptatibus
                            quae voluptatem quibusdam quibusdamque quas officiis
                            quibusdam. Quisquam, quod, quia, voluptatum,
                            voluptatibus quae voluptatem quibusdam quibusdamque
                            quas officiis quibusdam.
                        </span>
                        <span className="px-4 whitespace-nowrap">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quod, quia, voluptatum, voluptatibus
                            quae voluptatem quibusdam quibusdamque quas officiis
                            quibusdam. Quisquam, quod, quia, voluptatum,
                            voluptatibus quae voluptatem quibusdam quibusdamque
                            quas officiis quibusdam.
                        </span>
                    </div>
                </div>
            </header> */}
            <NavHero />
            <article className="absolute bottom-32 flex flex-col items-start gap-6 px-8 md:px-26">
                <h1 className="max-w-150 text-3xl font-bold text-background">
                    Wujudkan Masa Depan Cerah Bersama SMKN 6 Surakarta
                </h1>
                <p className="max-w-187.5 leading-7 font-medium text-background">
                    Bergabunglah dengan sekolah kejuruan terdepan yang
                    mempersiapkan generasi muda menjadi profesional handal dan
                    wirausahawan sukses. Dengan 7 jurusan pilihan, fasilitas
                    modern, dan program pembelajaran inovatif, kami siap
                    membimbing Anda meraih prestasi dan kesuksesan.
                </p>
                <Button variant="outlinewhite">Selengkapnya</Button>
            </article>
            {/* Slide Indicators with Progress - Bottom of Section */}
            <div className="absolute right-0 bottom-8 left-0 flex w-full justify-center px-8 md:px-26">
                <div className="flex w-full gap-4">
                    {heroSlides.map((slide, index) => (
                        <button
                            key={slide.id}
                            onClick={() => setCurrentSlide(index)}
                            className="group relative flex flex-1 flex-col items-start gap-2"
                        >
                            <span
                                className={`md:ext-sm text-xs font-medium transition-colors group-hover:text-background ${
                                    index === currentSlide
                                        ? 'text-background'
                                        : 'text-background/80'
                                }`}
                            >
                                {slide.title}
                            </span>
                            <div className="h-0.5 w-full overflow-hidden rounded-full bg-background/30 md:h-1">
                                <div
                                    className="h-full bg-primary transition-all duration-100"
                                    style={{
                                        width:
                                            index === currentSlide
                                                ? `${progress}%`
                                                : '0%',
                                    }}
                                />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
