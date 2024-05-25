"use client";

import Image from "next/image";
import styles from "./scroll-to-top.module.css";

export default function ScrollToTopButton() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    
    return (
        <button
            onClick={handleClick}
            className={styles.scrollToTopButton}
        >
            <Image
                width={30}
                height={30}
                src="/icons/arrow-to-top.png"
                alt="Arrow to top"
            />
        </button>
    );
}