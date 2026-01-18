import { Button } from '@/components/ui/button';

export default function ListProgram() {
    const programData = [
        {
            id: 1,
            image: '/gallery/1.JPG',
            title: "Literasi Pagi Jum'at",
            description:
                "Kegiatan rutin setiap hari Jum'at yang bertujuan untuk memberikan motivasi dan inspirasi kepada siswa melalui berbagai kegiatan positif.",
        },
        {
            id: 2,
            image: '/gallery/2.JPG',
            title: 'Program Unggulan 2',
            description:
                'Deskripsi program unggulan kedua yang dirancang untuk mengembangkan kemampuan siswa dalam bidang tertentu.',
        },
        {
            id: 3,
            image: '/gallery/3.jpeg',
            title: 'Program Unggulan 3',
            description:
                'Deskripsi program unggulan ketiga yang memberikan kesempatan siswa untuk mengeksplorasi minat dan bakat mereka.',
        },
        {
            id: 1,
            image: '/gallery/1.JPG',
            title: "Literasi Pagi Jum'at",
            description:
                "Kegiatan rutin setiap hari Jum'at yang bertujuan untuk memberikan motivasi dan inspirasi kepada siswa melalui berbagai kegiatan positif.",
        },
        {
            id: 2,
            image: '/gallery/2.JPG',
            title: 'Program Unggulan 2',
            description:
                'Deskripsi program unggulan kedua yang dirancang untuk mengembangkan kemampuan siswa dalam bidang tertentu.',
        },
        {
            id: 3,
            image: '/gallery/3.jpeg',
            title: 'Program Unggulan 3',
            description:
                'Deskripsi program unggulan ketiga yang memberikan kesempatan siswa untuk mengeksplorasi minat dan bakat mereka.',
        },
    ];
    return (
        <section className="w-full">
            <div className="container mx-auto flex flex-col gap-14 px-8 py-6 md:px-26 md:py-12">
                <div className="card grid w-full grid-cols-1 gap-14 md:grid-cols-3">
                    {programData.map((program) => (
                        <div
                            key={program.id}
                            className="card-content flex flex-col gap-4"
                        >
                            <div className="h-full max-h-62 w-full overflow-hidden rounded-md">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="h-full w-full rounded-md object-cover duration-300 hover:scale-105"
                                />
                            </div>
                            <h3 className="mt-4 line-clamp-2 text-2xl font-bold">
                                {program.title}
                            </h3>
                            <div className="date line-clamp-2 font-medium text-muted-foreground">
                                {program.description}
                            </div>
                            <Button
                                variant="outlineprimary"
                                className="mt-4 w-fit"
                            >
                                Baca Selengkapnya
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
