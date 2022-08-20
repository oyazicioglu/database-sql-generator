import { AbstractTable } from '../AbstractTable';
import { IField } from '../IField';
import { ITableBuilder } from '../ITableBuilder';

class PostgresTableBuilder extends AbstractTable implements ITableBuilder {
    constructor(name: string, fields: IField[]) {
        super(name, fields);
    }

    Build(): string {
        throw new Error('Method not implemented.');
    }
}

export { PostgresTableBuilder };
