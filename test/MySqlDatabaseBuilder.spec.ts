import { MySqlDatabaseBuilder } from '../src/builders/MySql/MysqlDatabaseBuilder';

describe('Mysql Database Builder', () => {
    const mysqlDatabaseBuilder = new MySqlDatabaseBuilder('user', true);

    it('should have name property', () => {
        expect(mysqlDatabaseBuilder).toHaveProperty('name');
    });

    it('should have createIfNotExists property', () => {
        expect(mysqlDatabaseBuilder).toHaveProperty('createIfNotExists');
    });

    it('database name should be user', () => {
        expect(mysqlDatabaseBuilder.name).toBe('user');
    });

    it('createIfNotExists property should be true', () => {
        expect(mysqlDatabaseBuilder.createIfNotExists).toEqual(true);
    });
});
