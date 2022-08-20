import type { IField } from '../src/builders/IField';
import { MySqlField, MysqlFieldTypes } from '../src/builders/MySql/MySqlField';

describe('MysqlField Class Test', () => {
    let field: IField = new MySqlField('age', MysqlFieldTypes.DATE);

    test('should have name property', () => {
        expect(field).toHaveProperty('name');
    });

    test('should have primaryKey property', () => {
        expect(field).toHaveProperty('primaryKey');
    });

    test('should have isNullable property', () => {
        expect(field).toHaveProperty('isNullable');
    });

    test('should have autoIncrement property', () => {
        expect(field).toHaveProperty('autoIncrement');
    });

    test('should have unique property', () => {
        expect(field).toHaveProperty('unique');
    });

    test('should have type property', () => {
        expect(field).toHaveProperty('type');
    });

    test('should have length property', () => {
        expect(field).toHaveProperty('length');
    });

    test('should have defaultValue property', () => {
        expect(field).toHaveProperty('defaultValue');
    });

    test('should have foreignKey property', () => {
        expect(field).toHaveProperty('foreignKey');
    });

    test('AutoIncrement method should return IField', () => {
        expect(field.AutoIncrement(true) instanceof MySqlField).toBe(true);
    });

    test('autoIncrement property should be true', () => {
        expect(field.autoIncrement).toBe(true);
    });

    test('Default method should return IField', () => {
        expect(field.Default('01/01/2010') instanceof MySqlField).toBe(true);
    });

    test('defaultValue property should be 01/01/2010', () => {
        expect(field.defaultValue).toBe('01/01/2010');
    });

    test('Name method should return IField', () => {
        expect(field.Name('id') instanceof MySqlField).toBe(true);
    });

    test('name property should be id', () => {
        expect(field.name).toBe('id');
    });

    test('Type method should return IField', () => {
        expect(field.Type(MysqlFieldTypes.BIGINT) instanceof MySqlField).toBe(true);
    });

    test('type property should be BIGINT', () => {
        expect(field.type).toBe('BIGINT');
    });

    test('Length method should return IField', () => {
        expect(field.Length(6) instanceof MySqlField).toBe(true);
    });

    test('length property should be 6', () => {
        expect(field.length).toBe(6);
    });

    test('PrimaryKey method should return IField', () => {
        expect(field.PrimaryKey(true) instanceof MySqlField).toBe(true);
    });

    test('primaryKey property should be true', () => {
        expect(field.primaryKey).toBe(true);
    });

    test('Unique method should return IField', () => {
        expect(field.Unique(true) instanceof MySqlField).toBe(true);
    });

    test('unique property should be true', () => {
        expect(field.unique).toBe(true);
    });

    test('IsNullable method should return IField', () => {
        expect(field.IsNullable(false) instanceof MySqlField).toBe(true);
    });

    test('isNullable property should be false', () => {
        expect(field.isNullable).toBe(false);
    });

    test('ForeignKey method should return IField', () => {
        expect(
            field.ForeignKey({
                field: 'id',
                tableName: 'product',
            }) instanceof MySqlField
        ).toBe(true);
    });

    test('foreignKey.field property should be id', () => {
        expect(field.foreignKey?.field).toBe('id');
    });

    test('foreignKey.tableName property should be product', () => {
        expect(field.foreignKey?.tableName).toBe('product');
    });

    test('Build should not be null and be type of string', () => {
        const sql = field.Build();
        expect(sql).not.toBeNull();
    });

    test('Build should be type of string', () => {
        const sql = field.Build();
        expect(typeof sql).toBe('string');
    });
});
