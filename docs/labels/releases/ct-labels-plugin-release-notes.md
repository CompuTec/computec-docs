---
sidebar_position: 2
---


# CompuTec Labels Plugin Release Notes

## CompuTec Labels Plugin

Below are the release notes for **CompuTec Labels Plugin**. This Plugin can be used and installed using **CompuTec AppEngine**. [Read more](/docs/labels/ct-labels-plugin/ct-label/)

### CompuTec Labels Plugin 3.2610.2

**Release Date: 5 October 2026**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Fixed | Automatic Printing | Fixed automatic label printing for **Receipt from Production**. Print triggers are now matched to the correct document type, so the appropriate trigger runs for Receipt from Production without incorrectly running for draft documents. |
| Fixed | Automatic Printing | Fixed **automatically created print requests** so document and line information is queued correctly. Empty values are now also passed as blank, preventing the text `empty` from being used in label parameters. |

### CompuTec Labels Plugin 3.2601.1

**Release Date: 29 January 2026**

| Issue Type | Components | Release Note |
| --- | --- | --- |
| Improved | Printing Actions | **Printing actions** now use clearer names and descriptions, so it’s easier to choose the right action. |
