import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SearchFilter from '@/components/SearchFilter';
import PaginationComponent from '@/section/berita/Pagination';
import Banner from '@/section/program/Banner';
import ListProgram from '@/section/program/ListProgram';

export default function Page() {
    return (
        <>
            <Banner />
            <Navbar hideUntilAfterHero />
            <SearchFilter title="Program" />
            <ListProgram />
            <PaginationComponent />
            <Footer />
        </>
    );
}
