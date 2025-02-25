---
sidebar_position: 9
---

# Settings Table_Schedule Type_Schedule Mode

Efficient maintenance scheduling is critical for ensuring the reliability and longevity of equipment. The Schedule Type and Schedule Mode settings determine how Maintenance Orders (MOs) are generated based on time, meter readings, or a combination of both.

This table outlines the different scheduling approaches:

| | Time Based | Meter Based | Time & Meter Based (Exclude) <br/>Synchronization of modes | Time & Meter Based (Not Exclude) <br/>Lack of synchronization of modes |
| --- | --- | --- | --- | --- |
| **Fixed** <br/>One active MO | Constant MO generation interval – Time Units | Constant MO generation interval – Meter Units | Variable MO generation interval – Time & Meter Units | Variable MO generation interval – Time & Meter Units |
| **Variable** <br/>One active MO | Variable MO generation interval – Time Units | Variable MO generation interval – Meter Units| Variable MO generation interval – Time & Meter Units | Variable MO generation interval – Time & Meter Units |
| **Fixed (Duplicate)** <br/>Many active MOs | Constant MO generation interval – Time Units | Constant MO generation interval – Meter Units | Variable MO generation interval – Time & Meter Units | Variable MO generation interval – Time & Meter Units |

---
