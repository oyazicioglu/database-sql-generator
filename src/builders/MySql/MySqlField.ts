import { ForeignKey, IField } from '../IField';

class MySqlField implements IField {
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    private _primaryKey: boolean = false;
    public get primaryKey(): boolean {
        return this._primaryKey;
    }
    public set primaryKey(value: boolean) {
        this._primaryKey = value;
    }

    private _isNullable: boolean = true;
    public get isNullable(): boolean {
        return this._isNullable;
    }
    public set isNullable(value: boolean) {
        this._isNullable = value;
    }

    private _autoIncrement: boolean = false;
    public get autoIncrement(): boolean {
        return this._autoIncrement;
    }
    public set autoIncrement(value: boolean) {
        this._autoIncrement = value;
    }
    private _unique: boolean = false;
    public get unique(): boolean {
        return this._unique;
    }
    public set unique(value: boolean) {
        this._unique = value;
    }
    private _type: MysqlFieldTypes = MysqlFieldTypes.VARCHAR;
    public get type(): MysqlFieldTypes {
        return this._type;
    }
    public set type(value: MysqlFieldTypes) {
        this._type = value;
    }

    private _length: number | undefined = 55;
    public get length(): number | undefined {
        return this._length;
    }
    public set length(value: number | undefined) {
        this._length = value;
    }

    private _defaultValue?: string | undefined;
    public get defaultValue(): string | undefined {
        return this._defaultValue;
    }

    public set defaultValue(value: string | undefined) {
        this._defaultValue = value;
    }

    private _foreignKey?: ForeignKey | undefined;
    public get foreignKey(): ForeignKey | undefined {
        return this._foreignKey;
    }
    public set foreignKey(value: ForeignKey | undefined) {
        this._foreignKey = value;
    }

    constructor(name: string, type: MysqlFieldTypes) {
        this._name = name;
        this._type = type;
    }

    AutoIncrement(autoIncrement: boolean): IField {
        this.autoIncrement = autoIncrement;
        return this;
    }

    Default(defaultValue: string): IField {
        this.defaultValue = defaultValue;
        return this;
    }

    Name(name: string): IField {
        this.name = name;
        return this;
    }

    Type(type: MysqlFieldTypes) {
        this.type = type;
        return this;
    }

    Length(length: number): IField {
        this.length = length;
        return this;
    }

    PrimaryKey(primaryKey: boolean): IField {
        this.primaryKey = primaryKey;
        return this;
    }

    Unique(unique: boolean): IField {
        this.unique = unique;
        return this;
    }

    ForeignKey(foreignKey: ForeignKey): IField {
        this.foreignKey = foreignKey;
        return this;
    }

    IsNullable(isNullable: boolean): IField {
        this.isNullable = isNullable;
        return this;
    }

    Build(): string {
        const totalSqlArray = [
            this.name,
            this.TypeSql(),
            this.UniqueSql(),
            this.AutoIncrementSql(),
            this.DefaultSql(),
            this.IsNullSql(),
            this.ForeignKeySql(),
            this.PrimaryKeySql(),
        ];

        const sql = totalSqlArray.filter((f) => f !== '');
        return sql.join(' ');
    }

    private PrimaryKeySql(): string {
        if (!this.primaryKey) return '';
        return `PRIMARY KEY (${this.name})`;
    }

    private DefaultSql(): string {
        if (!this.defaultValue) return '';
        return `DEFAULT ${this.defaultValue}`;
    }

    private UniqueSql(): string {
        if (!this.unique) return '';
        return 'UNIQUE';
    }

    private AutoIncrementSql(): string {
        if (!this.autoIncrement) return '';
        return 'AUTO_INCREMENT';
    }

    private TypeSql(): string {
        if (!this.type) return '';
        return this.length ? `${this.type.toString()}(${this.length.toString()})` : this.type.toString();
    }

    private IsNullSql(): string {
        if (this.isNullable) return '';
        return 'NOT NULL';
    }

    private ForeignKeySql(): string {
        if (!this.foreignKey) return ``;
        return `FOREIGN KEY(fk_${this.foreignKey.tableName}_${this.foreignKey.field}) REFERENCES ${this.foreignKey.tableName} (${this.foreignKey.field})`;
    }
}

enum MysqlFieldTypes {
    TINYINT = 'TINYINT',
    SMALLIN = 'SMALLIN',
    MEDIUMINT = 'MEDIUMINT',
    INT = 'INT',
    BIGINT = 'BIGINT',
    DECIMAL = 'DECIMAL',
    FLOAT = 'FLOAT',
    DOUBLE = 'DOUBLE',
    BIT = 'BIT',
    CHAR = 'CHAR',
    VARCHAR = 'VARCHAR',
    BINARY = 'BINARY',
    VARBINARY = 'VARBINARY',
    TINYBLOB = 'TINYBLOB',
    BLOB = 'BLOB',
    MEDIUMBLOB = 'MEDIUMBLOB',
    LONGBLOB = 'LONGBLOB',
    TINYTEXT = 'TINYTEXT',
    TEXT = 'TEXT',
    LONGTEXT = 'LONGTEXT',
    MEDIUMTEXT = 'MEDIUMTEXT',
    ENUM = 'ENUM',
    SET = 'SET',
    DATE = 'DATE',
    TIME = 'TIME',
    DATETIME = 'DATETIME',
    TIMESTAMP = 'TIMESTAMP',
    YEAR = 'YEAR',
}

export { MySqlField, MysqlFieldTypes, ForeignKey };
