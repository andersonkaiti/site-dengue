import Footer from "@/components/footer/footer";
import styles from "./tratamentos.module.css";
import Image from "next/image";

const imageBorder = { borderRadius: '10px' };

export default function Tratamentos() {
    return (
        <main >
            <div  className={styles.imagens}>
                <div className={styles.ImagensIndividuais}>
                    <Image
                        src="/crianca_tratamentos.png"
                        alt="Crianca"
                        width={400}
                        height={400}
                        style={imageBorder} 
                    />
                </div>
                <div className={styles.ImagensIndividuais}>
                    <Image
                        src="/cama_tratamentos.png"
                        alt="Crianca"
                        width={400}
                        height={400}
                        style={imageBorder}
                    />
                </div>
                <div className={styles.ImagensIndividuais}>
                    <Image
                        src="/triste_tratamentos.png"
                        alt="Crianca"
                        width={400}
                        height={400}
                        style={imageBorder} 
                    />
                </div>
                <div className={styles.ImagensIndividuais}>
                    <Image
                        src="/familia_tratamentos.png"
                        alt="Crianca"
                        width={400}
                        height={400}
                        style={imageBorder} 
                    />
                </div>
                <div className={styles.ImagensIndividuais}>
                    <Image
                        src="/remedio_tratamentos.png"
                        alt="Crianca"
                        width={400}
                        height={400}
                        style={imageBorder} 
                    />
                </div>
            </div>
            <Footer/>
        </main>
    );
}