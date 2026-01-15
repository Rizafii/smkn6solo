import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import About from '@/section/About';
import Facility from '@/section/Facility';
import Hero from '@/section/Hero';
import Highlight from '@/section/Highlight';
import Program from '@/section/Program';
import Stats from '@/section/Stats';
import Vocation from '@/section/Vocation';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <Hero />
            <Navbar hideUntilAfterHero />
            <Highlight />
            <About />
            <Stats />
            <Facility />
            <Vocation />
            <Program />
            <Footer />
        </>
    );
}
