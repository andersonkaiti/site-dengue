import Footer from "@/components/footer/footer";
import Image from "next/image";
import styles from "./prevencao.module.css"

const ImageAttr = {
    fill: true,
    objectFit: "cover",
    style: {
        borderRadius: "10px"
    }
}

export default function Prevencao() {
    return (
        <>
            <main>
                <section className={styles.gallery}>
                    <div className={styles.verticalGallery}>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/tratamentos/IdosoTristeTratamentos.jpg"
                                alt="Foto1"
                                {...ImageAttr}
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/prevencao/image8.png"
                                alt="Foto2"
                                {...ImageAttr}
                            />
                        </div>
                    </div>
                    <div className={styles.galleryCenter}>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/tratamentos/IdosoCobertoTratamentos.jpg"
                                alt="Foto3"
                                {...ImageAttr}
                            />
                        </div>
                    </div>
                    <div className={styles.verticalGallery}>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/prevencao/image9.png"
                                alt="Foto4"
                                {...ImageAttr}
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/prevencao/image11.png"
                                alt="Foto5"
                                {...ImageAttr}
                            />
                        </div>
                    </div>
                </section>

                <section className={styles.content}>
                    <h2 className="title-two">Prevenir é proteger, a saúde é uma <br />responsabilidade de todos!</h2>
                    <p>
                        A prevenção da dengue é fundamental para reduzir a incidência da doença e proteger a saúde da comunidade. Nesta seção, exploramos estratégias eficazes para evitar a proliferação do mosquito transmissor e minimizar os riscos de infecção. Nosso objetivo é capacitar as pessoas com conhecimento e recursos para se protegerem e contribuírem para um ambiente mais seguro.
                    </p>
                    <br />
                    <p>
                        Além disso, promovemos a conscientização sobre a importância da prevenção não apenas como uma medida individual, mas como um esforço coletivo. Ao adotar práticas de prevenção em nossas casas, locais de trabalho e comunidades, podemos reduzir significativamente a transmissão da dengue e proteger os grupos mais vulneráveis, como crianças e idosos. Juntos, podemos criar um ambiente mais saudável e resistente à propagação da doença.   
                    </p>
                </section>

                <section className={styles.identifyVector}>
                    <div className={styles.identifyVectorContent}>
                        <h2 className="title-two">Identificação dos Vetores</h2>
                        <p>
                            O mosquito Aedes aegypti é o principal vetor da dengue. Pequeno e escuro, ele se reproduz em água parada e é comumente encontrado em áreas urbanas. Conhecer seus hábitos de reprodução e os locais onde ele se prolifera é essencial para implementar medidas eficazes de controle.
                        </p>
                        <br />
                        <p>
                            Além disso, é importante ressaltar que a fêmea do mosquito deposita seus ovos em recipientes ou superfícies que acumulam água, como vasos de plantas, pneus velhos, recipientes descartados e caixas d'água mal vedadas. Portanto, manter essas áreas limpas e secas é fundamental para interromper o ciclo de reprodução do mosquito e reduzir a incidência de dengue em uma comunidade.
                        </p>
                    </div>
                    <div className={styles.identifyVectorImage}>
                        <Image
                                src="/images/15.png"
                                alt="Foto5"
                                {...ImageAttr}
                            />
                    </div>
                </section>

                <section className={styles.content}>
                    <div>
                        <h2 className="title-two">Medidas de Controle do Mosquito</h2>
                            <p>Eliminar os criadouros do mosquito é uma das estratégias mais eficazes de prevenção da dengue. Isso envolve remover recipientes que possam acumular água parada, como pneus, vasos de plantas e recipientes abandonados. Além disso, o uso de repelentes e inseticidas pode ajudar a reduzir a população de mosquitos em áreas propensas à dengue.</p>
                            <br />
                            <p>É importante ressaltar que a manutenção regular de áreas ao ar livre, como jardins e quintais, também desempenha um papel crucial na prevenção da dengue. Manter a grama cortada, evitar o acúmulo de folhas e limpar regularmente calhas e ralos pode reduzir os locais de reprodução do mosquito e, consequentemente, diminuir o risco de infecção. Ações simples como essas podem fazer uma grande diferença na proteção da saúde da comunidade contra a dengue.</p>
                    </div>
                </section>

                <section className={styles.content}>
                    <div>
                        <h2 className="title-two">Educação e Conscientização</h2>
                        <p>Campanhas de educação pública desempenham um papel crucial na prevenção da dengue. Ao informar a população sobre os sintomas da doença, os métodos de prevenção e a importância da eliminação de criadouros, podemos mobilizar a comunidade para agir de forma proativa na luta contra a dengue.</p>
                        <br />
                        <p>Além disso, essas campanhas também têm o poder de aumentar a conscientização sobre a gravidade da dengue e seus potenciais impactos na saúde pública. Ao educar as pessoas sobre como identificar os sintomas precocemente e buscar tratamento adequado, podemos reduzir a incidência de casos graves e complicações associadas à doença.</p>
                        <br />
                        <p>O engajamento da comunidade é essencial para o sucesso das campanhas de educação pública. Ao envolver líderes locais, escolas, empresas e organizações da sociedade civil, podemos ampliar o alcance das mensagens de prevenção e incentivar a adoção de práticas saudáveis em toda a comunidade. Juntos, podemos criar um ambiente mais consciente e resiliente à propagação da dengue.</p>
                    </div>
                </section>

                <section className={styles.identifyVector}>
                    <div className={styles.identifyVectorContent}>
                        <h2 className="title-two">Medidas de Proteção Individual</h2>
                        <p>
                            Além das medidas de controle do mosquito, é importante que cada indivíduo tome medidas para se proteger contra picadas. Isso inclui usar roupas que cubram a maior parte do corpo, aplicar repelentes de insetos regularmente e instalar telas em portas e janelas para impedir a entrada de mosquitos em ambientes fechados.
                        </p>
                        <br />
                        <p>
                            Outra medida importante é evitar áreas de alta infestação de mosquitos, especialmente durante o amanhecer e o entardecer, quando esses insetos são mais ativos. Utilizar mosquiteiros em camas e berços também pode ser eficaz, especialmente para proteger bebês e crianças pequenas enquanto dormem.
                        </p>
                        <br />
                        <p>
                            É essencial que essas práticas de proteção individual sejam adotadas rotineiramente, não apenas durante surtos de dengue, para garantir uma proteção contínua contra picadas de mosquitos e a transmissão de doenças como a dengue, zika e chikungunya. Ao incorporar esses hábitos preventivos em nosso dia a dia, podemos reduzir significativamente o risco de contrair doenças transmitidas por mosquitos.
                        </p>
                    </div>
                    <div className={styles.identifyVectorImage}>
                        <Image
                                src="/prevencao/image7.png"
                                alt="Foto5"
                                {...ImageAttr}
                            />
                    </div>
                </section>
                
                <section className={styles.content}>
                    <div>
                        <h2 className="title-two">Prevenção em Áreas Endêmicas</h2>
                        <p>
                            Em áreas onde a dengue é endêmica, é necessário implementar estratégias específicas para controlar epidemias e surtos. Isso pode incluir ações de pulverização de inseticidas, distribuição de mosquiteiros e medidas de educação pública direcionadas à comunidade local.
                        </p>
                        <br />
                        <p>
                            Além dessas medidas, é importante promover a participação ativa da comunidade no controle da dengue. Isso pode ser feito através de programas de capacitação que ensinem os moradores a identificar e eliminar criadouros do mosquito em suas próprias casas e arredores. O envolvimento da população local é fundamental para garantir a eficácia das estratégias de controle e prevenção da dengue, especialmente em áreas onde os recursos são limitados.
                        </p>
                        <br />
                        <p>
                            Outra medida importante em áreas endêmicas é o fortalecimento dos sistemas de vigilância epidemiológica, permitindo uma detecção precoce de casos de dengue e uma resposta rápida para conter a propagação da doença. Isso pode incluir o estabelecimento de sistemas de monitoramento de casos e a capacitação de profissionais de saúde locais para diagnosticar e tratar a dengue de forma eficaz.
                        </p>
                        <br />
                        <p>
                            Ao adotar uma abordagem integrada que combine medidas de controle do mosquito, educação pública e fortalecimento dos sistemas de saúde, podemos reduzir significativamente o impacto da dengue em áreas endêmicas e proteger a saúde da população local.
                        </p>
                    </div>
                </section>

                <section className={styles.content}>
                    <div>
                        <h2 className="title-two">Monitoramento e Vigilância<br />Epidemiológica</h2>
                        <p>
                            O monitoramento contínuo da incidência de dengue é essencial para identificar surtos precocemente e orientar medidas de prevenção e controle. Ao analisar dados epidemiológicos, podemos identificar tendências sazonais, áreas de maior risco e grupos populacionais mais vulneráveis, permitindo uma alocação eficiente de recursos e uma resposta direcionada para reduzir a transmissão da doença. Essa vigilância epidemiológica também possibilita uma avaliação constante da eficácia das intervenções implementadas, garantindo uma abordagem adaptativa e dinâmica no combate à dengue.
                        </p>
                    </div>
                </section>

            </main>
            <Footer/>
        </>
    );
}