---
sidebar_position: 2
---

# TLS Connection

CompuTec WMS supports the TLS protocol, which ensures secure, encrypted data transfer between clients and servers. TLS operates in a server-client architecture and is designed to verify the server to which the client is connecting, safeguarding the communication channel.

---

## Requirements

To use TLS with CompuTec WMS, the following are required:

    - **CompuTec License Server** - Version 5.10.2.9
    - **SAP Business One Versions** - 9.3 (MS SQL and HANA), 10 (MS SQL and HANA)
    - **Clients Supported** - Windows WMS Client and Windows CE Client
    - **Port Addresses** - TLS and non-TLS connections (The default port for non-TLS usage is 30002)

    ![WMS Server Port SSL](./media/tsl-connection.webp)

## Usage

In CompuTec WMS Client settings, choose the required port:

1. Without TLS, use the default HTTP settings, with no changes required.

    ![Server Choosing](./media/server-choosing.webp)
2. With TLS, Add 'HTTPS' to the connection and change the port accordingly.

    ![Server Choosing](./media/server-choosing-2.webp)
3. Ensure that TLS or non-TLS settings are correctly configured on the server. Make the same TLS or non-TLS settings on the mobile device to ensure consistency across devices.

---
