// The data types a column can use in the first version of the application.
export type ColumnType =
  | "uuid"
  | "varchar"
  | "text"
  | "integer"
  | "boolean"
  | "timestamp";

// Describes a column within a table.
export interface DatabaseColumn 
{
  id: string;   // Unique internal identifier for the column.
  name: string;  // Column name displayed in the UI and later used in SQL.
  type: ColumnType;  // Column data type, limited to the values defined in ColumnType.
  isPrimaryKey: boolean;  // Whether this column uniquely identifies each table record.
  isForeignKey: boolean;  // Whether this column references a record in another table.
}

// Describes a database table.
export interface DatabaseTable 
{
  id: string;  // Unique internal identifier for the table.
  name: string;  // Table name, for example "users" or "orders".
  columns: DatabaseColumn[];  // List of columns that belong to this table.
}
