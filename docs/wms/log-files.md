---
sidebar_position: 6
---

# Log Files

Here is the detailed information on the locations of logs for CompuTec WMS:

1. **Server logs**

    - Logs: C:\ProgramData\CompuTec\CompuTec WMS\Server\Logs
    - TimeLog: C:\ProgramData\CompuTec\CompuTec WMS\Server\TimeLog

2. **Service manager**

    Here, you will find logs regarding the installation of CompuTec WMS objects.

    - Logs: C:\ProgramData\CompuTec\ServiceManager\Logs

3. **Client**

    **a. Client (legacy)**

    - Logs: C:\Users\[USER_NAME]\AppData\Local\CompuTec\CompuTec WMS\Client\Logs
    - TimeLog: C:\Users\[USER_NAME]\AppData\Local\CompuTec\CompuTec WMS\Client\TimeLog

    **b. Client Desktop or Android**

    - Client Logs on Server: C:\ProgramData\CompuTec\CompuTec WMS\Server\Logs\ClientLogs

    You can send logs from the client to the server (does not apply to legacy version)

    ![Log Files](./media/log-files/logs.png) ![Log Files](./media/log-files/logs-01.png) ![Log Files](./media/log-files/logs-02.png)
    ![Log Files](./media/log-files/logs-04.png)

4. **Enabling additional logs**

    To log additional execution details by CompuTec WMS:

    - Navigate to ``C:\Program Files\CompuTec\CompuTec WMS Server`` or ``C:\Program Files (x86)\CompuTec\CompuTec WMS Server``

    - Open the configuration file:

        ![Log Files](./media/log-files/logs-05.png)

    - Add the following code to enable detailed query logging

        ```xml
        <target xsi:type="File" name="fileEventLogForQueries" fileName="${specialfolder:folder=CommonApplicationData}\CompuTec\Computec WMS\Server\Logs\queries ${shortdate}.log" layout=" ${time} ${message} ${stacktrace:format=DetailedFlat:topFrames=5}" />
         ```

        WMS 2.0:

        ```xml
        <logger name="QueryNLogger" minlevel="Trace" writeTo="fileEventLogForQueries" />
        ```

        WMS 3.0:

        ```xml
         <logger name="CompuTec.Core2.DI.Database.*" minlevel="Trace" writeTo="fileEventLogForQueries" />
         ```

        in the specified `<target>` and `<logger>` sections of the above-mentioned file:

        ![Log Files](./media/log-files/logs-03.png)

    - Upload the log file from:

        C:\ProgamData\CompuTec\CompuTec WMS\Server\Logs\queries

            ![Log Files](./media/log-files/logs-06.png)

5. **Additionally, you can view the log from Microsoft Event Viewer**

    Logs can also be viewed using the Microsoft Event Viewer for more detailed system logs and diagnostics

6. **Enable additional Telemetry for CompuTec WMS Server**

    This section describes how to enable additional telemetry and diagnostic tracing for the **CompuTec WMS Server**.

    :::warning[important]
    Before making any changes, create a backup copy of the following file:
    ``C:\Program Files\CompuTec\WMS Server\app.config.json``
    :::

    To enable additional telemetry:

    1. Navigate to: ``C:\Program Files\CompuTec\WMS Server``.
    2. Locate the file: **app.config.json**.
    3. Open the file in a text editor (for example, **Notepad** running as Administrator).
    4. Add the following section to the file:

        ```xml
        "CoreDiagnostics": {
         "IoCTrackingEnabled": false,
         "LoggingEnabled": true,
         "TracesEnabled": true,    
         "TraceSources": [
         "CompuTec.*",
         "SignalR.RedisMessageBus",
         "Microsoft.AspNetCore.SignalR.Server",
          "Microsoft.AspNetCore.SignalR.Client",
         "SignalR.Transports.WebSocketTransport",
          "SignalR.Transports.ServerSentEventsTransport",
         "SignalR.Transports.TransportHeartBeat",
          "System.Net.Http",
         "Experimental.System.Net.*"
        ],
         "MetricsSources": [],
        "LoggingOtlpExporter": {
          "ExporterType": "OtlpExporter",
          "Enabled": true,
         "Options": {
              "Endpoint": "https://otlp-gateway-prod-eu-west-2.grafana.net/otlp/v1/logs",
             "Protocol": "HttpProtobuf",
             "Headers": "Authorization=Basic MTQ5OTAxNzpnbGNfZXlKdklqb2lNVFkwTkRVMk1pSXNJbTRpT2lKemRHRmpheTB4TkRrNU1ERTNMVzkwYkhBdGQzSnBkR1V0ZDIxemMyVnlkbVZ5ZEc5clpXNGlMQ0pySWpvaU0wd3hlVTV2T0RReU1EVk9NVXQwTUdwVmFsSTFTa1YzSWl3aWJTSTZleUp5SWpvaWNISnZaQzFsZFMxM1pYTjBMVElpZlgwPQ=="
         }
         },
         "TracesOtlplExporter": {
         "ExporterType": "OtlpExporter",
         "Enabled": true,
            "Options": {
             "Endpoint": "https://otlp-gateway-prod-eu-west-2.grafana.net/otlp/v1/traces",
             "Protocol": "HttpProtobuf",
            "Headers": "Authorization=Basic MTQ5OTAxNzpnbGNfZXlKdklqb2lNVFkwTkRVMk1pSXNJbTRpT2lKemRHRmpheTB4TkRrNU1ERTNMVzkwYkhBdGQzSnBkR1V0ZDIxemMyVnlkbVZ5ZEc5clpXNGlMQ0pySWpvaU0wd3hlVTV2T0RReU1EVk9NVXQwTUdwVmFsSTFTa1YzSWl3aWJTSTZleUp5SWpvaWNISnZaQzFsZFMxM1pYTjBMVElpZlgwPQ=="
         }
        }
        }
        ```

        Alternatively, you can replace the existing file with the [prepared version available for download here](https://support.computec.pl/secure/attachment/253804/app.config.json).

    5. After saving the changes:
        - Restart the **WMS Server service**.
        - Perform the required tests using the **WMS Client**.

    6. After completing the tests, restore the original **app.config.json** file.
