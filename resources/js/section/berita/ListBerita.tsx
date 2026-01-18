import { Link } from '@inertiajs/react';
import { Calendar } from 'lucide-react';

export default function ListBerita() {
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
        {
            id: 6,
            image: '/gallery/2.JPG',
            category: 'Kegiatan',
            title: 'Workshop Peningkatan Kompetensi Guru dan Tenaga Kependidikan SMKN 6 Solo',
            date: '14 January 2026',
            isFeatured: false,
        },
    ];
    return (
        <section className="w-full">
            <div className="container mx-auto flex flex-col gap-14 px-8 py-6 md:px-26 md:py-12">
                <div className="card grid w-full grid-cols-1 gap-14 md:grid-cols-3">
                    {newsData.map((news) => (
                        <Link
                            key={news.id}
                            className="card-content flex flex-col gap-4"
                        >
                            <div className="h-full max-h-62 w-full overflow-hidden rounded-md">
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="h-full w-full rounded-md object-cover duration-300 hover:scale-105"
                                />
                            </div>

                            <p className="mt-2 font-semibold tracking-wider text-primary uppercase">
                                {news.category}
                            </p>
                            <h3 className="line-clamp-2 text-2xl font-bold">
                                {news.title}
                            </h3>
                            <div className="date flex items-center gap-2 font-medium text-muted-foreground">
                                <Calendar size={14} />
                                {news.date}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
