import Banner from '@/section/tentang-kami/Banner';
import Menu from '@/section/tentang-kami/Menu';
import Sejarah from '@/section/tentang-kami/Sejarah';
import VisiMisi from '@/section/tentang-kami/VisiMisi';
import { Head } from '@inertiajs/react';

export default function TentangKami() {
    return (
        <>
            <Head>
                <title>Tentang Kami - SMK Negeri 6 Surakarta</title>
                <meta
                    name="description"
                    content="Tentang SMK Negeri 6 Surakarta - Sekolah Menengah Kejuruan terdepan di Surakarta yang mempersiapkan generasi muda menjadi profesional handal dan wirausahawan sukses."
                />
                <meta
                    name="keywords"
                    content="SMK Negeri 6 Surakarta, SMKN 6 Solo, sekolah kejuruan, tentang kami, profil sekolah"
                />
                <meta
                    property="og:title"
                    content="Tentang Kami - SMK Negeri 6 Surakarta"
                />
                <meta
                    property="og:description"
                    content="Tentang SMK Negeri 6 Surakarta - Sekolah Menengah Kejuruan terdepan di Surakarta yang mempersiapkan generasi muda menjadi profesional handal dan wirausahawan sukses."
                />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="/tentang-kami" />
            </Head>
            <main>
                <Banner />
                <Menu />
                <Sejarah />
                <VisiMisi />
            </main>
        </>
    );
}
