import { MySqlField, MysqlFieldTypes } from '../src/builders/MySql/MySqlField';
import { MySqlTableBuilder } from '../src/builders/MySql/MySqlTableBuilder';

describe('Table Builder', () => {
    const tableBuilder = new MySqlTableBuilder('user', []);
    const field: MySqlField = new MySqlField('id', MysqlFieldTypes.INT);
    field.AutoIncrement(true).IsNullable(false).Unique(true).PrimaryKey(true).Type(MysqlFieldTypes.INT).Length(6).ForeignKey({
        field: 'id',
        tableName: 'product',
    });

    test('should have fields property', () => {
        expect(tableBuilder).toHaveProperty('fields');
    });

    test('should have fields property', () => {
        expect(tableBuilder).toHaveProperty('name');
    });

    test('table name should be user', () => {
        expect(tableBuilder.name).toEqual('user');
    });

    test('fields should have at least one element', () => {
        tableBuilder.AddField(field);
        console.log(tableBuilder.Build());

        expect(tableBuilder.fields.length).toBeGreaterThanOrEqual(1);
    });

    test('first field should have same properties with mock field', () => {
        expect(tableBuilder.fields[0].name).toBe('id');
        expect(tableBuilder.fields[0].autoIncrement).toBe(true);
        expect(tableBuilder.fields[0].isNullable).toBe(false);
        expect(tableBuilder.fields[0].primaryKey).toBe(true);
        expect(tableBuilder.fields[0].unique).toBe(true);
        expect(tableBuilder.fields[0].type).toBe(MysqlFieldTypes.INT);
        expect(tableBuilder.fields[0].length).toBe(6);
        expect(tableBuilder.fields[0].foreignKey?.field).toBe('id');
        expect(tableBuilder.fields[0].foreignKey?.tableName).toBe('product');
    });

    test('table should have one and only one primary key', () => {
        const primaryKey = tableBuilder.fields.filter((f) => f.primaryKey === true);
        expect(primaryKey.length).toBe(1);
        expect(primaryKey).toBeTruthy();
    });

    test('table name should be user', () => {
        tableBuilder.name = 'user';
        expect(tableBuilder.name).toBe('user');
    });
});

export {};
