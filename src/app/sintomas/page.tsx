import Footer from "@/components/footer/footer";
import Image from "next/image";
import styles from "./sintomas.module.css"
import ScrollToTopButton from "@/components/scroll-to-top/scroll-to-top";

const ImageAttr = {
    fill: true,
    objectFit: "cover",
    style: {
        borderRadius: "10px"
    }
}

export default function Sintomas() {
    return (
        <>
            <main>
                <section className={styles.gallery}>
                    <div className={styles.galleryImage}>
                        <Image
                            src="/images/1.jpg"
                            alt="Fotos de pessoas"
                            {...ImageAttr}
                        />
                    </div>
                    <div className={styles.galleryImage}>
                        <Image
                            src="/images/9.jpg"
                            alt="Fotos de pessoas"
                            {...ImageAttr}
                        />
                    </div>
                    <div className={styles.galleryImage}>
                        <Image
                            src="/images/6.png"
                            alt="Fotos de pessoas"
                            {...ImageAttr}
                        />
                    </div>
                    <div className={styles.galleryImage}>
                        <Image
                            src="/images/8.jpg"
                            alt="Fotos de pessoas"
                            {...ImageAttr}
                        />
                    </div> 
                </section>
                <section className={styles.content}>
                    <h1 className="title-two">Como a Dengue ataca o corpo?</h1>
                    <p>
                        A Organização Mundial da Saúde (OMS) considera a dengue como a doença mais prevalente transmitida por mosquitos. A dengue hemorrágica é uma forma grave da doença, cujas infecções aumentaram mais de 10 vezes globalmente nos últimos 50 anos. O sistema imunológico desenvolve imunidade específica para cada tipo de dengue, permitindo múltiplas infecções, podendo uma pessoa contrair a doença até quatro vezes. Infecções subsequentes tendem a ser mais severas. A transmissão ocorre quando um mosquito pica uma pessoa infectada, permitindo que o vírus se multiplique em seu corpo por cerca de 12 dias antes de ser transmitido a outra pessoa saudável através da picada do mosquito.
                    </p>
                </section>
                <section className={styles.dengueEvolution}>
                    <div className={styles.dengueEvolutionContent}>
                        <h1 className="title-two">Evolução da dengue</h1>
                        <p>
                            O curso da dengue é imprevisível e piora rapidamente. Os sintomas da dengue começam com uma febre alta que dura de 4 a 7 dias. O paciente sentirá fortes dores de cabeça, dores nas articulações, náuseas, fadiga, perda de apetite. Estes são os sintomas da dengue leve.
                        </p>
                        <br />
                        <p>
                            Após o estágio inicial (os primeiros 3 dias da infecção), o paciente sente-se desconfortável com as lesões no interior dos vasos sanguíneos e linfáticos, que podem ser acompanhadas de dor abdominal, fezes pretas, hemorragias nasais e fezes sanguinolentas, sangramento nas gengivas… neste momento o corpo do paciente reduziu as plaquetas a ponto de sangrar. O sintoma mais grave da dengue é o choque.
                        </p>
                    </div>
                    <div className={styles.dengueEvolutionImage}>
                        <Image
                            src="/images/14.png"
                            alt="Fotos de pessoas"
                            {...ImageAttr}
                        />
                    </div>
                </section>
                <section className={styles.dengueTreat}>
                    <div className={styles.dengueTreatImage}>
                        <Image
                            src="/images/15.png"
                            alt="Fotos de pessoas"
                            {...ImageAttr}
                        />
                    </div>
                    <div className={styles.dengueTreatContent}>
                        <h1 className="title-two">Como tratar a dengue</h1>
                        <p>
                            A dengue deixa o corpo do paciente exausto, então o paciente precisa descansar, comer bem, beber muita água, tomar mais vitaminas para melhorar o sistema imunológico. A maioria dos pacientes com dengue morreu por motivos subjetivos, indo ao hospital quando sua condição piorava.
                        </p>
                        <br/>
                        <p>
                            Nos primeiros dias de febre, o paciente será prescrito um antipirético contendo um único ingrediente paracetamol. Tomar o medicamento errado ou tomar uma overdose pode ser fatal. Não tome aspirina e ibuprofeno porque previne o acúmulo de plaquetas, causando sangramento estomacal.Pode reduzir a febre cobrindo a testa com toalha quente, enxugando o corpo, axila… Incentivar o paciente a beber bastante água, suco, beber mais Oresol. Os adultos precisam beber de 2,5 a 3 litros por dia.
                        </p>
                    </div>
                </section>
                <section className={styles.content}>
                    <h1 className="title-two">Principais Sintomas </h1>
                    <p>
                        A dengue é uma doença viral transmitida por mosquitos que pode causar uma variedade de sintomas. Os sintomas comuns incluem febre alta, dores de cabeça intensas, dor atrás dos olhos, dores musculares e articulares e erupções cutâneas. Além disso, a dengue pode levar a sintomas mais graves, como dengue hemorrágica, caracterizada por sangramento, diminuição da pressão arterial e falha orgânica potencialmente fatal. É importante buscar atendimento médico imediato ao apresentar sintomas de dengue para um diagnóstico e tratamento adequados.
                    </p>
                </section>
                <section className={styles.listSymptoms}>
                    <ul className={styles.list}>
                        <li>Febre Alta</li>
                        <li>Dor nos olhos</li>
                        <li>Falta de apetite</li>
                        <li>Hemorragia</li>
                        <li>Dor no Corpo</li>
                        <li>Manchas</li>
                        <li>Dor de Cabeça</li>
                    </ul>
                    <aside className={styles.textBox}>
                        <h2>Importante </h2>
                        <p>Idosos e pessoas com doenças crônicas, como diabetes e hipertensão, têm maior risco de evoluir para casos graves ou morte.</p>
                        <br />
                        <p>O mal-estar da doença pode durar até dez dias, mas dependendo do caso, permanece por semanas.</p>
                    </aside>
                </section>
            </main>
            <div className={styles.finalBanner}>
                <Image
                    src="/image7.png"
                    alt="Fotos de pessoas"
                    fill={true}
                    objectFit="cover"
                />
            </div>
            <Footer/>
            <ScrollToTopButton/>
        </>
    );
}