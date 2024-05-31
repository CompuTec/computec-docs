export interface DocConfig {
    label: string;
    pluginId: string;
    currentVersion: string;
}

export default [
    {
        label: "ProcessForce",
        pluginId: "processforce",
        currentVersion: "10.0"
    },
    {
        label: "PDC",
        pluginId: "pdc",
        currentVersion: "3.0"
    },
    {
        label: "WMS",
        pluginId: "wms",
        currentVersion: "2.0"
    },
    {
        label: "Labels",
        pluginId: "labels",
        currentVersion: "1.00"
    },
    {
        label: "AppEngine",
        pluginId: "appengine",
        currentVersion: "2.0"
    }
] as DocConfig[];