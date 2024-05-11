import styles from "../header.module.css";

type MenuHamburgerProps = {
    sidebar: boolean;
    setSidebar: (value: boolean) => void;
    setAnimation: (value: boolean) => void;
}

export default function MenuHamburguer({
    sidebar,
    setSidebar,
    setAnimation
}: MenuHamburgerProps) {
    return (
        <div
            className={`
                ${styles.hamburger} ${sidebar ? styles.open : ""}
            `}
            onClick={() => {
                setSidebar(!sidebar);
                setAnimation(true);
            }}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}