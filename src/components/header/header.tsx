"use client";

import styles from "./header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "../button/button";
import NavLink from "../nav-link/nav-link";
import MenuHamburguer from "../menu-hamburger/menu-hamburger";
import { handleResize } from "./header-resize";

export default function Header() {
    const path = usePathname();
    const [sidebar, setSidebar] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("resize", () => handleResize({ setSidebar }));
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    width={100}
                    height={100}
                    src="/logo.png"
                    alt="Logo"
                />
                <h1>Dengue</h1>
            </div>
            <NavLink
                path={path}
                sidebar={sidebar}
            />
            <div className={styles.headerButton}>
                <Button
                    content="Notícias"
                />
            </div>
            <MenuHamburguer
                sidebar={sidebar}
                setSidebar={setSidebar}
            />
        </header>
    );
}