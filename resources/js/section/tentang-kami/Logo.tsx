export default function Logo() {
    return (
        <section className="w-full" id="logo">
            <article className="container mx-auto flex flex-col items-start gap-10 px-8 pb-12 md:px-62 md:pb-24">
                <h2 className="text-3xl font-semibold text-foreground">
                    Arti dan Filosofi Logo
                </h2>
                <div className="content flex items-center gap-6">
                    <img
                        src="/smk.svg"
                        alt="Arti dan Filosofi Logo"
                        className="h-auto w-96"
                    />
                    <p className="text-justify leading-7 text-muted-foreground">
                        Logo merupakan suatu bentuk gambar atau sketsa dengan
                        arti tertentu, dan mewakili suatu dari suatu instansi,
                        organisasi yang mengandung arti . Demikian juga dengan
                        logo SMKN 6 Surakarta, yang dulu merupakan SMEA Negeri
                        III, tidak lepas dari nama <strong>SUTOMO</strong>,
                        siswa kelas 3 SMEP Negeri III Surakarta seorang Komandan
                        Kompi <strong>KODJARSENA</strong> (Korp Pelajar
                        Serbaguna) yang mengerahkan teman-temannya untuk
                        bergabung dan menjadi siswa SMEA Negeri 3 yang saat itu
                        akan didirikan pada awal tahun ajaran baru 1967, dan
                        merupakan ketua OSIS yang pertama. Saat itu SMEAN III
                        Surakarta menggunakan gedung SMEP Negeri 3 Surakarta
                        yang terletak di Jalan Urip Sumoharjo No. 53, Warung
                        Pelem Surakarta, yang merupakan bekas sekolah Tiong Hwa
                        yang bernama Sekolah Hoo Hap Hoei.
                    </p>
                </div>
            </article>
        </section>
    );
}
