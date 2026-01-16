import { Button } from '@/components/ui/button';

const programs = [
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

export default function Program() {
    return (
        <section className="w-full bg-slate-50" id="program">
            <div className="container mx-auto flex flex-col gap-14 px-8 py-12 md:px-26 md:py-28">
                <div className="top flex w-full flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-0">
                    <div className="title flex flex-col items-start gap-2">
                        <p className="text-sm font-semibold text-primary uppercase">
                            Program
                        </p>
                        <h6 className="max-w-125 text-3xl font-semibold text-foreground">
                            Program Sekolah Kami
                        </h6>
                    </div>
                    <div className="desc">
                        <p className="max-w-137.5 text-justify text-base leading-7 text-muted-foreground">
                            Kami menawarkan berbagai program unggulan yang
                            dirancang untuk mengembangkan potensi siswa secara
                            maksimal.
                        </p>
                    </div>
                </div>
                <div className="card grid w-full grid-cols-1 gap-10 md:grid-cols-3">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            className="card-content flex flex-col gap-4"
                        >
                            <img
                                src={program.image}
                                alt={program.title}
                                className="h-full max-h-62 w-full rounded-md object-cover"
                            />
                            <h3 className="text-2xl font-bold">
                                {program.title}
                            </h3>
                            <p className="text-justify leading-relaxed">
                                {program.description}
                            </p>
                            <Button
                                variant="outlineprimary"
                                className="mt-8 w-fit"
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
