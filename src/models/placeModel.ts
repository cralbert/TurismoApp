import { GeolocationModel } from "./GeolocationModel";

export class PlaceModel {
    constructor(
        public name: string,
        public icon: string,
        public description: string,
        public categories: string[],
        public geolocation: GeolocationModel
    ) {}

    static fromJson(data:any){
        if(!data.name || !data.id){
            throw(new Error("Invalid argument: argument structure do not match with model"));
        }

        return new PlaceModel(data.name, data.icon, data.description, data.categories, data.geolocation);
    }
}