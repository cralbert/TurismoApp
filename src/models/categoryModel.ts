export class CategoryModel {
    constructor(
        public code: string,
        public title: string,
        public icon: string
    ) {}

    static fromJson(data:any){
        if(!data.name || !data.id){
            throw(new Error("Invalid argument: argument structure do not match with model"));
        }

        return new CategoryModel(data.code, data.title, data.icon);
    }
}