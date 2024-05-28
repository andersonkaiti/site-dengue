import Footer from "@/components/footer/footer";
import Image from "next/image";
import styles from  "../noticias/noticias.module.css";
import ScrollToTopButton from "@/components/scroll-to-top/scroll-to-top";

const ImageAttr = {
    fill: true,
    objectFit: "cover",
    style: {
        borderRadius: "10px"
    }
}

export default function Noticias() {
    return (
        <>
            <main>
                <section className={styles.section}>
                    <div className={styles.gallery}>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/imagem-dengue-1.png"
                                alt="instagram"
                                {...ImageAttr}
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/imagem-dengue-2.png"
                                alt="instagram"
                                {...ImageAttr}
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/imagem-dengue-3.png"
                                alt="instagram"
                                {...ImageAttr}
                            />
                        </div>
                    </div>
                </section>
                <section className={styles.section}>
                    <h1 className="title-one">&quot;Alerta Dengue: Mantenha-se Informado, <span> Proteja-se e Faça a Diferença!</span>&quot;</h1>
                    <div className={styles.gallery}>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/imagem-dengue-4.png"
                                alt="instagram"
                                {...ImageAttr}
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/imagem-dengue-5.png"
                                alt="instagram"
                                {...ImageAttr}
                            />
                        </div>
                    </div>
                </section>
                <section className={styles.section}>
                    <h1 className="title-one">Eventos e Iniciativas</h1>
                    <div className={styles.text}>
                        Para combater a dengue, diversas iniciativas e eventos são realizados, como campanhas de conscientização sobre a eliminação de criadouros do mosquito Aedes aegypti, mutirões de limpeza para remover recipientes com água parada, e o uso de fumacê para reduzir a população de mosquitos. Programas de vigilância monitoram áreas de risco, enquanto inovações tecnológicas, como mosquitos geneticamente modificados e aplicativos de denúncia, auxiliam no controle. Eventos como o Dia Nacional de Combate ao Aedes aegypti mobilizam a sociedade, destacando a importância da participação coletiva e da responsabilidade individual na prevenção da doença.
                    </div>
                </section>
                <section className={styles.section}>
                    <h1 className="title-one">Alertas e Informações sobre a Dengue</h1>
                    <div className={styles.gallery}>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/imagem-dengue-6.png"
                                alt="instagram"
                                {...ImageAttr}
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/imagem-dengue-7.png"
                                alt="instagram"
                                {...ImageAttr}
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/imagem-dengue-8.png"
                                alt="instagram"
                                {...ImageAttr}
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/imagem-dengue-9.png"
                                alt="instagram"
                                {...ImageAttr}
                            />
                        </div>
                    </div>
                </section>
                <section className={styles.section}>
                    <h1 className="title-one">Campanhas de conscientização</h1>
                    <div className={styles.text}>
                        Diversas campanhas de conscientização têm sido realizadas para combater a dengue, como a campanha “10 Minutos Contra a Dengue” do Ministério da Saúde do Brasil, que incentiva a população a dedicar 10 minutos por semana para eliminar focos do mosquito em suas casas, e a campanha &quot;Todos Contra o Mosquito&quot;, que utiliza mídias sociais, televisão e rádio para educar sobre a prevenção de dengue, zika e chikungunya. A &quot;Semana Nacional de Mobilização contra o Aedes aegypti&quot; envolve ações em escolas e comunidades para conscientizar sobre os cuidados necessários, enquanto a campanha &quot;Dengue: Aqui Mosquito Não se Cria&quot;, da Fiocruz, distribui materiais educativos e realiza palestras e oficinas. A campanha &quot;Xô Dengue&quot;, promovida por prefeituras como a de São Paulo, inclui a distribuição de folhetos, visitas domiciliares por agentes de saúde e o uso de carros de som para alertar sobre a importância de eliminar criadouros. Essas iniciativas são essenciais para engajar a comunidade e promover práticas simples de prevenção da dengue.
                    </div>
                </section>
                <section className={styles.section}>
                    <h1 className="title-one">Novidade de pesquisa</h1>
                    <div className={styles.text}>
                        Recentes avanços na pesquisa sobre a dengue incluem o desenvolvimento de uma vacina mais eficaz e segura, com a Qdenga (TAK-003), da Takeda, mostrando resultados promissores em testes clínicos. Além disso, a implementação de mosquitos Aedes aegypti geneticamente modificados e infectados com a bactéria Wolbachia tem demonstrado sucesso em reduzir significativamente a transmissão do vírus. Pesquisas também estão explorando novos métodos de diagnóstico rápido e preciso, utilizando tecnologias como CRISPR para identificar a presença do vírus em estágios iniciais. Esses avanços prometem melhorar significativamente o controle e a prevenção da dengue em áreas endêmicas..
                    </div>
                </section>
            </main>
            <Footer/>
            <ScrollToTopButton/>
        </>
    );
}