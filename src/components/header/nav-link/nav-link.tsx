import Link from "next/link";
import styles from "../header.module.css";
import { type LinkType, navLinks } from "./nav-links";

type NavLinkProps = {
    path: string;
    sidebar: boolean;
    animation: boolean;
}

export default function NavLink({
    path,
    sidebar,
    animation
}: NavLinkProps) {
    return (
        <nav className={
            animation ? (
                sidebar ? styles.notHidden : styles.hidden
            ) : ""
        }>
            {
                navLinks.map((link: LinkType, index: number) => {
                    const isActive = path === link.href;
                    const classes = `${styles.link} ${isActive ? styles.activeLink : ""}`;

                    return (
                        <Link
                            key={index}
                            href={link.href}
                            className={classes}
                        >
                            {link.page}
                        </Link>
                    );
                })
            }
        </nav>
    );
}