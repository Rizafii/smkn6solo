import Navbar from '@/components/Navbar';
import Banner from '@/section/berita/Banner';

export default function Page() {
    return (
        <>
            <Banner />
            <Navbar hideUntilAfterHero />
        </>
    );
}
