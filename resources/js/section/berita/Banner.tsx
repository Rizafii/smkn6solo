import PageBanner from '@/components/PageBanner';

export default function Banner() {
    return (
        <PageBanner
            bgImage="/gallery/1.JPG"
            alt="Berita Banner"
            breadcrumbs={[{ label: 'Beranda', href: '/' }, { label: 'Berita' }]}
            title="Berita"
            description="Temukan informasi terbaru, artikel menarik, dan kabar terkini seputar SMK Negeri 6 Surakarta di halaman berita kami."
        />
    );
}
