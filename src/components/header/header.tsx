"use client";

import styles from "./header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import NavLink from "./nav-link/nav-link";
import MenuHamburguer from "./menu-hamburger/menu-hamburger";
import { handleResize } from "./header-resize";

export default function Header() {
    const path = usePathname();
    const [animation, setAnimation] = useState<boolean>(false);
    const [sidebar, setSidebar] = useState<boolean>(false);

    useEffect(() => {
        const props = {
            setSidebar,
            setAnimation
        }

        handleResize(props);
        window.addEventListener("resize", () => handleResize(props));

        document.addEventListener("click", event => {
            const target = event.target as HTMLElement;
            if(!target.closest("header")) {
                setSidebar(false);
            }
        });
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    width="100"
                    height="100"
                    src="/logo.png"
                    alt="Logo"
                />
                <h1>Dengue</h1>
            </div>
            <NavLink
                path={path}
                sidebar={sidebar}
                animation={animation}
            />
            <MenuHamburguer
                sidebar={sidebar}
                setSidebar={setSidebar}
                setAnimation={setAnimation}
            />
        </header>
    );
}