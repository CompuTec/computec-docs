---
sidebar_position: 3
---

# AppEngine Instances

AppEngine Instances are integral components of the AppEngine Server, which serves as a platform for hosting web-based plugins, executing jobs, and more. By deploying multiple AppEngine Instances, you can distribute the workload across servers, ensuring optimal performance and reliability. These instances may also be configured as pre-release or development servers to suit specific operational needs. While load balancing for instances will be supported in future software updates/versions, the current version allows for detailed instance configuration and management.

---

## Instance Configurations

For  a list of AE instances go to Administration panel. Configurations->AppEngine Servers.

![AppEngine Instances](./media/appengine-instances/ae-instances.png)

By selecting the AppEngine you can see

## Configuration Tab

here you can configure all Instace specific setinsg such as :

![AE Instance Config](./media/appengine-instances/ae-instances-config.png)

### Details

* Instance Name -
* Guid- Instance Guid
* Profile -> COnfiguration profile that is used by this AE instance more info go to profiles.

### Advanced Settings

* AttachmentsDirecory- when uploading an attachment they will be temporary stored in this location
* HTTPS Ports- coma seperated list of ports under witch this server will listen.Deafault is 54001
* External Host Address-> external Adress that will be used for this appEngine -> more info OIDC Settings
* Temporary Donwload Path-when downloading a plugin this path will be used to store this content. and the same location is esed by Plugin Installer to isntall plugins on database.
* SAP Company Expiry Time - the time on with the connection is kept by the ae isntance in minutes default should be 60.
* Token Expiry TIme - Adminsitrative session the token expiry timeline  in secounds
* Refresh TRoken Expiry Time - not used
* Session Data Lifetime -  the time on with the connection is kept by the ae isntance in minutes default

### Certificates

There are two options to get specify the certificate used in SSL protocol

By FIle or using
    - PFX Certificate File Path -Path to the certificate
    - Certificate Password - a password

By Certificate Store
    - Store Name - Name of a store
    - My: Personal certificates
    - Root: Trusted root certification authorities
    - CA: Intermediate certification authorities
    - AddressBook: Other people
    - AuthRoot: Third-party root certification authorities
    - TrustedPublisher: Trusted publishers
    - Disallowed: Untrusted certificates
    - Find Type  by what value the certificat should be find
    - Store Value - The value of a elemeny to search by
    - Store Location
    - LocalMachine
    - CurrentUser

## Companies Tab

The Companies tab lists all SAP companies assigned to the selected AppEngine Instance. You can view and manage these assignments to ensure proper instance-company mapping.

    ![AE Instances Companies](./media/appengine-instances/ae-instancies-companies.png)

## Plugins

The Plugins tab provides a list of plugins hosted on the instance. This is where you can monitor and manage plugins for optimal functionality and deployment.

    ![AE Instances Plugins](./media/appengine-instances/ae-instances-plugins.png)

---
