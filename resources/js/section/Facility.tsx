import { ArrowRight } from 'lucide-react';

const facilities = [
    {
        category: 'PPID PROFILE',
        title: 'Public Information Service',
        image: '/gallery/1.JPG',
        link: '#',
    },
    {
        category: 'INFORMATION',
        title: 'Pertamina Fuel Price',
        image: '/gallery/2.JPG',
        link: '#',
    },
    {
        category: 'GCG',
        title: 'Corporate Governance',
        image: '/gallery/3.jpeg',
        link: '#',
    },
    {
        category: 'RECRUITMENT',
        title: 'Become a Pertamina Officer',
        image: '/gallery/4.JPG',
        link: '#',
    },
];

export default function Facility() {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {facilities.map((facility, index) => (
                    <a
                        key={index}
                        href={facility.link}
                        className="group relative h-87.5 overflow-hidden md:h-150"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                            style={{
                                backgroundImage: `url(${facility.image})`,
                            }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

                        {/* Content */}
                        <div className="relative flex h-full flex-col justify-end px-6 py-10 text-white">
                            {/* Arrow Button */}
                            <div className="flex w-full flex-col items-start gap-6">
                                <div className="content flex flex-col gap-2">
                                    <p className="text-xs font-semibold tracking-wider uppercase">
                                        {facility.category}
                                    </p>
                                    <h3 className="text-2xl leading-tight font-bold">
                                        {facility.title}
                                    </h3>
                                </div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                                    <ArrowRight className="h-5 w-5 transition-colors duration-300 group-hover:text-black" />
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
