"use client";

import Aos from "aos";
import { useEffect } from "react";

type AnimationProps = {
    children: React.ReactNode;
}

export default function Animation({ children }: AnimationProps) {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            {children}
        </>
    );
}