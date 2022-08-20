import { Pool } from 'mysql';
import { Pool as PostgresPool, QueryResult } from 'pg';

interface IDatabaseBuilder {
    Build(pool: Pool | PostgresPool): Promise<Error | undefined | QueryResult>;
    createIfNotExists: boolean;
    name: string;
}

export { IDatabaseBuilder };
