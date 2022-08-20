import { MysqlError, Pool } from 'mysql';
import { Pool as PostgresPool } from 'pg';

interface IDatabaseBuilder {
    Build(pool: Pool | PostgresPool): Promise<Error | undefined>;
    createIfNotExists: boolean;
    name: string;
}

export { IDatabaseBuilder };
