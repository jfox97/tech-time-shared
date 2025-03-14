export class SampleDataObject {
    public id: number;
    public name: string;
    public isActive: boolean;
    public createdAt: Date;

    constructor(id: number, name: string, isActive: boolean, createdAt: Date) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
        this.createdAt = createdAt;
    }
}