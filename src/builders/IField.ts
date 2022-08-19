import { MysqlFieldTypes } from './MySql/MySqlField';

interface IField {
    Name(name: string): IField;
    PrimaryKey(primaryKey: boolean): IField;
    Unique(unique: boolean): IField;
    ForeignKey(foreignKey: ForeignKey): IField;
    IsNullable(isNullable: boolean): IField;
    Default(defaultValue: string): IField;
    AutoIncrement(autoIncrement: boolean): IField;
    Type(type: MysqlFieldTypes): IField;
    Length(length: number): IField;
    name: string;
    primaryKey: boolean;
    isNullable: boolean;
    unique: boolean;
    foreignKey: ForeignKey | undefined;
    defaultValue: string | undefined;
    autoIncrement: boolean;
    type: MysqlFieldTypes;
    length: number | undefined;
    Build(): string;
}

type ForeignKey = {
    tableName: string;
    field: string;
};

export { IField, ForeignKey };
