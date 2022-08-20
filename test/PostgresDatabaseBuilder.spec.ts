import { PostgresDatabaseBuilder } from '../src/builders/Postgres/PostgresDatabaseBuilder';

describe('PostgreSQL Database Builder', () => {
    const postgresDatabaseBuilder = new PostgresDatabaseBuilder('b2c', true);

    test('should have name property', () => {
        expect(postgresDatabaseBuilder).toHaveProperty('name');
    });

    test('should have createIfNotExists property', () => {
        expect(postgresDatabaseBuilder).toHaveProperty('createIfNotExists');
    });

    test('database name should be user', () => {
        expect(postgresDatabaseBuilder.name).toBe('b2c');
    });

    test('createIfNotExists property should be true', () => {
        expect(postgresDatabaseBuilder.createIfNotExists).toEqual(true);
    });
});
