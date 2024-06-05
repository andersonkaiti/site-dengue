import Footer from "@/components/footer/footer";
import Image from "next/image";
import styles from "./sintomas.module.css"

const ImageAttr = {
    fill: true,
    objectFit: "cover",
    style: {
        borderRadius: "10px"
    }
}

export default function Prevencao() {
    return (
        <>
            <main>
                <section className={styles.boxImg}>
                    <div className={styles.ImagensPrevencao}>
                        <Image
                            src="/prevencao/image10.png"
                            alt="Foto1"
                            {...ImageAttr}
                        />
                    </div>
                    <div className={styles.ImagensPrevencao}>
                        <Image
                        src="/prevencao/image8.png"
                        alt="Foto2"
                        {...ImageAttr}
                        />
                    </div>
                    <div className={styles.ImagensPrevencao}>
                        <Image
                        src="/prevencao/image7.png"
                        alt="Foto3"
                        {...ImageAttr}
                        />
                    </div>
                    <div className={styles.ImagensPrevencao}>
                        <Image
                        src="/prevencao/image9.png"
                        alt="Foto4"
                        {...ImageAttr}
                        />
                    </div>
                    <div className={styles.ImagensPrevencao}>
                        <Image
                        src="/prevencao/image11.png"
                        alt="Foto5"
                        {...ImageAttr}
                        />
                    </div>
                </section>

                <section className={styles.textoPrimeiro}>
                    <h2>Prevenir é proteger, a saúde é uma <br />responsabilidade de todos!</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quod omnis suscipit impedit id, minus doloremque modi labore molestiae veniam quia numquam nam eos. A magnam modi delectus tempore aliquid! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut minima atque tempora quod? Reiciendis vero fugiat est fugit facilis repudiandae sunt, molestias repellat ut obcaecati sit dignissimos doloribus qui distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, molestias? Quisquam, ullam excepturi? Ipsam aliquid recusandae, vel saepe dicta in, harum, inventore id placeat eum non maiores eius iste qui!</p>
                </section>

                <section className={styles.textoSegundo}>
                    <h2>Medidas de Prevenção:</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nobis explicabo dolore recusandae quo laborum veniam neque. Excepturi, minus cumque consectetur velit aut voluptatum, ea totam, dolore quis unde sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eveniet perferendis reiciendis culpa sint in similique voluptatibus quisquam ipsam provident? Similique fugit beatae perferendis error dicta. Quis doloremque placeat voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dolores! Quisquam, eos nostrum quia illum veniam quae sapiente quidem dolores velit, perferendis voluptates laborum dicta accusantium exercitationem nobis molestiae. Reiciendis.</p>
                </section>

                <section className={styles.textoTerceiro}>
                    <h2>Checklists e Dicas Práticas:</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est iste ullam laboriosam expedita praesentium pariatur molestias sequi eaque adipisci, fuga nesciunt perferendis dicta. Dolores earum exercitationem fugiat, possimus sequi provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quae et natus nihil officia voluptates adipisci accusamus inventore expedita nam nulla minus accusantium eveniet porro, culpa, omnis perspiciatis doloribus eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero animi suscipit dolorum reprehenderit atque quis at magnam velit similique quasi alias repudiandae, aut obcaecati facere iure, quidem rem. Qui?</p>
                </section>
            </main>
            <Footer/>
        </>
    );
}