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
        <nav className="relative z-50 mx-auto flex w-full items-center justify-between px-8 py-6 md:px-26">
            <Link className="flex items-center gap-2" href="/">
                <img src="/smk.svg" alt="" className="h-auto w-14" />
                <p className="text-xl leading-6 font-bold tracking-wider text-background uppercase">
                    SMK Negeri 6 <br />
                    Surakarta
                </p>
            </Link>
            <NavigationMenu viewport={false}>
                <NavigationMenuList className="flex-wrap">
                    <NavigationMenuItem className="hidden md:block">
                        <NavigationMenuTrigger className="text-base font-semibold text-background hover:text-background">
                            Tentang Kami
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
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
                                <Link href="/tentang-kami#sambutan">
                                    <p>Sambutan Kepala Sekolah</p>
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
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hidden md:block">
                        <NavigationMenuTrigger className="text-base font-semibold text-background hover:text-background">
                            Media
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink
                                asChild
                                className="hover:border-l-4 hover:border-primary"
                            >
                                <Link href="/berita">
                                    <p>Berita</p>
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink
                                asChild
                                className="hover:border-l-4 hover:border-primary"
                            >
                                <Link href="/program">
                                    <p>Program</p>
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
