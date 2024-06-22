import Footer from "@/components/footer/footer";
import Image from "next/image";
import styles from "./creditos.module.css";
import "aos/dist/aos.css";

const ImageAttr = {
    fill: true,
    objectFit: "cover"
}

export default function Creditos() {
    return (
        <div className={styles.creditosWrapper}>
            <section className={`${styles.creditsContent} ${styles.creditsContentOne}`} data-aos="fade-left" data-aos-once="true">
                <div className={styles.creditsContentText}>
                    <h1 className="title">FÁBRICA DE SOFTWARE: DESENVOLVIMENTO DE WEBSITES, APLICATIVOS E JOGOS</h1>
                    <p>Professor Coordenador: Prof. Dr. Elvio Gilberto da Silva</p>
                    <div className={styles.creditsContentLogo}>
                        <Image
                            src="/logos/Ciencia_da_Computacao.jpg"
                            alt="Ciência da Computação"
                            fill={true}
                            objectFit="contain"
                        />
                    </div>
                </div>
                <div className={styles.creditsContentImage}>
                    <Image
                        src="/images/7.png"
                        alt="Imagem 1"
                        {...ImageAttr}
                    />
                </div>
            </section>
            <main data-aos="fade-right" data-aos-once="true">
                <section className="content">
                    <h1 className="title">Nossa Missão</h1>
                    <p>
                        O site informativo sobre a dengue, um projeto de extensão do curso de Ciências da Computação da Universidade UNISAGRADO, tem como missão promover a conscientização e a educação da população sobre a prevenção e o combate à dengue. Através de uma plataforma acessível e interativa, buscamos disseminar informações precisas e atualizadas sobre os sintomas, tratamento e medidas preventivas contra a dengue, além de incentivar a participação ativa da comunidade na luta contra essa doença.
                    </p>
                </section>
            </main>
            <section className={`${styles.creditsContent} ${styles.creditsContentTwo}`} data-aos="fade-left" data-aos-once="true">
                <div className={styles.creditsContentImage}>
                    <Image
                        src="/images/7.png"
                        alt="Imagem 2"
                        {...ImageAttr}
                    />
                </div>
                <div className={`${styles.creditsContentText} content`}>
                    <h1 className="title">Integrantes da Equipe</h1>
                    <p>Anderson Kaiti</p>
                    <p>Guilherme Padilha de Marchi</p>
                    <p>Leandro Brosco Camanforte</p>
                    <p>Melck Silva de Oliveira Nascimento</p>
                    <p>Tainara Alves do Nascimento</p>
                    <p>Túlio Braga Alves </p>
                </div>
            </section>
            <section className="content" data-aos="fade-right" data-aos-once="true">
                <h1 className="title">Desenvolvimento</h1>
                <div className={styles.creditsContentLogo}>
                    <Image
                        alt="Ciência da Computação"
                        src="/logos/Ciencia_da_Computacao.jpg"
                        fill={true}
                        objectFit="contain"
                    />
                </div>
            </section>
            <section className={`${styles.support} content`} data-aos="fade-left" data-aos-once="true">
                <h1 className="title">Apoio</h1>
                <p>José Augusto Magalhães – Coordenador de Extensão</p>
                <div className={styles.creditsContentLogo}>
                    <Image
                        alt="Coordenadoria de Extensão"
                        src="/logos/coordenadoria-de-extensao.jpg"
                        fill={true}
                        objectFit="contain"
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
}