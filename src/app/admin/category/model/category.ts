import { v4 as uuidv4 } from 'uuid';
import { Deserializable } from './deserializable';

export class Category implements Deserializable {
    categoryId!: string;
    label!: string;
    isActive !: boolean;
    description !: string;
    createdDate !: string;
    updatedDate !: string;
    imgUrl !: string;
    type !: CategoryType;


    setNewCategory() {
        this.categoryId = uuidv4();
        this.createdDate = ((new Date()).getTime()).toString();
        this.updatedDate = ((new Date()).getTime()).toString();
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

}
export enum CategoryType{
    Income="Income",
    Expense="Expense",
    Debtor="Debtor"
}


