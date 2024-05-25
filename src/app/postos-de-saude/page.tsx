import Footer from "@/components/footer/footer";
import styles from "./postos.module.css";
import Image from "next/image";
import ScrollToTopButton from "@/components/scroll-to-top/scroll-to-top";

const imageBorder = { borderRadius: '10px' };

export default function PostosDeSaude() {
    return (
        <>
            <main>
                <div  className={styles.imagens}>
                    <div className={styles.ImagensIndividuais}>
                        <Image
                            src="/crianca_posto.png"
                            alt="Crianca"
                            width={400}
                            height={400}
                            style={imageBorder} 
                        />
                    </div>
                    <div className={styles.ImagensIndividuais}>
                        <Image
                            src="/cama_posto.png"
                            alt="Crianca"
                            width={400}
                            height={400}
                            style={imageBorder}
                        />
                    </div>
                    <div className={styles.ImagensIndividuais}>
                        <Image
                            src="/triste_posto.png"
                            alt="Crianca"
                            width={400}
                            height={400}
                            style={imageBorder} 
                        />
                    </div>
                    <div className={styles.ImagensIndividuais}>
                        <Image
                            src="/familia_posto.png"
                            alt="Crianca"
                            width={400}
                            height={400}
                            style={imageBorder} 
                        />
                    </div>
                    <div className={styles.ImagensIndividuais}>
                        <Image
                            src="/remedio_posto.png"
                            alt="Crianca"
                            width={400}
                            height={400}
                            style={imageBorder} 
                        />
                    </div>
                </div>
                <h1 className="title-one">
                    Postos de saúde parceiros na linha de frente contra a dengue.
                </h1>
                <div className={styles.postosLinhaFrente}>
                    <h1>Postos de Saúde próximos</h1>
                </div>
            </main>
            <Footer/>
            <ScrollToTopButton/>
        </>
    );
}