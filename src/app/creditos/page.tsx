import Footer from "@/components/footer/footer";
import Image from "next/image";

export default function Creditos() {
    return ( 
        <>
            <main>
                <h1 className="title-two">FÁBRICA DE SOFTWARE: DESENVOLVIMENTO DE WEBSITES, APLICATIVOS E JOGOS</h1>
                <h1 className="title-two">Prof. Dr. Elvio Gilberto da Silva</h1>
                <h1 className="title-two">Integrantes da Equipe</h1>
                <p>Anderson     Kaiti</p>
                <p>Guilherme Padilha de Marchi</p>
                <p>Leandro Brosco Camanforte</p>
                <p>Melck Silva de Oliveira Nascimento</p>
                <p>Tainara Alves do Nascimento</p>
                <p>Túlio Braga Alves </p>
                <Image 
                 width={300}
                 height={300}
                 alt="Ciência da Computação"
                 src="/Ciencia_da_Computacao.jpg"
                 />
                 <h1 className="title-two">Apoio:</h1>

                <Image 
                 width={300}
                 height={300}
                 alt="Ciência da Computação"
                 src="/coordenadoria-de-extensao.jpg"
                 /> 
                 <p>José Augusto Magalhães – Coordenador de Extensão</p>

            </main>  
            <Footer /> 
        </>
    );
}