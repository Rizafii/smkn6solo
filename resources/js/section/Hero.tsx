import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Link } from '@inertiajs/react';
import { Menu } from 'lucide-react';
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
            <header className="relative mx-auto flex w-full items-center overflow-hidden bg-primary px-6 py-2 text-background md:px-14">
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
            </header>

            <nav className="relative mx-auto flex w-full items-center justify-between px-6 py-6 md:px-14">
                <Link className="flex items-center gap-2">
                    <img src="/smk.svg" alt="" className="h-auto w-14" />
                    <p className="text-xl leading-6 font-bold tracking-wider text-background uppercase">
                        SMK Negeri 6 <br />
                        Surakarta
                    </p>
                </Link>
                <NavigationMenu>
                    <NavigationMenuList className="flex-wrap">
                        <NavigationMenuItem className="hidden md:block">
                            <NavigationMenuTrigger className="text-base font-semibold text-background hover:text-background">
                                Tentang Kami
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-4">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">
                                                <div className="font-medium">
                                                    Components
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Browse all components in the
                                                    library.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">
                                                <div className="font-medium">
                                                    Documentation
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Learn how to use the
                                                    library.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">
                                                <div className="font-medium">
                                                    Blog
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Read our latest blog posts.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="hidden md:block">
                            <NavigationMenuTrigger className="text-base font-semibold text-background hover:text-background">
                                Tentang Kami
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-4">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">
                                                <div className="font-medium">
                                                    Components
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Browse all components in the
                                                    library.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">
                                                <div className="font-medium">
                                                    Documentation
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Learn how to use the
                                                    library.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">
                                                <div className="font-medium">
                                                    Blog
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Read our latest blog posts.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="hidden md:block">
                            <NavigationMenuTrigger className="text-base font-semibold text-background hover:text-background">
                                Tentang Kami
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-4">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">
                                                <div className="font-medium">
                                                    Components
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Browse all components in the
                                                    library.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">
                                                <div className="font-medium">
                                                    Documentation
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Learn how to use the
                                                    library.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">
                                                <div className="font-medium">
                                                    Blog
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Read our latest blog posts.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="hidden md:block">
                            <NavigationMenuTrigger className="text-base font-semibold text-background hover:text-background">
                                Tentang Kami
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-4">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">
                                                <div className="font-medium">
                                                    Components
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Browse all components in the
                                                    library.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">
                                                <div className="font-medium">
                                                    Documentation
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Learn how to use the
                                                    library.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">
                                                <div className="font-medium">
                                                    Blog
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Read our latest blog posts.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <Menu
                    size={24}
                    strokeWidth={2}
                    className="flex text-background md:hidden"
                />
            </nav>

            <article className="absolute bottom-32 flex flex-col items-start gap-6 px-6 md:px-14">
                <h1 className="max-w-[600px] text-3xl font-bold text-background">
                    Lorem Ipsum Dolor Sitamet
                </h1>
                <p className="max-w-[750px] leading-7 font-medium text-background">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod, quia, voluptatum, voluptatibus quae
                    voluptatem quibusdam quibusdamque quas officiis quibusdam.
                    Quisquam, quod, quia, voluptatum, voluptatibus quae
                    voluptatem quibusdam quibusdamque quas officiis quibusdam.""
                </p>
                <Button variant="outlinewhite">Selengkapnya</Button>
            </article>
            {/* Slide Indicators with Progress - Bottom of Section */}
            <div className="absolute right-0 bottom-8 left-0 flex w-full justify-center px-6 md:px-14">
                <div className="flex w-full gap-4">
                    {heroSlides.map((slide, index) => (
                        <button
                            key={slide.id}
                            onClick={() => setCurrentSlide(index)}
                            className="group relative flex flex-1 flex-col items-start gap-2"
                        >
                            <span
                                className={`text-sm font-medium transition-colors group-hover:text-background ${
                                    index === currentSlide
                                        ? 'text-background'
                                        : 'text-background/80'
                                }`}
                            >
                                {slide.title}
                            </span>
                            <div className="h-1 w-full overflow-hidden rounded-full bg-background/30">
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
