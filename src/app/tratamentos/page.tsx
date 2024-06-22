import Footer from "@/components/footer/footer";
import styles from "./tratamentos.module.css";
import Image from "next/image";
import "aos/dist/aos.css";

const ImageAttr = {
    fill: true,
    objectFit: "cover"
}

export default function Tratamentos() {
    return (
        <>
            <main>
                <h1 className="title-two" data-aos="fade-left" data-aos-once="true">Conheça os Tratamentos e Proteja Sua Saúde!</h1>
                <section className={`${styles.gallery} ${styles.banner}`} data-aos="fade-left" data-aos-once="true">
                    <div className={styles.verticalGallery}>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/2.jpg"
                                alt="Imagem 1"
                                {...ImageAttr}
                            />
                        </div>
                        <h2 className="title-two">
                            Tratamento precoce,
                            <br />
                            esperança renovada:
                            <br />
                            juntos, vencemos a dengue
                        </h2>
                    </div>
                    <div className={styles.verticalGallery}>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/12.jpg"
                                alt="Imagem 2"
                                {...ImageAttr}
                            />
                        </div>
                    </div>
                </section>
                <section className="content" data-aos="fade-right" data-aos-once="true">
                    <h1 className="title-two">Tratamentos</h1>
                    <p>
                        A dengue é uma doença séria que requer atenção imediata. Iniciar o tratamento precocemente é crucial para minimizar complicações e garantir uma recuperação mais rápida. Nosso objetivo é fornecer informações claras e detalhadas para ajudar você a entender os diferentes aspectos do tratamento da dengue.
                    </p>
                    <p>
                        No nosso site, você encontrará orientações abrangentes sobre como identificar os sintomas, quais medidas tomar em casos leves, moderados e graves, e quais medicamentos são recomendados ou contraindicados. Além disso, oferecemos dicas sobre cuidados complementares para apoiar a recuperação, prevenir complicações e responder às perguntas mais comuns sobre a doença.
                    </p>
                    <p>
                        Estamos comprometidos em ser uma fonte confiável de informação, colaborando com profissionais de saúde e usando tecnologia para disponibilizar recursos úteis e acessíveis para toda a comunidade. Juntos, podemos combater a dengue de maneira mais eficaz e proteger a saúde de todos.
                    </p>
                </section>
                <section className={`${styles.contentPair} content`} data-aos="fade-left" data-aos-once="true">
                    <div className={styles.contentPairText}>
                        <h1 className="title-two">Identificação dos sintomas</h1>
                        <p>
                            Reconhecer os sintomas da dengue é o primeiro passo para buscar tratamento. Os sintomas iniciais incluem febre alta, dores de cabeça, dores atrás dos olhos, nas articulações e nos músculos. Fique atento a sinais de alerta como sangramentos, dor abdominal intensa e vômitos persistentes.
                        </p>
                        <p>
                            A identificação precoce desses sintomas permite uma intervenção rápida e eficaz, reduzindo o risco de complicações graves. Além disso, é importante diferenciar os sintomas da dengue de outras doenças febris, para garantir o tratamento adequado. Caso observe qualquer um dos sinais de alerta, procure imediatamente um serviço de saúde. O acompanhamento médico é essencial para monitorar a evolução da doença e ajustar o tratamento conforme necessário.
                        </p>
                        <p>
                            Lembre-se de que a dengue pode evoluir rapidamente, por isso, a vigilância constante dos sintomas e a busca por orientação profissional são fundamentais para uma recuperação segura.
                        </p>
                    </div>
                    <div className={styles.contentPairImage}>
                        <Image
                            src="/images/12.jpg"
                            alt="Imagem 3"
                            {...ImageAttr}
                        />
                    </div>
                </section>
                <section className="content" data-aos="fade-right" data-aos-once="true">
                    <h1 className="title-two">Tratamentos de casos leves</h1>
                    <p>
                        Para casos leves de dengue, o tratamento é baseado em repouso, hidratação oral e uso de medicamentos para aliviar a febre e as dores. É essencial evitar anti-inflamatórios, como o ibuprofeno, que podem agravar o quadro.
                    </p>
                    <p>
                        A ingestão de líquidos, como água, sucos naturais e soluções de reidratação oral, é crucial para prevenir a desidratação, que é uma complicação comum da dengue. O paracetamol é recomendado para o controle da febre e das dores, devido ao seu perfil de segurança mais adequado para pacientes com dengue.
                    </p>
                    <p>
                        Além disso, é importante manter uma alimentação leve e nutritiva, rica em frutas, legumes e alimentos de fácil digestão, para ajudar na recuperação do organismo. Evite alimentos gordurosos ou pesados, que podem sobrecarregar o sistema digestivo.
                    </p>
                    <p>
                        O acompanhamento regular de um profissional de saúde é fundamental, mesmo em casos leves, para monitorar o progresso da doença e ajustar as orientações conforme necessário. Fique atento a qualquer mudança nos sintomas e, em caso de piora, procure assistência médica imediatamente.
                    </p>
                </section>  
                <div className="content" data-aos="fade-left" data-aos-once="true">
                    <h1 className="title-two">
                        Tratamentos de casos graves
                        <br />
                        (Dengue Hemorrágica)
                    </h1>
                    <p>
                        Para casos graves de dengue, a hospitalização é indispensável. Os pacientes recebem cuidados intensivos, incluindo reposição de líquidos intravenosos e, em situações extremas, transfusões de sangue.
                    </p>
                    <p>
                        A monitorização constante dos sinais vitais é crucial para a sobrevivência, garantindo o manejo de complicações como desidratação, sangramentos graves e falência de órgãos. Equipes médicas especializadas cuidam de intervenções críticas e suporte nutricional, adaptando o tratamento às necessidades individuais de cada paciente. A cooperação e comunicação entre profissionais de saúde e familiares são essenciais para a recuperação do paciente.
                    </p>
                </div>
                <section className="content" data-aos="fade-right" data-aos-once="true">
                    <h1 className="title-two">Medicações Indicadas e Contraindicadas</h1>
                    <p>
                        O uso de medicamentos deve ser cuidadosamente monitorado. Paracetamol pode ser usado para controlar a febre e aliviar as dores, pois é seguro e eficaz no contexto da dengue. Enquanto isso, anti-inflamatórios como ibuprofeno e aspirina devem ser evitados devido ao risco de sangramentos e complicações hemorrágicas, comuns na dengue.
                    </p>
                    <p>
                        É fundamental seguir as orientações médicas quanto à dosagem e frequência do paracetamol para evitar a toxicidade hepática. Além disso, qualquer outro medicamento só deve ser administrado sob supervisão médica, para garantir que não interfira no tratamento ou agrave a condição do paciente.
                    </p>
                    <p>
                        Pacientes com dengue devem também evitar medicamentos combinados que possam conter anti-inflamatórios em sua composição. Em caso de dúvidas sobre o uso de qualquer medicamento, consulte um profissional de saúde para obter recomendações adequadas e seguras.
                    </p>
                    <section className={styles.gallery}>
                        <div className={styles.verticalGallery}>
                            <div className={styles.galleryImage}>
                                <Image
                                    src="/images/10.jpg"
                                    alt="Imagem 4"
                                    {...ImageAttr}
                                />
                            </div>
                            <div className={styles.galleryImage}>
                                <Image
                                    src="/images/11.png"
                                    alt="Imagem 5"
                                    {...ImageAttr}
                                />
                            </div>
                        </div>
                        <div className={styles.verticalGallery}>
                            <div className={styles.galleryImage}>
                                <Image
                                    src="/images/9.jpg"
                                    alt="Imagem 6"
                                    {...ImageAttr}
                                />
                            </div>
                        </div>
                    </section>
                </section>  
                <section className="content" data-aos="fade-left" data-aos-once="true">
                    <h1 className="title-two">Recuperação e Cuidados Pós-Tratamento</h1>
                    <p>
                        Durante esse período, é importante continuar com a hidratação, manter uma dieta equilibrada e evitar atividades físicas intensas até a completa recuperação. A dengue pode deixar o corpo enfraquecido, portanto, é essencial fornecer os nutrientes necessários para fortalecer o sistema imunológico e acelerar o processo de recuperação. Além disso, é fundamental evitar o consumo de álcool e cigarros, pois podem prejudicar ainda mais a saúde e retardar a recuperação. Se os sintomas persistirem ou piorarem durante o período de recuperação, é importante buscar orientação médica para garantir que não haja complicações adicionais.
                    </p>
                </section>
            </main>
            <Footer/>
        </>
    );
}