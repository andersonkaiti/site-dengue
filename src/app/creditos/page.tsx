import Footer from "@/components/footer/footer";
import Image from "next/image";
import styles from "./creditos.module.css"

const ImageAttr = {
    fill: true,
    objectFit: "cover"
}

export default function Creditos() {
    return (
        <>
            <section className={`${styles.creditsContent} ${styles.creditsContentOne}`}>
                <div className={styles.creditsContentText}>
                    <h1 className="title-two">FÁBRICA DE SOFTWARE: DESENVOLVIMENTO DE WEBSITES, APLICATIVOS E JOGOS</h1>
                    <div className={styles.creditsContentLogo}>
                        <Image 
                            alt="Ciência da Computação"
                            src="/Ciencia_da_Computacao.jpg"
                            fill={true}
                            objectFit="contain"
                        />
                    </div>
                </div>
                <div className={styles.creditsContentImage}>
                    <Image
                        alt="Imagem Dengue 4"
                        src="/imagem-dengue-4.png"
                        {...ImageAttr}
                    />
                </div>
            </section>
            <section className={styles.content}>
                <h1 className="title-two">Nossa Missão</h1>
                <p>
                    O site informativo sobre a dengue, um projeto de extensão do curso de Ciências da Computação da Universidade UNISAGRADO, tem como missão promover a conscientização e a educação da população sobre a prevenção e o combate à dengue. Através de uma plataforma acessível e interativa, buscamos disseminar informações precisas e atualizadas sobre os sintomas, tratamento e medidas preventivas contra a dengue, além de incentivar a participação ativa da comunidade na luta contra essa doença.
                </p>
            </section>
            <section className={`${styles.creditsContent} ${styles.creditsContentTwo}`}>
                <div className={styles.creditsContentImage}>
                    <Image
                        alt="Imagem Dengue 4"
                        src="/imagem-dengue-4.png"
                        {...ImageAttr}
                    />
                </div>
                <div className={`${styles.creditsContentText} ${styles.content}`}>
                    <h1 className="title-two">Colaboradores</h1>
                    <p>Prof. Dr. Elvio Gilberto da Silva</p>
                    <p>Anderson Kaiti</p>
                    <p>Guilherme Padilha de Marchi</p>
                    <p>Leandro Brosco Camanforte</p>
                    <p>Melck Silva de Oliveira Nascimento</p>
                    <p>Tainara Alves do Nascimento</p>
                    <p>Túlio Braga Alves </p>
                </div>
            </section>
            <section className={styles.content}>
                <h1 className="title-two">Desenvolvimento</h1>
                <div className={styles.creditsContentLogo}>
                    <Image
                        alt="Ciência da Computação"
                        src="/Ciencia_da_Computacao.jpg"
                        fill={true}
                        objectFit="contain"
                    />
                </div>
            </section>
            <section className={styles.support}>
                <h1 className="title-two">Apoio</h1>
                <p>José Augusto Magalhães – Coordenador de Extensão</p>
                <div className={styles.creditsContentLogo}>
                    <Image
                        alt="Coordenadoria de Extensão"
                        src="/coordenadoria-de-extensao.jpg"
                        fill={true}
                        objectFit="contain"
                    />
                </div>
            </section>
            <Footer />
        </>
    );
}