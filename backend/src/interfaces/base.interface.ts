class BaseEntity{
    id: string|undefined;
    createdAt:Date|undefined;
    updatedAt:Date|undefined;

    constructor()
    constructor(id: string,createdAt:Date,updatedAt:Date)
    constructor(id?: string,createdAt?:Date,updatedAt?:Date){
        if (id) this.id=id
        if (createdAt) this.createdAt=createdAt
        if (updatedAt) this.updatedAt=updatedAt
    }
}
export default BaseEntity;