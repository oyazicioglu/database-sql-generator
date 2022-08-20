import { IField } from './IField';

class AbstractTable {
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    private _fields: IField[];
    public get fields(): IField[] {
        return this._fields;
    }
    public set fields(value: IField[]) {
        this._fields = value;
    }

    constructor(name: string, fields: IField[]) {
        this._name = name;
        this._fields = fields;
    }

    AddField(field: IField) {
        if (!this.fields || this.fields.length === 0) {
            this.fields = [];
        }
        this.fields.push(field);
    }

    RemoveField(field: IField) {
        if (!this.fields || !Array.isArray(this.fields) || this.fields.length === 0) return;
        this.fields = this.fields.filter((f) => f !== field);
    }
}

export { AbstractTable };
