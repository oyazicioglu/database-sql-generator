import { MysqlError, Pool } from 'mysql';
import { AbstractDatabase } from '../AbstractDatabase';
import { IDatabaseBuilder } from '../IDatabaseBuilder';

class MySqlDatabaseBuilder extends AbstractDatabase implements IDatabaseBuilder {
    constructor(name: string, createIfNotExists: boolean = true) {
        super(name, createIfNotExists);
    }

    async Build(pool: Pool): Promise<Error | undefined> {
        const sqlArray = [`CREATE DATABASE ${this.name}`, this.createIfNotExists && 'IF NOT EXISTS'];
        return new Promise((resolve, reject) => {
            pool.query(sqlArray.join(' '), (err: MysqlError) => {
                if (err) return resolve(new Error(`${err.message} - ${err.sqlMessage}`));
                return resolve(undefined);
            });
        });
    }
}

export { MySqlDatabaseBuilder };
