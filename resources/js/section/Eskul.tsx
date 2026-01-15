import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const organisasiData = [
    {
        id: 1,
        title: 'Organisasi Siswa Intra Sekolah',
        image: '/gallery/1.JPG',
        logo: '/logo/osis.svg',
        description: 'Wadah kegiatan siswa untuk mengembangkan kepemimpinan',
    },
    {
        id: 2,
        title: 'Majelis Perwakilan Kelas',
        image: '/gallery/1.JPG',
        logo: '/logo/mpk.svg',
        description: 'Perwakilan siswa dalam menyuarakan aspirasi kelas',
    },
    {
        id: 3,
        title: 'Dewan Ambalan Pramuka',
        image: '/gallery/2.JPG',
        logo: '/logo/dewan.svg',
        description: 'Kepanduan yang membentuk karakter dan kemandirian',
    },
    {
        id: 4,
        title: 'PMR',
        image: '/gallery/3.jpeg',
        logo: '/gallery/logo-pmr.png',
        description: 'Palang Merah Remaja untuk kemanusiaan',
    },
];

const eskulData = [
    {
        id: 1,
        title: 'Basket',
        image: '/gallery/4.JPG',
        logo: '/gallery/logo-basket.png',
        description: 'Olahraga tim yang melatih kerjasama dan sportivitas',
    },
    {
        id: 2,
        title: 'Futsal',
        image: '/gallery/5.JPG',
        logo: '/gallery/logo-futsal.png',
        description: 'Sepak bola indoor penuh strategi',
    },
    {
        id: 3,
        title: 'Voli',
        image: '/gallery/6.JPG',
        logo: '/gallery/logo-voli.png',
        description: 'Olahraga beregu yang melatih koordinasi',
    },
];

export default function Eskul() {
    return (
        <section className="w-full">
            <div className="container mx-auto flex flex-col gap-14 px-8 py-12 md:px-26 md:py-28">
                <div className="top flex w-full flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-0">
                    <div className="title flex flex-col items-start gap-2">
                        <p className="text-sm font-semibold text-primary uppercase">
                            Ekstrakulikuler
                        </p>
                        <h6 className="max-w-125 text-3xl font-semibold text-foreground">
                            Kegiatan Ekstrakulikuler Kami
                        </h6>
                    </div>
                    <div className="desc">
                        <p className="max-w-137.5 text-justify text-base leading-7 text-muted-foreground">
                            Kami menawarkan berbagai kegiatan ekstrakulikuler
                            yang dirancang untuk mengembangkan minat dan bakat
                            siswa di luar jam pelajaran.
                        </p>
                    </div>
                </div>
                <div className="content">
                    <Tabs defaultValue="organisasi">
                        <TabsList>
                            <TabsTrigger value="organisasi">
                                Organisasi
                            </TabsTrigger>
                            <TabsTrigger value="eskul">
                                Ekstrakulikuler
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="organisasi">
                            <div className="container mt-4 grid w-full grid-cols-6 items-center gap-4">
                                {organisasiData.map((item) => (
                                    <div
                                        key={item.id}
                                        className="card-flip group h-68 w-full cursor-pointer perspective-[1000px]"
                                    >
                                        <div className="card-flip-inner relative h-full w-full transition-transform duration-600 ease-in-out transform-3d group-hover:transform-[rotateY(180deg)]">
                                            {/* Front */}
                                            <div className="card-flip-front absolute inset-0 h-full w-full overflow-hidden rounded-lg backface-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={`organisasi-${item.id}`}
                                                    className="absolute inset-0 h-full w-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-foreground/40" />
                                                <h3 className="relative px-7 py-9 text-lg font-semibold text-background">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            {/* Back */}
                                            <div className="card-flip-back absolute inset-0 h-full w-full transform-[rotateY(180deg)] overflow-hidden rounded-lg bg-slate-100 backface-hidden">
                                                <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
                                                    <img
                                                        src={item.logo}
                                                        alt={`logo-${item.id}`}
                                                        className="h-24 w-24 object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="eskul">
                            <div className="container mt-4 grid w-full grid-cols-6 items-center gap-4">
                                {eskulData.map((item) => (
                                    <div
                                        key={item.id}
                                        className="card-flip group h-68 w-full cursor-pointer perspective-[1000px]"
                                    >
                                        <div className="card-flip-inner relative h-full w-full transition-transform duration-600 ease-in-out transform-3d group-hover:transform-[rotateY(180deg)]">
                                            {/* Front */}
                                            <div className="card-flip-front absolute inset-0 h-full w-full overflow-hidden rounded-lg backface-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={`eskul-${item.id}`}
                                                    className="absolute inset-0 h-full w-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-foreground/40" />
                                                <h3 className="relative px-7 py-9 text-lg font-semibold text-background">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            {/* Back */}
                                            <div className="card-flip-back absolute inset-0 h-full w-full transform-[rotateY(180deg)] overflow-hidden rounded-lg bg-slate-100 backface-hidden">
                                                <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
                                                    <img
                                                        src={item.logo}
                                                        alt={`logo-${item.id}`}
                                                        className="h-24 w-24 object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}
