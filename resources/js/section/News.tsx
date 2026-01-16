const newsData = [
    {
        id: 1,
        image: '/gallery/1.JPG',
        category: 'Kegiatan Sekolah',
        title: 'Upacara Peringatan Hari Pendidikan Nasional 2026 di SMKN 6 Solo',
        date: '15 January 2026',
        isFeatured: true,
    },
    {
        id: 2,
        image: '/gallery/2.JPG',
        category: 'Prestasi',
        title: 'Siswa SMKN 6 Solo Raih Juara 1 Lomba Kompetensi Siswa Tingkat Provinsi',
        date: '15 January 2026',
        isFeatured: false,
    },
    {
        id: 3,
        image: '/gallery/3.jpeg',
        category: 'Kerjasama',
        title: 'SMKN 6 Solo Jalin Kemitraan dengan Industri untuk Program Magang Siswa',
        date: '15 January 2026',
        isFeatured: false,
    },
    {
        id: 4,
        image: '/gallery/1.JPG',
        category: 'Pengumuman',
        title: 'Pendaftaran Peserta Didik Baru Tahun Ajaran 2026/2027 Segera Dibuka',
        date: '15 January 2026',
        isFeatured: false,
    },
    {
        id: 5,
        image: '/gallery/2.JPG',
        category: 'Kegiatan',
        title: 'Workshop Peningkatan Kompetensi Guru dan Tenaga Kependidikan SMKN 6 Solo',
        date: '14 January 2026',
        isFeatured: false,
    },
];

export default function News() {
    return (
        <section className="w-full">
            <div className="container mx-auto flex flex-col gap-14 px-8 py-12 md:px-26 md:py-28">
                <div className="top flex w-full flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-0">
                    <div className="title flex flex-col items-start gap-2">
                        <p className="text-sm font-semibold text-primary uppercase">
                            News
                        </p>
                        <h6 className="max-w-125 text-3xl font-semibold text-foreground">
                            Media Berita
                        </h6>
                    </div>
                    <div className="desc">
                        <p className="max-w-137.5 text-justify text-base leading-7 text-muted-foreground">
                            Temukan berita terbaru dan informasi penting seputar
                            sekolah kami di sini.
                        </p>
                    </div>
                </div>
                <div className="content grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {newsData.map((news) => (
                        <div
                            key={news.id}
                            className={`group relative aspect-square overflow-hidden rounded-lg ${
                                news.isFeatured
                                    ? 'lg:col-span-2 lg:row-span-2'
                                    : ''
                            }`}
                        >
                            <img
                                src={news.image}
                                alt={news.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 group-hover:opacity-0" />
                            <div
                                className={`absolute right-0 bottom-0 left-0 text-white transition-all duration-300 ease-in-out group-hover:bottom-3 ${
                                    news.isFeatured ? 'p-6' : 'p-4'
                                }`}
                            >
                                <p
                                    className={`font-semibold tracking-wider uppercase ${
                                        news.isFeatured
                                            ? 'mb-3 text-xs'
                                            : 'mb-2 text-xs'
                                    }`}
                                >
                                    {news.category}
                                </p>
                                <h3
                                    className={`leading-tight font-semibold ${
                                        news.isFeatured
                                            ? 'mb-4 text-2xl'
                                            : 'mb-3 text-base'
                                    }`}
                                >
                                    {news.title}
                                </h3>
                                <div
                                    className={`flex items-center gap-2 ${
                                        news.isFeatured ? 'text-sm' : 'text-xs'
                                    }`}
                                >
                                    <svg
                                        className={
                                            news.isFeatured
                                                ? 'h-4 w-4'
                                                : 'h-3.5 w-3.5'
                                        }
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span>{news.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
