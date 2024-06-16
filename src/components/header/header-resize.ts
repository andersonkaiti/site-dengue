type HandleResizeProps = {
    setSidebar: (value: boolean) => void;
    setAnimation: (value: boolean) => void;
}

export function handleResize({
    setSidebar,
    setAnimation
}: HandleResizeProps) {
    if(window.innerWidth >= 790) {
        setSidebar(false);
        setAnimation(false);
    } else {
        setAnimation(true);
    }
}