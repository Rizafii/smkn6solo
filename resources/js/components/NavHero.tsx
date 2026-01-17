import { Link } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from './ui/navigation-menu';

export default function NavHero() {
    return (
        <nav className="relative mx-auto flex w-full items-center justify-between px-8 py-6 md:px-26">
            <Link className="flex items-center gap-2">
                <img src="/smk.svg" alt="" className="h-auto w-14" />
                <p className="text-xl leading-6 font-bold tracking-wider text-background uppercase">
                    SMK Negeri 6 <br />
                    Surakarta
                </p>
            </Link>
            <NavigationMenu viewport={false}>
                <NavigationMenuList className="flex-wrap">
                    <NavigationMenuItem className="hidden md:block">
                        <NavigationMenuLink className="">
                            <Link
                                href="/"
                                className="text-base font-semibold text-background hover:text-background"
                            >
                                <p>Beranda</p>
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hidden md:block">
                        <NavigationMenuTrigger className="text-base font-semibold text-background hover:text-background">
                            Tentang Kami
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-75 gap-4">
                                <li>
                                    <NavigationMenuLink
                                        asChild
                                        className="hover:border-l-4 hover:border-primary"
                                    >
                                        <Link href="/tentang-kami">
                                            <p>Tentang Kami</p>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink
                                        asChild
                                        className="hover:border-l-4 hover:border-primary"
                                    >
                                        <Link href="/tentang-kami#sejarah">
                                            <p>Sejarah Singkat</p>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink
                                        asChild
                                        className="hover:border-l-4 hover:border-primary"
                                    >
                                        <Link href="/tentang-kami#visi-misi">
                                            <p>Visi & Misi</p>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink
                                        asChild
                                        className="hover:border-l-4 hover:border-primary"
                                    >
                                        <Link href="/tentang-kami#logo">
                                            <p>Logo</p>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink
                                        asChild
                                        className="hover:border-l-4 hover:border-primary"
                                    >
                                        <Link href="/tentang-kami#stuktur">
                                            <p>Struktur Organisasi</p>
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
                            <ul className="grid w-75 gap-4">
                                <li>
                                    <NavigationMenuLink
                                        asChild
                                        className="hover:border-l-4 hover:border-primary"
                                    >
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
                                    <NavigationMenuLink
                                        asChild
                                        className="hover:border-l-4 hover:border-primary"
                                    >
                                        <Link href="#">
                                            <div className="font-medium">
                                                Documentation
                                            </div>
                                            <div className="text-muted-foreground">
                                                Learn how to use the library.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink
                                        asChild
                                        className="hover:border-l-4 hover:border-primary"
                                    >
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
                        <NavigationMenuContent className="md:right-4 md:left-auto">
                            <ul className="grid w-75 gap-4">
                                <li>
                                    <NavigationMenuLink
                                        asChild
                                        className="hover:border-l-4 hover:border-primary"
                                    >
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
                                    <NavigationMenuLink
                                        asChild
                                        className="hover:border-l-4 hover:border-primary"
                                    >
                                        <Link href="#">
                                            <div className="font-medium">
                                                Documentation
                                            </div>
                                            <div className="text-muted-foreground">
                                                Learn how to use the library.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink
                                        asChild
                                        className="hover:border-l-4 hover:border-primary"
                                    >
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
