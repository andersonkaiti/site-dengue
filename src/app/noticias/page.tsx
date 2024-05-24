import Footer from "@/components/footer/footer";
import Image from "next/image";
import styles from  "../noticias/noticias.module.css";


export default function Noticia () {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-24">
            
        
                <div className={styles.Main}>
                    <p className={styles.Foto1}>
                    <Image
                            src="/imagem-dengue-1.png"
                            width="285"
                            height="200"
                            alt="instagram"
                        />
                    </p>
                    <p>
                    <Image
                            src="/imagem-dengue-2.png"
                            width="272"
                            height="100"
                            alt="instagram"
                        />
                    </p>
                    <p>
                    <Image
                            src="/imagem-dengue-3.png"
                            width="232"
                            height="100"
                            alt="instagram"
                        />
                    </p>

                    <div className={styles.title}>
                        <p>"Alerta Dengue: Mantenha-se Informado, <span> Proteja-se e Faça a Diferença!</span>"</p>
                    </div>

                    <div className={styles.FotosTopo2}>
                        <p> 
                        <Image
                            src="/imagem-dengue-4.png"
                            width="350"
                            height="100"
                            alt="instagram"
                        />
                        </p>    

                          <p> 
                        <Image
                            src="/imagem-dengue-5.png"
                            width="340"
                            height="100"
                            alt="instagram"
                        />
                        </p>                              

                    </div>

                    <div className={styles.title}>
                    <p>Eventos e Iniciativas: </p>
                    </div>

                    <div className={styles.text}>
                    Para combater a dengue, diversas iniciativas e eventos são realizados, como campanhas de conscientização sobre a eliminação de criadouros do mosquito Aedes aegypti, mutirões de limpeza para remover recipientes com água parada, e o uso de fumacê para reduzir a população de mosquitos. Programas de vigilância monitoram áreas de risco, enquanto inovações tecnológicas, como mosquitos geneticamente modificados e aplicativos de denúncia, auxiliam no controle. Eventos como o Dia Nacional de Combate ao Aedes aegypti mobilizam a sociedade, destacando a importância da participação coletiva e da responsabilidade individual na prevenção da doença.
                    </div>

                    <div className={styles.title}>
                        <p>Alertas e Informações sobre a Dengue:</p>
                    </div>

                    <p className={styles.Foto1}>
                    <Image
                            src="/imagem-dengue-6.png"
                            width="285"
                            height="100"
                            alt="instagram"
                        />
                    </p>
                    <p>
                    <Image
                            src="/imagem-dengue-7.png"
                            width="238"
                            height="100"
                            alt="instagram"
                        />
                    </p>
                    <p>
                    <Image
                            src="/imagem-dengue-8.png"
                            width="287"
                            height="100"
                            alt="instagram"
                        />
                    </p>

                    <p>
                    <Image
                            src="/imagem-dengue-9.png"
                            width="268"
                            height="100"
                            alt="instagram"
                        />
                    </p>
                    
                    <div className={styles.title}>
                        <p>Campanhas de conscientização:</p>
                    </div>

                    <div className={styles.text}>
                    Diversas campanhas de conscientização têm sido realizadas para combater a dengue, como a campanha “10 Minutos Contra a Dengue” do Ministério da Saúde do Brasil, que incentiva a população a dedicar 10 minutos por semana para eliminar focos do mosquito em suas casas, e a campanha "Todos Contra o Mosquito", que utiliza mídias sociais, televisão e rádio para educar sobre a prevenção de dengue, zika e chikungunya. A "Semana Nacional de Mobilização contra o Aedes aegypti" envolve ações em escolas e comunidades para conscientizar sobre os cuidados necessários, enquanto a campanha "Dengue: Aqui Mosquito Não se Cria", da Fiocruz, distribui materiais educativos e realiza palestras e oficinas. A campanha "Xô Dengue", promovida por prefeituras como a de São Paulo, inclui a distribuição de folhetos, visitas domiciliares por agentes de saúde e o uso de carros de som para alertar sobre a importância de eliminar criadouros. Essas iniciativas são essenciais para engajar a comunidade e promover práticas simples de prevenção da dengue.
                    </div>
                    

                    <div className={styles.title}>
                        <p>Novidade de pesquisa:</p>
                    </div>

                    <div className={styles.text}>
                    Recentes avanços na pesquisa sobre a dengue incluem o desenvolvimento de uma vacina mais eficaz e segura, com a Qdenga (TAK-003), da Takeda, mostrando resultados promissores em testes clínicos. Além disso, a implementação de mosquitos Aedes aegypti geneticamente modificados e infectados com a bactéria Wolbachia tem demonstrado sucesso em reduzir significativamente a transmissão do vírus. Pesquisas também estão explorando novos métodos de diagnóstico rápido e preciso, utilizando tecnologias como CRISPR para identificar a presença do vírus em estágios iniciais. Esses avanços prometem melhorar significativamente o controle e a prevenção da dengue em áreas endêmicas.
                    </div>
                    


                </div>


            <Footer/>
        </main>
    );
}

