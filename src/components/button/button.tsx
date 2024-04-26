import styles from "./button.module.css";

type ButtonType = {
    content: string;
}

export default function Button({ content }: ButtonType) {
    return (
        <button className={styles.button}>
            {content}
        </button>
    );
}