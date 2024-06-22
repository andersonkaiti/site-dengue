import Footer from "@/components/footer/footer";
import Image from "next/image";
import { ImageAttr } from "@/utils/util";
import styles from "./creditos.module.css";
import { animationLeft, animationRight } from "@/utils/util";

export default function Creditos() {
    return (
        <div className={styles.creditosWrapper}>
            <section className={`${styles.creditsContent} ${styles.creditsContentOne}`} {...animationLeft}>
                <div className={styles.creditsContentText}>
                    <h1 className="title-two">FÁBRICA DE SOFTWARE: DESENVOLVIMENTO DE WEBSITES, APLICATIVOS E JOGOS</h1>
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
            <main {...animationRight}>
                <h1 className="title-two">Nossa Missão</h1>
                <p>
                    O site informativo sobre a dengue, um projeto de extensão do curso de Ciências da Computação da Universidade UNISAGRADO, tem como missão promover a conscientização e a educação da população sobre a prevenção e o combate à dengue. Através de uma plataforma acessível e interativa, buscamos disseminar informações precisas e atualizadas sobre os sintomas, tratamento e medidas preventivas contra a dengue, além de incentivar a participação ativa da comunidade na luta contra essa doença.
                </p>
            </main>
            <section className={`${styles.creditsContent} ${styles.creditsContentTwo}`} {...animationRight}>
                <div className={styles.creditsContentImage}>
                    <Image
                        src="/images/7.png"
                        alt="Imagem 2"
                        {...ImageAttr}
                    />
                </div>
                <div className={`${styles.creditsContentText} content`}>
                    <h1 className="title-two">Integrantes da Equipe</h1>
                    <p>Anderson Kaiti</p>
                    <p>Guilherme Padilha de Marchi</p>
                    <p>Leandro Brosco Camanforte</p>
                    <p>Melck Silva de Oliveira Nascimento</p>
                    <p>Tainara Alves do Nascimento</p>
                    <p>Túlio Braga Alves </p>
                </div>
            </section>
            <section className="content" {...animationRight}>
                <h1 className="title-two">Desenvolvimento</h1>
                <div className={styles.creditsContentLogo}>
                    <Image
                        alt="Ciência da Computação"
                        src="/logos/Ciencia_da_Computacao.jpg"
                        fill={true}
                        objectFit="contain"
                    />
                </div>
            </section>
            <section className={`${styles.support} content`} {...animationLeft}>
                <h1 className="title-two">Apoio</h1>
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