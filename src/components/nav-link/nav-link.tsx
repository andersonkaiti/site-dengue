import styles from "../header/header.module.css";
import Link from "next/link";
import { type LinkType, navLinks } from "./nav-links";

type NavLinkProps = {
    path: string;
    sidebar: boolean;
}

export default function NavLink({
    path,
    sidebar
}: NavLinkProps) {
    return (
        <nav id={sidebar ? styles.notHidden : ""}>
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
    )
}