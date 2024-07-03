import mediumZoom, { Zoom, ZoomOptions } from 'medium-zoom';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

let colorModeObserver: MutationObserver;
let currentColorMode: "light" | "dark";
let zoomObject: Zoom;
const zoomSelector = '.markdown img';
const zoomDarkBackground = 'rgb(50, 50, 50)';
const zoomLightBackground = 'rgb(255, 255, 255)';

function getCurrentColorMode(): typeof currentColorMode {
    return document.querySelector('html[data-theme="dark"]') ? "dark" : "light";
}

if (ExecutionEnvironment.canUseDOM) {
    currentColorMode = getCurrentColorMode();
    
    const zoomOptions: ZoomOptions = {
        margin: 24,
        background: currentColorMode === "dark" ? zoomDarkBackground : zoomLightBackground,
        container: {
            top: 80, // Offset by navbar height
        },
    };

    zoomObject = mediumZoom(zoomSelector, zoomOptions);

    // Listen for data-theme attribute changes
    colorModeObserver = new MutationObserver(() => {
        const newColorMode = getCurrentColorMode();
        if (newColorMode === currentColorMode) return;

        currentColorMode = newColorMode;

        zoomObject.update({
            background: currentColorMode === "dark" ? zoomDarkBackground : zoomLightBackground,
        });
    });

    colorModeObserver.observe(document.querySelector('html'), {
        attributes: true,
        attributeFilter: ['data-theme'],
    });
}

export function onRouteUpdate() {
    zoomObject.detach();
};

export function onRouteDidUpdate() {
    zoomObject.attach(zoomSelector);
};