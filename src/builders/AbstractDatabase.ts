class AbstractDatabase {
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    private _createIfNotExists: boolean;
    public get createIfNotExists(): boolean {
        return this._createIfNotExists;
    }
    public set createIfNotExists(value: boolean) {
        this._createIfNotExists = value;
    }

    constructor(name: string, createIfNotExists: boolean = true) {
        this._name = name;
        this._createIfNotExists = createIfNotExists;
    }
}

export { AbstractDatabase };
