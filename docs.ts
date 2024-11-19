export interface DocConfig {
    label: string;
    pluginId: string;
    currentVersion?: string;
    includeCurrentVersion: boolean;
}

export default ((preview: boolean) => ([
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
        currentVersion: preview ? "3.0" : undefined,
        includeCurrentVersion: preview ? true : false, // Don't publish on production
    }
])) as (preview: boolean) => DocConfig[];