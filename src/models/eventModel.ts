export class EventModel {
    constructor(
        public title: string,
        public date: Date,
        public description: string,
        public icon: string
    ) {}

    static fromJson(data:any){
        if(!data.name || !data.id){
            throw(new Error("Invalid argument: argument structure do not match with model"));
        }

        return new EventModel(data.title, data.date, data.description, data.icon);
    }
}