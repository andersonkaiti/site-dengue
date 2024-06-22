import Footer from "@/components/footer/footer";
import Image from "next/image";
import styles from  "../noticias/noticias.module.css";
import "aos/dist/aos.css";

const ImageAttr = {
    fill: true,
    objectFit: "cover"
}

export default function Noticias() {
    return (
        <>
            <main>
                <section className={styles.gallery} data-aos="fade-left" data-aos-once="true">
                    <div className={styles.galleryImage}>
                        <Image
                            src="/images/6.png"
                            alt="Imagem 1"
                            {...ImageAttr}
                        />
                    </div>
                    <div className={styles.galleryImage}>
                        <Image
                            src="/images/13.png"
                            alt="Imagem 2"
                            {...ImageAttr}
                        />
                    </div>
                    <div className={styles.galleryImage}>
                        <Image
                            src="/images/5.jpg"
                            alt="Imagem 3"
                            {...ImageAttr}
                        />
                    </div>
                </section>
                <section className="content" data-aos="fade-right" data-aos-once="true">
                    <h1 className="title">&quot;Alerta Dengue: Mantenha-se Informado, Proteja-se e Faça a Diferença!&quot;</h1>
                    <div className={styles.gallery}>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/7.png"
                                alt="Imagem 4"
                                {...ImageAttr}
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/16.png"
                                alt="Imagem 5"
                                {...ImageAttr}
                            />
                        </div>
                    </div>
                </section>
                <section className="content" data-aos="fade-left" data-aos-once="true">
                    <h1 className="title">Eventos e Iniciativas</h1>
                    <p>
                        Para combater a dengue, diversas iniciativas e eventos são realizados, como campanhas de conscientização sobre a eliminação de criadouros do mosquito Aedes aegypti, mutirões de limpeza para remover recipientes com água parada, e o uso de fumacê para reduzir a população de mosquitos. Programas de vigilância monitoram áreas de risco, enquanto inovações tecnológicas, como mosquitos geneticamente modificados e aplicativos de denúncia, auxiliam no controle. Eventos como o Dia Nacional de Combate ao Aedes aegypti mobilizam a sociedade, destacando a importância da participação coletiva e da responsabilidade individual na prevenção da doença.
                    </p>
                </section>
                <section className="content" data-aos="fade-right" data-aos-once="true">
                    <h1 className="title">Alertas e Informações sobre a Dengue</h1>
                    <div className={styles.gallery}>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/1.jpg"
                                alt="Imagem 6"
                                {...ImageAttr}
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/17.png"
                                alt="Imagem 7"
                                {...ImageAttr}
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/20.png"
                                alt="Imagem 8"
                                {...ImageAttr}
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/18.png"
                                alt="Imagem 9"
                                {...ImageAttr}
                            />
                        </div>
                    </div>
                </section>
                <section className="content" data-aos="fade-left" data-aos-once="true">
                    <h1 className="title">Campanhas de conscientização</h1>
                    <p>
                        Diversas campanhas de conscientização têm sido realizadas para combater a dengue, como a campanha “10 Minutos Contra a Dengue” do Ministério da Saúde do Brasil, que incentiva a população a dedicar 10 minutos por semana para eliminar focos do mosquito em suas casas, e a campanha &quot;Todos Contra o Mosquito&quot;, que utiliza mídias sociais, televisão e rádio para educar sobre a prevenção de dengue, zika e chikungunya. A &quot;Semana Nacional de Mobilização contra o Aedes aegypti&quot; envolve ações em escolas e comunidades para conscientizar sobre os cuidados necessários, enquanto a campanha &quot;Dengue: Aqui Mosquito Não se Cria&quot;, da Fiocruz, distribui materiais educativos e realiza palestras e oficinas. A campanha &quot;Xô Dengue&quot;, promovida por prefeituras como a de São Paulo, inclui a distribuição de folhetos, visitas domiciliares por agentes de saúde e o uso de carros de som para alertar sobre a importância de eliminar criadouros. Essas iniciativas são essenciais para engajar a comunidade e promover práticas simples de prevenção da dengue.
                    </p>
                </section>
                <section className="content" data-aos="fade-right" data-aos-once="true">
                    <h1 className="title">Novidade de pesquisa</h1>
                    <p>
                        Recentes avanços na pesquisa sobre a dengue incluem o desenvolvimento de uma vacina mais eficaz e segura, com a Qdenga (TAK-003), da Takeda, mostrando resultados promissores em testes clínicos. Além disso, a implementação de mosquitos Aedes aegypti geneticamente modificados e infectados com a bactéria Wolbachia tem demonstrado sucesso em reduzir significativamente a transmissão do vírus. Pesquisas também estão explorando novos métodos de diagnóstico rápido e preciso, utilizando tecnologias como CRISPR para identificar a presença do vírus em estágios iniciais. Esses avanços prometem melhorar significativamente o controle e a prevenção da dengue em áreas endêmicas...
                    </p>
                </section>
            </main>
            <Footer/>
        </>
    );
}