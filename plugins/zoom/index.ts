import path from 'path';

import { LoadContext, Plugin } from '@docusaurus/types';

export default function (context: LoadContext): Plugin {
    // if (typeof window === 'undefined') return null;

    // // Set initial background color
    // const zoomOptions: ZoomOptions = {
    //     background: getBackgroundColor(),
    // };
    // const zoomObject = mediumZoom(zoomSelector, zoomOptions);

    // const observer = new MutationObserver(() => {
    //     zoomObject.update({
    //         background: getBackgroundColor(),
    //     });
    // });

    // // Listen for data-theme attribute changes
    // observer.observe(document.querySelector('html'), {
    //     attributes: true,
    //     attributeFilter: ['data-theme'],
    // });
    
    return {
        name: 'docusaurus-plugin-zoom',
        getClientModules() {
            return [path.resolve(__dirname, './module')];
        }
    };
}