import { AbstractTable } from '../AbstractTable';
import { IField } from '../IField';
import { ITableBuilder } from '../ITableBuilder';
import { MySqlField } from './MySqlField';

class MySqlTableBuilder extends AbstractTable implements ITableBuilder {
    private _engine: MysqlEngineTypes = 'InnoDB';
    public get engine(): MysqlEngineTypes {
        return this._engine;
    }
    public set engine(value: MysqlEngineTypes) {
        this._engine = value;
    }

    constructor(name: string, fields: IField[], engine: MysqlEngineTypes = 'InnoDB') {
        super(name, fields);
        this._engine = engine;
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
