import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer>
            <div className={styles.footerInfo}>
                <div>
                    <h2>A Dengue</h2>
                    <p>Sobre a Dengue</p>
                    <p>Sintomas</p>
                    <p>Dengue Hemorrágica </p>
                    <p>Como é Transmitida?</p>
                </div>
                <div>
                    <p>Formas de prevenção</p>
                    <p>Tratamento</p>
                    <p>Dengue Hemorrágica</p>
                    <p>Como é Transmitida?</p>
                </div>
                <div>
                    <h2>AEDES AEGYPTI</h2>
                    <p>Conhecendo o Aedes aegypti</p>
                    <p>Mitos e verdades</p>
                </div>
                <div>
                    <h2>Contato?</h2>
                    <p>
                        <Image
                            src="/icons/message-regular.svg"
                            width="20"
                            height="20"
                            alt="Message"
                        />
                        Fale conosco
                    </p>
                    <p>
                        <Image
                            src="/icons/envelope-regular.svg"
                            width="20"
                            height="20"
                            alt="Email"
                        />
                        Email
                        <Image
                            src="/icons/arrow-up-right-from-square-solid.svg"
                            width="20"
                            height="20"
                            alt="Send"
                        />
                    </p>
                    <p>
                        <Image
                            src="/icons/phone-solid.svg"
                            width="20"
                            height="20"
                            alt="Phone"
                        />
                        Telefone
                    </p>
                </div>
                <div>
                    <h2>Redes Sociais</h2>
                    <p>
                        <Image
                            src="/icons/instagram.svg"
                            width="40"
                            height="40"
                            alt="Instagram"
                        />
                        <Image
                            src="/icons/twitter.svg"
                            width="40"
                            height="40"
                            alt="Twitter"
                        />
                        <Image
                            src="/icons/facebook.svg"
                            width="40"
                            height="40"
                            alt="Facebook"
                        />
                    </p>
                </div>
            </div>
            <p>Copyright© 2024 Grupo 11. Todos os direitos reservados</p>
        </footer>
    );
}