import { Pool, QueryResult } from 'pg';
import { AbstractDatabase } from '../AbstractDatabase';
import { IDatabaseBuilder } from '../IDatabaseBuilder';

class PostgresDatabaseBuilder extends AbstractDatabase implements IDatabaseBuilder {
    constructor(name: string, createIfNotExists: boolean = true) {
        super(name, createIfNotExists);
        this.name = name;
        this.createIfNotExists = createIfNotExists;
    }

    Build(pool: Pool): Promise<Error | QueryResult | undefined> {
        return new Promise((resolve, reject) => {
            pool.query(`CREATE DATABASE ${this.name}`, (err: Error, result: QueryResult) => {
                if (err) return reject(err);
                return resolve(result);
            });
        });
    }
}

export { PostgresDatabaseBuilder };
