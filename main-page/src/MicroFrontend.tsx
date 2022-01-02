import React, { useEffect } from "react";

type MicroFrontendPropType = {
    name: string,
    host: string,
    history?: History
}

function MicroFrontend({ name, host, history }: MicroFrontendPropType) {
    useEffect(() => {

        const scriptId = `micro-frontend-script-${name}`;

        const renderMicroFrontend = () => {
            (window as any)[`render${name}`](`${name}-container`, history);
        };

        if (document.getElementById(scriptId)) {
            renderMicroFrontend();
            return;
        }

        fetch(`${host}/asset-manifest.json`)
            .then((res) => res.json())
            .then((manifest) => {
                const script = document.createElement("script");
                script.id = scriptId;
                script.crossOrigin = "";
                script.src = `${host}${manifest.files["main.js"]}`;
                script.onload = () => {
                    renderMicroFrontend();
                };
                document.head.appendChild(script);
            });

        return () => {
            (window as any)[`unmount${name}`]
                &&
                (window as any)[`unmount${name}`](`${name}-container`);
        };
    });

    return <main id={`${name}-container`} />;
}

export default MicroFrontend;