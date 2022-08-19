interface IDatabaseBuilder {
    Build(): string;
    createIfNotExists: boolean;
    name: string;
}

export { IDatabaseBuilder };
