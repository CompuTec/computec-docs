---
sidebar_position: 2
---

# Setting Up the Project and Debugging Environment

This guide walks you through the process of setting up and debugging a project using CompuTec AppEngine, a powerful tool for extending and customizing SAP Business One. Whether you're configuring your development environment for the first time or setting up plugins to streamline your workflow, this document will serve as a comprehensive reference to get you started efficiently.

---

## Steps to Get Started

1. **Prepare Your Environment** - Before diving into development, ensure the following prerequisites are in place:

    - Install **CompuTec AppEngine** and configure it on your development company database.
    - Activate the target company within the CompuTec AppEngine interface.
    - Run the SAP Business One application on the same database and confirm that the **CompuTec.Start** add-on is installed.
    - Set the CompuTec.Start add-on to manual start mode (Development Mode).
2. **Install CompuTec Templates** - CompuTec provides predefined templates to streamline your development process. To install these templates:

    - Open a command prompt.
    - Execute the following command:

        ```bash
        dotnet new install CompuTec.AppEngine.Templates  
        These templates provide a robust starting point for building plugins and customizations with minimal setup effort.
        ```

---
By following this guide, you ensure a smooth and efficient start to your project, leveraging the power of prebuilt templates and a modular plugin system. Ready to take your SAP Business One customization to the next level? Start by setting up your environment today!
