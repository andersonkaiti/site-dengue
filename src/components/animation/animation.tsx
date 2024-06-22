"use client";

import Aos from "aos";
import { useEffect } from "react";

type AnimationType = {
    children: React.ReactNode;
}

export default function Animation({ children }: AnimationType) {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            {children}
        </>
    );
}