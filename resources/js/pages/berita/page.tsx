import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SearchFilter from '@/components/SearchFilter';
import Banner from '@/section/berita/Banner';
import ListBerita from '@/section/berita/ListBerita';
import PaginationComponent from '@/section/berita/Pagination';

export default function Page() {
    return (
        <>
            <Banner />
            <Navbar hideUntilAfterHero />
            <SearchFilter />
            <ListBerita />
            <PaginationComponent />
            <Footer />
        </>
    );
}
