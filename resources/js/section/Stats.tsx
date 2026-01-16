import { Separator } from '@/components/ui/separator';

const statsData = [
    {
        id: 1,
        label: 'Siswa Aktif',
        value: '1.280',
        unit: 'Siswa',
        description: 'Jumlah siswa aktif belajar saat ini.',
    },
    {
        id: 2,
        label: 'Tenaga Pengajar',
        value: '86',
        unit: 'Orang',
        description: 'Jumlah staff, guru, dan karyawan.',
    },
    {
        id: 3,
        label: 'Jurusan',
        value: '7',
        unit: 'Jurusan',
        description: 'Jumlah jurusan yang tersedia.',
    },
    {
        id: 4,
        label: 'EKSTRAKURIKULER',
        value: '14',
        unit: 'Ekskul',
        description: 'Jumlah ekstrakurikuler yang tersedia.',
    },
];

export default function Stats() {
    return (
        <section className="w-full" id="statistik">
            <div className="container mx-auto px-8 py-12 md:px-26 md:py-28">
                <article className="flex flex-col items-center gap-12 md:gap-24">
                    <div className="top flex w-full flex-col items-end justify-between gap-6 md:flex-row md:gap-0">
                        <div className="title flex flex-col items-start gap-2">
                            <p className="text-sm font-semibold text-primary uppercase">
                                Overview
                            </p>
                            <h4 className="max-w-125 text-3xl font-semibold text-foreground">
                                Beberapa Informasi Mengenai SMKN 6 Surakarta
                            </h4>
                        </div>
                        <div className="desc">
                            <p className="max-w-137.5 text-justify text-base leading-7 text-muted-foreground">
                                Statistik dan data terkini tentang SMKN 6
                                Surakarta yang menunjukkan komitmen kami dalam
                                memberikan pendidikan berkualitas dengan
                                dukungan sumber daya yang memadai.
                            </p>
                        </div>
                    </div>
                    <Separator className="w-full" />
                    <div className="card grid w-full grid-cols-2 items-center justify-center gap-8 md:grid-cols-4 md:gap-0">
                        {statsData.map((stat) => (
                            <div
                                key={stat.id}
                                className="flex flex-col items-start gap-6"
                            >
                                <p className="text-sm font-semibold text-primary uppercase">
                                    {stat.label}
                                </p>
                                <p className="flex flex-col gap-2 text-6xl text-foreground">
                                    {stat.value}
                                    <span className="text-5xl font-light">
                                        {stat.unit}
                                    </span>
                                </p>
                                <p className="max-w-42 text-justify text-base leading-7 text-muted-foreground md:max-w-none">
                                    {stat.description}
                                </p>
                                {/* <Button variant="link" size="nopadding">
                                    Pelajari{' '}
                                    <ArrowRight size={16} strokeWidth={2} />
                                </Button> */}
                            </div>
                        ))}
                    </div>
                </article>
            </div>
        </section>
    );
}
