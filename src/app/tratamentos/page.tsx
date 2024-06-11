import Footer from "@/components/footer/footer";
import styles from "./tratamentos.module.css";
import Image from "next/image";

const imageBorder = { borderRadius: '10px' };
const width = 400;
const height = 400;

export default function Tratamentos() {
    return (
        <main>
            <div className={styles.TituloPrincipal}>
                <h1>Conheça os Tratamentos e Proteja Sua Saúde!</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.Introducao}>
                    Espaço para introdução das imagens
                </div>
                <div className={styles.SubCabecalho}>
                    <h2>Tratamentos</h2>
                    <p>Texto para tratamentos</p>
                </div>
                <div className={styles.SubCabecalho}>
                    <h2>Identificação dos sintomas</h2>
                    <p>Texto para Identificação dos sintomas</p>
                    <p>Imagem do mosquito</p>
                </div>
                <div className={styles.SubCabecalho}>
                    <h2>Tratamentos de casos graves</h2>
                    <p>Texto para Tratamentos de casos graves</p>
                    <p>Imagem do mosquito</p>
                </div>  
                <div className={styles.SubCabecalho}>
                    <h2>Medicações Indicadas e Contraindicadas</h2>
                    <p>Texto para Medicações Indicadas e Contraindicadas</p>
                    <p>Imagem do mosquito</p>
                    <p>Imagens do senhor Idoso</p>
                </div>  
                <div className={styles.SubCabecalho}>
                    <h2>Recuperação e Cuidados Pós-Tratamento</h2>
                    <p>Texto para Recuperação e Cuidados Pós-Tratamento</p>
                    <p>Imagem do mosquito</p>
                    <p>Imagens do senhor Idoso</p>
                </div>  
            </div> 
            <Footer/>
        </main>
    );
}
