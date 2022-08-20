import { Pool } from 'pg';
import { AbstractDatabase } from '../AbstractDatabase';
import { IDatabaseBuilder } from '../IDatabaseBuilder';

class PostgresDatabaseBuilder extends AbstractDatabase implements IDatabaseBuilder {
    constructor(name: string, createIfNotExists: boolean = true) {
        super(name, createIfNotExists);
    }

    Build(pool: Pool): Promise<Error | undefined> {
        throw new Error('Method not implemented.');
    }
}

export { PostgresDatabaseBuilder };
