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

interface NavbarProps {
    hideUntilAfterHero?: boolean;
}

export default function Navbar({ hideUntilAfterHero = false }: NavbarProps) {
    const [showNavbar, setShowNavbar] = useState(!hideUntilAfterHero);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        if (!hideUntilAfterHero) return;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroHeight = window.innerHeight;

            // Navbar hanya muncul jika sudah melewati hero
            if (currentScrollY > heroHeight) {
                // Jika scroll ke atas, tampilkan navbar
                if (currentScrollY < lastScrollY) {
                    setShowNavbar(true);
                } else {
                    // Jika scroll ke bawah, sembunyikan navbar
                    setShowNavbar(false);
                }
            } else {
                // Jika masih di area hero, sembunyikan navbar
                setShowNavbar(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, hideUntilAfterHero]);

    return (
        <nav
            className={`${
                hideUntilAfterHero
                    ? `fixed top-0 z-50 w-full border bg-background transition-transform duration-300 ${
                          showNavbar ? 'translate-y-0' : '-translate-y-full'
                      }`
                    : 'relative bg-primary'
            } mx-auto flex w-full items-center justify-between px-6 py-6 md:px-26`}
        >
            <Link className="flex items-center gap-2">
                <img src="/smk.svg" alt="" className="h-auto w-14" />
                <p className="text-xl leading-6 font-bold tracking-wider text-foreground uppercase">
                    SMK Negeri 6 <br />
                    Surakarta
                </p>
            </Link>
            <NavigationMenu>
                <NavigationMenuList className="flex-wrap">
                    <NavigationMenuItem className="hidden md:block">
                        <NavigationMenuTrigger className="text-base font-semibold text-foreground hover:text-foreground">
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
                                                Learn how to use the library.
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
                        <NavigationMenuTrigger className="text-base font-semibold text-foreground hover:text-foreground">
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
                                                Learn how to use the library.
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
                        <NavigationMenuTrigger className="text-base font-semibold text-foreground hover:text-foreground">
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
                                                Learn how to use the library.
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
                        <NavigationMenuTrigger className="text-base font-semibold text-foreground hover:text-foreground">
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
                                                Learn how to use the library.
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
    );
}
