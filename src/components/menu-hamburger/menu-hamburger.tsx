import styles from "../header/header.module.css";

type MenuHamburgerProps = {
    sidebar: boolean;
    setSidebar: (value: boolean) => void;
}

export default function MenuHamburguer({
    sidebar,
    setSidebar
}: MenuHamburgerProps) {
    return (
        <div
            className={`
                ${styles.hamburger} ${sidebar ? styles.open : ""}
            `}
            onClick={() => {
                setSidebar(!sidebar);
            }}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}