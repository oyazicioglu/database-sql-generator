import { IField } from '../IField';
import { ITableBuilder } from '../ITableBuilder';
import { MySqlField } from './MySqlField';

class MySqlTableBuilder implements ITableBuilder {
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    private _fields: IField[];
    public get fields(): IField[] {
        return this._fields;
    }
    public set fields(value: IField[]) {
        this._fields = value;
    }

    private _engine: MysqlEngineTypes = 'InnoDB';
    public get engine(): MysqlEngineTypes {
        return this._engine;
    }
    public set engine(value: MysqlEngineTypes) {
        this._engine = value;
    }

    constructor(name: string, fields: IField[], engine: MysqlEngineTypes = 'InnoDB') {
        this._name = name;
        this._fields = fields;
        this._engine = engine;
    }

    AddField(field: IField) {
        if (!this.fields || this.fields.length === 0) {
            this.fields = [];
        }
        this.fields.push(field);
    }

    RemoveField(field: IField) {
        if (!this.fields || !Array.isArray(this.fields) || this.fields.length === 0) return;
        this.fields = this.fields.filter((f) => f !== field);
    }

    #CreateFields(fields: IField[]) {
        return fields.map((f) => this.#CreateField(f)).join(',');
    }

    #CreateField(field: IField) {
        return field.Build();
    }

    Build() {
        let fieldsSql = this.#CreateFields(this.fields);
        const tableSql = `CREATE TABLE ${this.name} (${fieldsSql}) ENGINE=${this.engine}`;
        return tableSql;
    }
}

type MysqlEngineTypes = 'InnoDB' | 'MyISAM' | 'Memory' | 'CSV' | 'Merge' | 'Archive' | 'Federated' | 'Blackhole' | 'Example';

export { MySqlTableBuilder, MysqlEngineTypes };
