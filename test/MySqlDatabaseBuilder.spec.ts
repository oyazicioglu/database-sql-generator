import { createPool } from 'mysql';
import { MySqlDatabaseBuilder } from '../src/builders/MySql/MySqlDatabaseBuilder';
import { default as Config } from '../src/Configs/MySql.Config.json';

describe('Mysql Database Builder', () => {
    const mysqlDatabaseBuilder = new MySqlDatabaseBuilder('b2b', true);
    const mysqlPool = createPool({
        host: Config.host,
        user: Config.user,
        password: Config.user,
        database: Config.database,
    });

    test('should have name property', () => {
        expect(mysqlDatabaseBuilder).toHaveProperty('name');
    });

    test('should have createIfNotExists property', () => {
        expect(mysqlDatabaseBuilder).toHaveProperty('createIfNotExists');
    });

    test('database name should be user', () => {
        expect(mysqlDatabaseBuilder.name).toBe('b2b');
    });

    test('createIfNotExists property should be true', () => {
        expect(mysqlDatabaseBuilder.createIfNotExists).toEqual(true);
    });

    test('shoud create database without error', async () => {
        const result = await mysqlDatabaseBuilder.Build(mysqlPool);
        console.log(result);
    });
});
