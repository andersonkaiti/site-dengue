import Footer from "@/components/footer/footer";
import Image from "next/image";
import styles from "./sintomas.module.css"


export default function Sintomas() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-24">
            <div className="inicio">
                <div className={styles.principal}>
                    <Image
                        src="/sintomas/Gallery.png"
                        alt="Fotos de pessoas"
                        layout="responsive"
                        width={1624}
                        height={568}
                    />
                </div>
                <div className={styles.textodestaque}>
                    <h1>Alerta Dengue: <br /> Identifique os <br />Sintomas</h1>
                </div>
            </div>

            <div className={styles.ataques}>
                <h1>Como a Dengue ataca o corpo?</h1>
                <p>A Organização Mundial da Saúde (OMS) considera a dengue como a doença mais prevalente transmitida por mosquitos. A dengue hemorrágica é uma forma grave da doença, cujas infecções aumentaram mais de 30 vezes globalmente nos últimos 50 anos. O sistema imunológico desenvolve imunidade específica para cada tipo de dengue, permitindo múltiplas infecções, podendo uma pessoa contrair a doença até quatro vezes. Infecções subsequentes tendem a ser mais severas. A transmissão ocorre quando um mosquito pica uma pessoa infectada, permitindo que o vírus se multiplique em seu corpo por cerca de 12 dias antes de ser transmitido a outra pessoa saudável através da picada do mosquito.</p>
            </div>

            <div className={styles.evolucao}>

                <div className={styles.textoevolucao}>
                    <h1>Evolução da dengue</h1>
                    <p>
                        O curso da dengue é imprevisível e piora rapidamente. Os sintomas da dengue começam com uma febre alta que dura de 4 a 7 dias. O paciente sentirá fortes dores de cabeça, dores nas articulações, náuseas, fadiga, perda de apetite. Estes são os sintomas da dengue leve.
                    <br/>
                    <br />  
                        Após o estágio inicial (os primeiros 3 dias da infecção), o paciente sente-se desconfortável com as lesões no interior dos vasos sanguíneos e linfáticos, que podem ser acompanhadas de dor abdominal, fezes pretas, hemorragias nasais e fezes sanguinolentas, sangramento nas gengivas… neste momento o corpo do paciente reduziu as plaquetas a ponto de sangrar.O sintoma mais grave da dengue é o choque.
                    </p>
                </div>
                <div className={styles.fotoalcool}>
                    <Image
                        src="/sintomas/foto5.png"
                        alt="Fotos de pessoas"
                        layout="responsive"
                        width={1624}
                        height={568}
                    />
                </div>
            </div>
            <Footer/>
        </main>
    );
}