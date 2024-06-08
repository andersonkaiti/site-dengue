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
                <section className={styles.boxImg}>
                    <div className={styles.ImagensPrevencao}>
                        <Image
                            src="/prevencao/image10.png"
                            alt="Foto1"
                            {...ImageAttr}
                        />
                    </div>
                    <div className={styles.ImagensPrevencao}>
                        <Image
                        src="/prevencao/image8.png"
                        alt="Foto2"
                        {...ImageAttr}
                        />
                    </div>
                    <div className={styles.ImagensPrevencao}>
                        <Image
                        src="/prevencao/image7.png"
                        alt="Foto3"
                        {...ImageAttr}
                        />
                    </div>
                    <div className={styles.ImagensPrevencao}>
                        <Image
                        src="/prevencao/image9.png"
                        alt="Foto4"
                        {...ImageAttr}
                        />
                    </div>
                    <div className={styles.ImagensPrevencao}>
                        <Image
                        src="/prevencao/image11.png"
                        alt="Foto5"
                        {...ImageAttr}
                        />
                    </div>
                </section>

                <section className={styles.textoPrimeiro}>
                    <h2>Prevenir é proteger, a saúde é uma <br />responsabilidade de todos!</h2>
                    <p>Realizar a prevenção contra o mosquito da dengue é fundamental. Isso porque, doença é uma ameaça à saúde coletiva. É importante lembrar que ela pode levar o indivíduo a óbito.
                    <br /><br />
                    Segundo a enfermeira do Programa de Educação em Saúde Ambiental do Núcleo Especial de Vigilância Ambiental (GEVS), Mayra Rodrigues, o combate à doença também é papel da população, já que os criadouros do mosquito podem ser localizados em terrenos e em residências.
                    <br /><br />
                    “A única forma de prevenção ao mosquito é eliminar os possíveis criadouros. É essencial que a população participe com os cuidados necessários contra a doença. Prestar atenção e se autoeducar diariamente, com a finalidade de manter o ambiente sempre limpo para impedir a proliferação da dengue é de extrema importância”, ressaltou.
                    <br /><br />
                    Fonte: Assessoria de Comunicação da Sesa
                    <br /><br />
                    A Saúde é uma Responsabilidade de Todos!
                    <br /><br />
                    O combate à dengue é um exemplo de como devemos nos manter atentos às diferentes doenças que podem nos impactar. Lembre-se que a prevenção é o melhor caminho em todos os casos, pois reduz bastante as chances de você ter de enfrentar o vírus em seu corpo.</p>
                </section>

                <section className={styles.textoSegundo}>
                    <h2>Medidas de Prevenção:</h2>
                    <p>
                    A melhor forma de prevenção da dengue é evitar a proliferação do mosquito Aedes Aegypti, eliminando água armazenada que podem se tornar possíveis criadouros, como em vasos de plantas, lagões de água, pneus, garrafas plásticas, piscinas sem uso e sem manutenção, e até mesmo em recipientes pequenos, como tampas de garrafas.
                    <br /><br />
                    Roupas que minimizem a exposição da pele durante o dia - quando os mosquitos são mais ativos - proporcionam alguma proteção às picadas e podem ser uma das medidas adotadas, principalmente durante surtos. Repelentes e inseticidas também podem ser usados, seguindo as instruções do rótulo. Mosquiteiros proporcionam boa proteção para aqueles que dormem durante o dia, como bebês, pessoas acamadas e trabalhadores noturnos.
                    <br /><br />
                    No momento, só existe uma vacina contra dengue registrada na Anvisa, que está disponível na rede privada. Ela é usada em 3 doses no intervalo de 1 ano e só deve ser aplicada, segundo o fabricante, a OMS e a ANVISA, em pessoas que já tiveram pelo menos uma infecção por dengue. Esta vacina não está disponível no SUS, mas o Ministério da Saúde acompanha os estudos de outras vacinas.
                    <br /><br />
                    Fontes: Laboratório Cella   
                    </p>
                </section>

                <section className={styles.textoTerceiro}>
                    <h2>Checklists:</h2>
                    <ul className={styles.listaPrincipal}>
                        <li className={styles.itensLista}>Não deixe água parada, destruindo os locais onde o mosquito nasce e se desenvolve.</li>
                        <li className={styles.itensLista}>Deixe sempre bem tampados e lave com bucha e sabão as paredes internas de caixas d'água, poços, cacimbas, tambores de água ou tonéis, cisternas, jarras e filtros.</li>
                        <li className={styles.itensLista}>Não deixe acumular água em pratos de vasos de plantas e xaxins. Coloque areia fina até a borda do pratinho.</li>
                        <li className={styles.itensLista}>Plantas que possam acumular água devem ser tratadas com água sanitária na proporção de uma colher de sopa para um litro de água, regando no mínimo duas vezes por semana.</li>
                        <li className={styles.itensLista}>Entregue pneus velhos ao serviço de limpeza urbana ou guarde-os em local coberto.</li>
                        <li className={styles.itensLista}>Deixe a tampa do vaso sanitário sempre fechado. Em banheiros pouco usados, dê descarga pelo menos uma vez por semana.</li>
                        <li className={styles.itensLista}>Retire sempre a água acumulada da bandeja externa da geladeira e lave com água e sabão.</li>
                        <li className={styles.itensLista}>Sempre que for trocar o garrafão de água mineral, lave bem o suporte no qual a água fica acumulada.</li>
                        <li className={styles.itensLista}>Mantenha sempre limpo: lagos, cascatas e espelhos d'água decorativos. Crie peixes nesses locais, eles se alimentam das larvas dos mosquitos.</li>
                        <li className={styles.itensLista}>Lave e troque a água dos bebedouros de aves e animais no mínimo uma vez por semana.</li>
                        <li className={styles.itensLista}>Limpe frequentemente as calhas e a laje das casas, coloque areia nos cacos de vidro no muro que possam acumular água.</li>
                        <li className={styles.itensLista}>Mantenha a água da piscina sempre tratada com cloro e limpe-a uma vez por semana.</li>
                        <li className={styles.itensLista}>Mantenha o quintal limpo, recolhendo o lixo e detritos em volta das casas, limpando os latões e mantendo as lixeiras tampadas. Não jogue lixo em terrenos baldios, construções e praças.</li>
                        <li className={styles.itensLista}>Permita sempre o acesso do agente de controle de zoonoses em sua residência ou estabelecimento comercial.</li>
                    </ul>
                    <br />
                    <p>Fonte: Governo do Estado do Paraná.</p>
                </section>

                <section className={styles.textoQuarto}>
                    <h2>Dicas Práticas:</h2>
                    <ul className={styles.listaPrincipal}>
                        <li className={styles.itensLista}>Impedir a acumulação de água parada, pois ela pode se tornar um criadouro do Aedes Aegypti.</li>
                        <li className={styles.itensLista}>Tenha atenção redobrada com vasos de plantas, calhas, barris, tanques, pneus, garrafas plásticas, recipientes pequenos e qualquer objeto que possa acumular água parada.</li>
                        <li className={styles.itensLista}>Encha de areia os pratos que dão sustentação aos vasos de plantas.</li>
                        <li >Minimize a exposição da pele com o uso de roupas que cubram a maior parte possível do corpo.</li>
                        <li className={styles.itensLista}>Utilize repelentes para complementar a proteção contra picadas de mosquito.
                        </li>
                        <li className={styles.itensLista}>Faça uma revisão geral dos possíveis focos de água parada antes de viajar ou se ausentar por alguns dias.</li>
                    </ul>
                </section>
            </main>
            <Footer/>
        </>
    );
}