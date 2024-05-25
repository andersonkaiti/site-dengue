import Footer from "@/components/footer/footer";
import Image from "next/image";
import styles from  "../noticias/noticias.module.css";
import ScrollToTopButton from "@/components/scroll-to-top/scroll-to-top";

export default function Noticias() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between py-24 mx-16">
                <div className={styles.main}>
                    <section className={styles.section}>
                        <div className={styles.gallery}>
                            <p>
                                <Image
                                    src="/imagem-dengue-1.png"
                                    width="285"
                                    height="200"
                                    alt="instagram"
                                    style={{
                                        borderRadius: "10px"
                                    }}
                                />
                            </p>
                            <p>
                                <Image
                                    src="/imagem-dengue-2.png"
                                    width="272"
                                    height="100"
                                    alt="instagram"
                                    style={{
                                        borderRadius: "10px"
                                    }}
                                />
                            </p>
                            <p>
                                <Image
                                    src="/imagem-dengue-3.png"
                                    width="232"
                                    height="100"
                                    alt="instagram"
                                    style={{
                                        borderRadius: "10px"
                                    }}
                                />
                            </p>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <div className="title-one">
                            <p>&quot;Alerta Dengue: Mantenha-se Informado, <span> Proteja-se e Faça a Diferença!</span>&quot;</p>
                        </div>
                        <div className={styles.gallery}>
                            <p> 
                                <Image
                                    src="/imagem-dengue-4.png"
                                    width="350"
                                    height="100"
                                    alt="instagram"
                                    style={{
                                        borderRadius: "10px"
                                    }}
                                />
                            </p>
                            <p> 
                                <Image
                                    src="/imagem-dengue-5.png"
                                    width="340"
                                    height="100"
                                    alt="instagram"
                                    style={{
                                        borderRadius: "10px"
                                    }}
                                />
                            </p>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <div className="title-one">
                            <p>Eventos e Iniciativas: </p>
                        </div>
                        <div className={styles.text}>
                            Para combater a dengue, diversas iniciativas e eventos são realizados, como campanhas de conscientização sobre a eliminação de criadouros do mosquito Aedes aegypti, mutirões de limpeza para remover recipientes com água parada, e o uso de fumacê para reduzir a população de mosquitos. Programas de vigilância monitoram áreas de risco, enquanto inovações tecnológicas, como mosquitos geneticamente modificados e aplicativos de denúncia, auxiliam no controle. Eventos como o Dia Nacional de Combate ao Aedes aegypti mobilizam a sociedade, destacando a importância da participação coletiva e da responsabilidade individual na prevenção da doença.
                        </div>
                    </section>
                    <section className={styles.section}>
                        <div className="title-two">
                            <p>Alertas e Informações sobre a Dengue:</p>
                        </div>
                        <div className={styles.gallery}>
                            <p>
                                <Image
                                    src="/imagem-dengue-6.png"
                                    width="285"
                                    height="100"
                                    alt="instagram"
                                    style={{
                                        borderRadius: "10px"
                                    }}
                                />
                            </p>
                            <p>
                                <Image
                                    src="/imagem-dengue-7.png"
                                    width="238"
                                    height="100"
                                    alt="instagram"
                                    style={{
                                        borderRadius: "10px"
                                    }}
                                />
                            </p>
                            <p>
                                <Image
                                    src="/imagem-dengue-8.png"
                                    width="287"
                                    height="100"
                                    alt="instagram"
                                    style={{
                                        borderRadius: "10px"
                                    }}
                                />
                            </p>
                            <p>
                                <Image
                                    src="/imagem-dengue-9.png"
                                    width="268"
                                    height="100"
                                    alt="instagram"
                                    style={{
                                        borderRadius: "10px"
                                    }}
                                />
                            </p>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <div className="title-one">
                            <p>Campanhas de conscientização:</p>
                        </div>
                        <div className={styles.text}>
                            Diversas campanhas de conscientização têm sido realizadas para combater a dengue, como a campanha “10 Minutos Contra a Dengue” do Ministério da Saúde do Brasil, que incentiva a população a dedicar 10 minutos por semana para eliminar focos do mosquito em suas casas, e a campanha &quot;Todos Contra o Mosquito&quot;, que utiliza mídias sociais, televisão e rádio para educar sobre a prevenção de dengue, zika e chikungunya. A &quot;Semana Nacional de Mobilização contra o Aedes aegypti&quot; envolve ações em escolas e comunidades para conscientizar sobre os cuidados necessários, enquanto a campanha &quot;Dengue: Aqui Mosquito Não se Cria&quot;, da Fiocruz, distribui materiais educativos e realiza palestras e oficinas. A campanha &quot;Xô Dengue&quot;, promovida por prefeituras como a de São Paulo, inclui a distribuição de folhetos, visitas domiciliares por agentes de saúde e o uso de carros de som para alertar sobre a importância de eliminar criadouros. Essas iniciativas são essenciais para engajar a comunidade e promover práticas simples de prevenção da dengue.
                        </div>
                    </section>
                    <section className={styles.section}>
                        <div className="title-one">
                            <p>Novidade de pesquisa:</p>
                        </div>
                        <div className={styles.text}>
                            Recentes avanços na pesquisa sobre a dengue incluem o desenvolvimento de uma vacina mais eficaz e segura, com a Qdenga (TAK-003), da Takeda, mostrando resultados promissores em testes clínicos. Além disso, a implementação de mosquitos Aedes aegypti geneticamente modificados e infectados com a bactéria Wolbachia tem demonstrado sucesso em reduzir significativamente a transmissão do vírus. Pesquisas também estão explorando novos métodos de diagnóstico rápido e preciso, utilizando tecnologias como CRISPR para identificar a presença do vírus em estágios iniciais. Esses avanços prometem melhorar significativamente o controle e a prevenção da dengue em áreas endêmicas..
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
            <ScrollToTopButton/>
        </>
    );
}