---
sidebar_position: 2
---

# SSL Connection

CompuTec WMS supports the SSL protocol.

SSL (Secure Socket Layer) - is a protocol to securely transfer encrypted data. The protocol works in server-client architecture. Its primary function is to verify a server to which a client tries to connect.

---

## Requirements

- CompuTec License Server, 5.10.2.9 version
- The feature works on SAP Business One 9.3 (MS SQL and HANA) and on SAP Business One 10 (MS SQL and HANA)
- The feature works on both Windows WMS Client and Windows CE Client
- Port addresses are defined for both SSL and non-SSL usage (a default port for non-SSL usage is 30002):

![WMS Server Port SSL](./media/ssl-connection.webp)

## Usage

In CompuTec WMS Client settings, choose the required port:

1. Without SSL, HTTP (no changes):

    ![Server Choosing](./media/server-choosing.webp)
2. With SSL (add HTTPS and change the port):

    ![Server Choosing](./media/server-choosing-2.webp)
3. The corresponding settings (SSL or non-SSL) must be set. Do the same on the mobile device:

    ![SSL](./media/SSL.webp)
