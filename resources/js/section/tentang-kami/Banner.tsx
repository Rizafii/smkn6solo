import PageBanner from '@/components/PageBanner';

export default function Banner() {
    return (
        <PageBanner
            bgImage="/gallery/1.JPG"
            alt="Tentang Kami Banner"
            breadcrumbs={[
                { label: 'Beranda', href: '/' },
                { label: 'Tentang Kami' },
            ]}
            title="Tentang Kami"
            description="Jelajahi lebih dalam tentang SMK Negeri 6 Surakarta, visi, misi, dan komitmen kami dalam mencetak generasi muda yang siap menghadapi tantangan masa depan."
        />
    );
}
