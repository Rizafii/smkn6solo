import PageBanner from '@/components/PageBanner';

export default function Banner() {
    return (
        <PageBanner
            bgImage="/gallery/1.JPG"
            alt="Program Banner"
            breadcrumbs={[
                { label: 'Beranda', href: '/' },
                { label: 'Program' },
            ]}
            title="Program"
            description="Jelajahi berbagai program unggulan yang ditawarkan oleh SMK Negeri 6 Surakarta untuk mendukung pengembangan keterampilan dan pengetahuan siswa."
        />
    );
}
