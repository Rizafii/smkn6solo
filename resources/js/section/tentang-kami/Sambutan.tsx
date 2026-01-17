export default function Sambutan() {
    return (
        <section className="w-full" id="sambutan">
            <div className="container mx-auto px-8 py-12 md:px-62 md:py-24">
                <article className="flex flex-col items-start gap-10">
                    <h2 className="text-3xl font-semibold text-foreground">
                        Sambutan Kepala Sekolah
                    </h2>
                    <div className="content flex flex-col items-start gap-6 md:flex-row md:items-center">
                        <img
                            src="/kepalasekolah.jpg"
                            alt="Kepala Sekolah SMKN 6 Surakarta"
                            className="h-auto w-96"
                        />
                        <div className="desc flex flex-col items-start gap-6">
                            <p className="text-justify leading-7 text-muted-foreground">
                                <span className="font-semibold">
                                    Salam Literasi
                                </span>{' '}
                                <br />
                                <br /> Terima kasih Bapak/ Ibu / Saudara yang
                                sudah berkenan singgah di website
                                www.smkn6solo.sch.id Website sekolah ini kami
                                fungsikan sebagai media informasi tentang SMK N
                                6 Surakarta dan sebagai sarana bagi kami belajar
                                literasi. Kami berusaha mengupdate setiap data
                                dan berita sehingga apa yang dimuat di website
                                sesuai dengan kondisi yang ada SMK BISA SMK
                                HEBAT SMK BISA HEBAT
                            </p>
                            <div className="bio">
                                <p className="text-lg font-bold text-foreground">
                                    Dwi Titik Indiyanti,S.Si,M.Pd.
                                </p>
                                <p className="leading-7 text-muted-foreground">
                                    Kepala Sekolah SMKN 6 Surakarta
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
