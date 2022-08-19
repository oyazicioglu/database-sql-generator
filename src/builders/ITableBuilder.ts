import { IField } from './IField';

interface ITableBuilder {
    Build(): string;
    AddField(field: IField): void;
    RemoveField(field: IField): void;
}

export { ITableBuilder };
