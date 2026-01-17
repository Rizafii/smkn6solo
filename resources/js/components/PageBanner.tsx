import NavHero from '@/components/NavHero';
import { Link } from '@inertiajs/react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageBannerProps {
    bgImage: string;
    alt: string;
    breadcrumbs: BreadcrumbItem[];
    title: string;
    description: string;
}

export default function PageBanner({
    bgImage,
    alt,
    breadcrumbs,
    title,
    description,
}: PageBannerProps) {
    return (
        <section className="relative min-h-96 w-full">
            <img
                src={bgImage}
                alt={alt}
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full bg-black/40" />
            <div className="nav container mx-auto">
                <NavHero />
            </div>
            <div className="relative container mx-auto mt-24 flex flex-col items-start gap-6 px-8 py-8 md:mt-24 md:px-26 md:py-16">
                <div className="breadcrumb flex items-center gap-2 text-sm text-background">
                    {breadcrumbs.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            {item.href ? (
                                <Link href={item.href}>
                                    <p>{item.label}</p>
                                </Link>
                            ) : (
                                <p className="font-semibold">{item.label}</p>
                            )}
                            {index < breadcrumbs.length - 1 && <span>/</span>}
                        </div>
                    ))}
                </div>
                <h1 className="text-3xl font-bold text-background">{title}</h1>
                <p className="max-w-187.5 leading-7 font-medium text-background">
                    {description}
                </p>
            </div>
        </section>
    );
}
