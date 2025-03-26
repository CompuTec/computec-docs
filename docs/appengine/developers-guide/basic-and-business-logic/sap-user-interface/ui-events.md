---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# SAP Business One Events

SAP Business One offers a flexible event-handling framework, enabling developers to create custom business logic that responds to user interactions and system processes. This guide provides a clear overview of the standard SAP Business One events, how to implement them, and best practices for leveraging these events effectively, including support for User Defined Object (UDO) forms.

---

Events can be added to all SAP forms. Here are the standard SAP events:

- **Item Event** - `ApplicationItemEvent`
- **RightClickEvent** - `ApplicationRightClickEvent`
- **Data Event** - `ApplicationDataEvent`
- **Menu Event** - `ApplicationContextMenuEvent`

Each event type must derive from the appropriate base class and have the **[EnableEvent]** attribute.

## Enable Event Attribute

This attribute ensures the class is invoked when the SAP event occurs. If added without the **FormType** property, `HandleEvent` is invoked each time the event occurs across all forms. For such cases, implement the method:

```csharp
public override bool HandleEvent(ref PItemEvent itemEvent)
{
    return itemEvent.FormTypeEx == "134";
}
```

>**Note**: For better performance, we recommend specifying the **FormType** property.

## Bubble Event Attribute

The Bubble Event Attribute allows you to control the flow of events. To cancel the "before" event, use:

```csharp
setBubbleEvent(true);
```

## Generic Version of Events

If implementing a custom User Defined Object (UDO) with a UDO Bean for business logic, use the generic version of the base class. This approach provides helpful methods for data loading and streamlines the implementation process.

### Item Event

1. Create a class inheriting from `ApplicationItemEvent` and add the **[EnableEvent]** attribute.
2. Override the `HandleEvent` method to specify if the class handles a specific form type.

    ```csharp
    public override bool HandleEvent(ref PItemEvent itemEvent)
    {
        return itemEvent.FormTypeEx == "134";
    }
    ```

3. Override the method to implement, such as:
    - `OnItemPressedBefore`
    - `OnItemPressedAfter`
    - `OnChooseFromListBefore`
    - `OnChooseFromListAfter`
    - ...

### Data Event

1. Create a class inheriting from `ApplicationDataEvent` and add the **[EnableEvent]** attribute.
2. Override the `HandleEvent` method to specify if the class handles a specific form type.

    ```csharp
    public override bool HandleEvent(ref PItemEvent itemEvent)
    {
        return itemEvent.FormTypeEx == "134";
    }
    ```

3. Override methods like:
    - `OnFormDataAddBefore`
    - `OnFormDataAddAfter`
    - `OnFormDataLoadBefore`
    - `OnFormDataLoadAfter`
    - ...

### RightClickEvent

1. Create a class inheriting from `ApplicationRightClickEvent` and add the **[EnableEvent]** attribute.
2. Override the `HandleEvent` method to specify if the class handles a specific form type.

    ```csharp
    public override bool HandleEvent(ref PItemEvent itemEvent)
    {
        return itemEvent.FormTypeEx == "134";
    }
    ```

3. Implement methods like:
    - `OnRightClickBefore`
    - `OnRightClickAfter`

### MenuEvent

1. Create a class inheriting from `ApplicationContextMenuEvent` and add the **[EnableEvent]** attribute.
2. Override the `HandleEvent` method to specify if the class handles a specific form type.

    ```csharp
    public override bool HandleEvent(ref PItemEvent itemEvent)
    {
        return itemEvent.FormTypeEx == "134";
    }
    ```

3. Implement methods like:
    - `OnMenuClickBefore`
    - `OnMenuClickAfter`

### LoadReportEvent

1. Create a class inheriting from `ApplicationLayoutEvent` and add the **[EnableEvent]** attribute.
2. Override the `HandleEvent` method to specify if the class handles a specific form type.

    ```csharp
    public override bool HandleEvent(ref PItemEvent itemEvent)
    {
        return itemEvent.FormTypeEx == "134";
    }
    ```

3. Implement methods like:
    - `OnBeforeLayoutKeyPressed`
    - `OnAfterLayoutKeyPressed`

### Custom UDO Object Forms

Custom UDO object forms allow you to extend functionality by linking UDO Beans to events, enabling streamlined business logic and seamless event handling tailored to specific form types. Below are the examples for forms bound to UDO Bean objects:

#### Item Event

1. Create a class inheriting from `ApplicationItemEvent<T>` where `T : IUDOBean`.
2. Add the **[EnableEvent(FormTypeEx)]** attribute.
3. Override `HandleEvent` to specify if this class handles a specific form type.

    ```csharp
    public override bool HandleEvent(ref PItemEvent itemEvent)
    {
        return itemEvent.FormTypeEx == FormTypeEx;
    }
    ```

4. Override methods like `OnItemPressedBefore`, `OnItemPressedAfter`, `OnChooseFromListBefore`, etc.
5. Built-in mechanisms allow direct UDO handling in events. See [more info](./business-logic-ui-model.md).

#### Data Event

1. Create a class inheriting from `ApplicationDataEvent<T>` where `T : IUDOBean`.
2. Add the **[EnableEvent(FormTypeEx)]** attribute.
3. Override `HandleEvent` to specify if this class handles a specific form type.

    ```csharp
    public override bool HandleEvent(ref PItemEvent itemEvent)
    {
        return itemEvent.FormTypeEx == FormTypeEx;
    }
    ```

4. Business logic executes out of the box.
5. To add custom validation logic, override:
   - `HandleAddException`
   - `HandleUpdateException`

#### RightClickEvent

1. Create a class inheriting from `ApplicationRightClickEvent<T>` where `T : IUDOBean`.
2. Add the **[EnableEvent(FormTypeEx)]** attribute.
3. Override `HandleEvent` to specify if this class handles a specific form type.

    ```csharp
    public override bool HandleEvent(ref PItemEvent itemEvent)
    {
        return itemEvent.FormTypeEx == FormTypeEx;
    }
    ```

4. Out-of-the-box business logic for adding/removing lines to collections.

#### MenuEvent

1. Create a class inheriting from `ApplicationContextMenuEvent<T>` where `T : IUDOBean`.
2. Add the **[EnableEvent(FormTypeEx)]** attribute.

---
SAP Business One's event framework is a powerful tool for developers to create dynamic and user-friendly solutions. By understanding the standard events, implementing the appropriate base classes, and following best practices, you can extend SAP B1's functionality while maintaining system stability and performance.

With this guide, you are equipped to design and implement event-driven logic, making SAP Business One a more robust tool for your business processes.
