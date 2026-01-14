import Footer from '@/components/Footer';
import About from '@/section/About';
import Hero from '@/section/Hero';
import Highlight from '@/section/Highlight';
import Stats from '@/section/Stats';
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
            <Highlight />
            <About />
            <Stats />
            <Footer />
        </>
    );
}
