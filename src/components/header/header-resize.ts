type HandleResizeProps = {
    setSidebar: (value: boolean) => void;
}

export function handleResize({ setSidebar }: HandleResizeProps) {
    if(window.innerWidth >= 615) {
        setSidebar(false);
    }
}