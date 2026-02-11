---
sidebar_position: 5
---

# Disabling Debug Mode

Debug mode helps you collect detailed information for troubleshooting when you notice inconsistencies in scenario results. Debug mode provides a way to capture detailed information, making it easier for support teams to analyze and resolve problems. By enabling debug mode, users can extract relevant data and attach it to a support ticket for troubleshooting. This guide shows how to enable, use, and disable debug mode effectively.

---

:::caution
If you suspect that the scenario results are incorrect, please report the issue by submitting a ticket to [CompuTec Support](https://support.computec.pl). When documenting tickets, be sure to use debug mode.
:::

## How-to Guide: Enable and Use Debug Mode

Follow these steps to activate debug mode and collect the necessary data for support.

### Step 1: Turn on Debug Mode

- Open the application using the following URL:  
  `https://localhost:54001/webcontent/launchpad/webapp/Index.html?aedebug=true`

- Press **Enter**. Debug mode is now active.

### Step 2: Identify Debug Mode Activation

- You’ll see a **Load** icon on the scenario list (CompuTec view).  
- A **Download** icon will appear above the scenario (User view).

    ![Load](./media/debug-mode/load.webp)

### Step 3: Run and Correct the Scenario

1. Run the relevant scenario.
2. Open the **Recommendation** tab.
3. Enter the correct data to replace any incorrect values.

   ![Corrections](./media/debug-mode/corrections.webp)

### Step 4: Download and Submit Debug Data

- Click the **Download** icon to save the JSON file.
- Go to the [CompuTec Support Portal](https://support.computec.pl) and create a support ticket.
- Attach the downloaded JSON file and include screenshots if needed.

### Step 5: Turn Off Debug Mode

Update the URL by changing `aedebug=true` to `aedebug=false`:

- **Enabled**:  
  `https://localhost:54001/webcontent/launchpad/webapp/Index.html?aedebug=true#/plugin/computec.appengine.MRP&home`

- **Disabled**:  
  `https://localhost:54001/webcontent/launchpad/webapp/Index.html?aedebug=false#/plugin/computec.appengine.MRP&home`

Approve to confirm and exit debug mode.

---

## Tutorial: First Time Using Debug Mode?

If you're new to using debug mode, start here:

1. Copy and paste the debug-enabled URL.
2. Run a known test scenario.
3. Download the JSON output.
4. Review it briefly to understand the structure.
5. Disable debug mode and revert to regular usage.

This practice run helps you become comfortable with the process before using it during real issues.

---
