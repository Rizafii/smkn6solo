export default function Profile() {
    return (
        <section className="w-full">
            <div className="container mx-auto px-8 pb-12 md:px-62 md:pb-24">
                <article className="flex flex-col items-start gap-10">
                    <h2 className="text-3xl font-semibold text-foreground">
                        Visi, Misi dan Tujuan
                    </h2>
                    <div className="visi flex flex-col items-center gap-4">
                        <p className="text-center text-xl font-semibold">
                            VISI
                        </p>
                        <p className="text-center text-lg leading-7 font-medium text-muted-foreground italic">
                            "Terwujudnya lulusan yang berkarakter kuat, siap
                            bekerja dan berwirausaha dengan berbasis teknologi
                            yang berwawasan lingkungan."
                        </p>
                    </div>
                    <div className="misi flex flex-col items-center gap-4">
                        <p className="text-center text-xl font-semibold">
                            MISI
                        </p>
                        <ol className="flex list-inside list-decimal flex-col items-start gap-2 text-justify text-lg leading-7 text-muted-foreground">
                            <li>
                                Meningkatkan kompetensi pedagogik guru selaras
                                dengan pembelajaran mendalam.
                            </li>
                            <li>
                                Memelihara dan melengkapi sarana prasarana
                                sekolah sesuai kebutuhan jurusan dan menciptakan
                                lingkungan yang aman dan nyaman untuk belajar
                                dan bekerja.
                            </li>
                            <li>
                                Menjalin kerja sama dengan dunia kerja, dunia
                                industri, orang tua/wali siswa, alumni,
                                masyarakat, dan pemangku kepentingan untuk
                                pelaksanaan pembelajaran intrakurikuler,
                                kokurikuler, maupun ekstrakurikuler.
                            </li>
                            <li>
                                Meningkatkan kompetensi guru dan tenaga
                                kependidikan dalam menggunakan teknologi
                                informasi untuk mendukung pembelajaran,
                                administrasi, promosi, serta branding sekolah.
                            </li>
                            <li>
                                Menyelenggarakan pendidikan karakter untuk
                                mewujudkan 8 dimensi profil lulusan melalui
                                pembiasaan dan pembelajaran intra, ekstra, dan
                                kokurikuler.
                            </li>
                        </ol>
                    </div>
                    <div className="misi flex flex-col items-center gap-4">
                        <p className="text-center text-xl font-semibold">
                            Tujuan
                        </p>
                        <ol className="flex list-inside list-decimal flex-col items-start gap-2 text-justify text-lg leading-7 text-muted-foreground">
                            <li>
                                Lulusan yang beriman dan bertaqwa ditunjukkan
                                dengan menjalankan ibadah sesuai dengan agama
                                yang dianutnya.
                            </li>
                            <li>
                                Lulusan yang berbadan sehat, kuat, terampil
                                berkolaborasi dan berkomunikasi.
                            </li>
                            <li>
                                Lulusan kompeten sesuai dengan standar dunia
                                kerja dan menguasai teknologi terkini mampu
                                bersaing di era global.
                            </li>
                            <li>
                                Lulusan memiliki keterampilan, keuletan,
                                kreativitas baik secara mandiri maupun
                                kolaborasi dalam berwirausaha.
                            </li>
                            <li>
                                Lembaga pendidikan yang berwawasan mutu (Rapor
                                Pendidikan meningkat).
                            </li>
                            <li>
                                Lingkungan sekolah yang aman, nyaman, dan
                                menyenangkan untuk belajar.
                            </li>
                        </ol>
                    </div>
                </article>
            </div>
        </section>
    );
}
