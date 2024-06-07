import Footer from "@/components/footer/footer";
import styles from "./tratamentos.module.css";
import Image from "next/image";

const imageBorder = { borderRadius: '10px' };
const width = 400;
const height = 400;

export default function Tratamentos() {
    return (
        <main >
            <div  className={styles.imagens}>
                <div className={styles.ImagensIndividuais}>
                    <Image
                        src="/crianca_tratamentos.png"
                        alt="Crianca"
                        width={width}
                        height={height}
                        style={imageBorder} 
                    />
                </div>
                <div className={styles.ImagensIndividuais}>
                    <Image
                        src="/cama_tratamentos.png"
                        alt="Crianca"
                        width={width}
                        height={height}
                        style={imageBorder}
                    />
                </div>
                <div className={styles.ImagensIndividuais}>
                    <Image
                        src="/triste_tratamentos.png"
                        alt="Crianca"
                        width={width}
                        height={height}
                        style={imageBorder} 
                    />
                </div>
                <div className={styles.ImagensIndividuais}>
                    <Image
                        src="/familia_tratamentos.png"
                        alt="Crianca"
                        width={width}
                        height={height}
                        style={imageBorder} 
                    />
                </div>
                <div className={styles.ImagensIndividuais}>
                    <Image
                        src="/remedio_tratamentos.png"
                        alt="Crianca"
                        width={width}
                        height={height}
                        style={imageBorder} 
                    />
                </div>
            </div>
            <Footer/>
        </main>
    );
}