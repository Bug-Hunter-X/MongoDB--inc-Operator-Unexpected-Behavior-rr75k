# MongoDB $inc Operator Unexpected Behavior

This repository demonstrates an uncommon error related to the MongoDB `$inc` operator.  The issue occurs when attempting to increment a field that is not a number, which leads to unexpected results or errors. This example shows the bug and its solution.

## Bug
The provided JavaScript code demonstrates incorrect usage of the `$inc` operator. The `counter` field might not be a number, and the update operation is attempted regardless.