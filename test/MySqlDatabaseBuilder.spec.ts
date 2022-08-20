import { MySqlDatabaseBuilder } from '../src/builders/MySql/MySqlDatabaseBuilder';
import dotenv from 'dotenv';

dotenv.config();

describe('Mysql Database Builder', () => {
    const mysqlDatabaseBuilder = new MySqlDatabaseBuilder('B2C', true);

    test('should have name property', () => {
        expect(mysqlDatabaseBuilder).toHaveProperty('name');
    });

    test('should have createIfNotExists property', () => {
        expect(mysqlDatabaseBuilder).toHaveProperty('createIfNotExists');
    });

    test('database name should be user', () => {
        expect(mysqlDatabaseBuilder.name).toBe('B2C');
    });

    test('createIfNotExists property should be true', () => {
        expect(mysqlDatabaseBuilder.createIfNotExists).toEqual(true);
    });
});
