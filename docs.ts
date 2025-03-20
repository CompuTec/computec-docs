export interface DocConfig {
    label: string;
    pluginId: string;
	currentVersion?: string;
	lastVersion?: string;
    includeCurrentVersion: boolean;
}

export default [
    {
        label: "ProcessForce",
        pluginId: "processforce",
        currentVersion: "10.0",
        includeCurrentVersion: true,
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
    },
    {
        label: "Premium",
        pluginId: "premium",
        currentVersion: "1.0",
        includeCurrentVersion: true,
    }
] as DocConfig[];