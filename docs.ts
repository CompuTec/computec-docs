export interface DocConfig {
    label: string;
    pluginId: string;
	currentVersion?: string;
	lastVersion?: string;
    includeCurrentVersion: boolean;
    version?: any;
}

export default (production?: boolean) => ([
    {
        label: "ProcessForce",
        pluginId: "processforce",
        ...(production ? {
            includeCurrentVersion: false,
            lastVersion: "2.0",
        } : {
            currentVersion: "3.0",
            includeCurrentVersion: true,
            lastVersion: "current",
        }),
    },
    {
        label: "PDC",
        pluginId: "pdc",
        currentVersion: "3.0",
        includeCurrentVersion: true,
    },
    {
        label: "WMS",
        pluginId: "wms",
        currentVersion: "2.0",
        includeCurrentVersion: true,
    },
    {
        label: "Labels",
        pluginId: "labels",
        currentVersion: "1.00",
        includeCurrentVersion: true,
    },
    {
        label: "AppEngine",
        pluginId: "appengine",
        currentVersion: "3.0",
		includeCurrentVersion: true,
		lastVersion: "current",
        version: {
            current: {
                label: "3.0",
                badge: true,
                banner: "none"
            },
            "2.0": {
                label: "2.0",
                badge: true,
                banner: "none"
            }
        }
    },
    {
        label: "Premium",
        pluginId: "premium",
        currentVersion: "1.0",
        includeCurrentVersion: true,
    },
    {
        label: "WebUp",
        pluginId: "webup",
        currentVersion: "1.0",
        includeCurrentVersion: true,
    }
] as DocConfig[]);