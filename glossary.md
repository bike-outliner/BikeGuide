# Glossary

When describing an outline it's common to use the following terms:

* _Branch_: A branch consists of a row together with all the rows that it contains. The row's children, the children's children, etc.
* _Child_: The children of a row are the rows that it directly contains
* _Extension_: A plugin that adds new features to Bike. See [Using Extensions](using-bike/using-extensions.md).
* _Handle_: The triangle to the left of each row
* _Log_: A container row recording changes to another row's attributes. Its entries are ordinary rows carrying `log-` attributes. See [Row Log](using-bike/row-log.md).
* _Open / Closed_: A row is closed when its status is done or canceled, and open otherwise. Match them with the `open()` and `closed()` outline path functions.
* _Outline Path_: A query syntax for filtering and selecting rows in your outline. See [Creating Outline Paths](using-bike-advanced/creating-outline-paths.md).
* _Parent_: The parent of a row is the row that directly contains it
* _Root_: The topmost row in an outline is the root row. The root isn't visible, instead the top level visible rows in Bike are children of this hidden root row.
* _Row Attribute_: A `key : value` pair attached to a row, usually shown as a badge. See [Row Attributes](using-bike/row-attributes.md).
* _Row Type_: The semantic type of a row, such as heading, task, ordered list, etc. See [Row Formatting](using-bike/row-formatting.md).
* _Status_: A row's state — todo, started, done, or canceled. Absent means todo. See [Tasks & More](using-bike/tasks-and-more.md#status).
* _Sibling_: All children that have the same parent row are siblings
* _Theme_: A style definition that controls how your outline looks. See [Using Themes](using-bike/using-themes.md).
