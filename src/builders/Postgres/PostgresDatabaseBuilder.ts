import { Pool } from 'pg';
import { AbstractDatabase } from '../AbstractDatabase';
import { IDatabaseBuilder } from '../IDatabaseBuilder';

class PostgresDatabaseBuilder extends AbstractDatabase implements IDatabaseBuilder {
    constructor(name: string, createIfNotExists: boolean = true) {
        super(name, createIfNotExists);
    }

    Build(pool: Pool): Promise<Error | undefined> {
        const sqlArray = [`CREATE DATABASE ${this.name}`, this.createIfNotExists && 'IF NOT EXISTS'];
        return new Promise((resolve, reject) => {
            pool.query(sqlArray.join(' '), (err: Error) => {
                if (err) return resolve(err);
                return resolve(undefined);
            });
        });
    }
}

export { PostgresDatabaseBuilder };
