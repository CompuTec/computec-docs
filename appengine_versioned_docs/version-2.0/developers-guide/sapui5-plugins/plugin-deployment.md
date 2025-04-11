---
sidebar_position: 16
---

# Plugin Deployment

Creating a deployment package is a straightforward process. Simply compile the plugin in Release mode and package the resulting build output into a ZIP file. This ZIP file can then be used for plugin installation, as outlined in the[Configuration and Administration](../../../version-2.0/administrators-guide/configuration-and-administration/overview.md#plugins) guide.

## Creating Deployment Package

Follow these steps to prepare your plugin for deployment:

1. Open the solution in Visual Studio.

    ![VS Solution Open](./media/plugin-deployment/vs-solution-open.webp)

2. Change the build configuration to either Release or Release10, depending on your target SAP Business One version.

    >Note: Release10 is used for SAP Business One version 10.

    ![Change to Release](./media/plugin-deployment/change-to-release-10.webp)

3. Rebuild the solution.

    ![Rebuild](./media/plugin-deployment/rebuild.webp)
4. Now, we need to pack build content of Plugin Project. You can find path of your build in build output (or in your project properties - build - output path).

    ![Build](./media/plugin-deployment/build-result-path.webp)
5. Finally we just need to pack content of build into zip archive.

    ![Build Content](./media/plugin-deployment/build-content-explorer.webp)
6. Only the created zip file is required to install plugin into AppEngine.

    ![Zip file](./media/plugin-deployment/zip-file.webp)

---
