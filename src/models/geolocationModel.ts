export class GeolocationModel {
    constructor(
        public latitude: number,
        public longitude: number,
        public zoom: number = 10,
        public title: string = "",
        public icon: string = "blue"
    ) {}

    static fromJson(data:any){
        if(!data.latitude || !data.longitude){
            throw(new Error("Invalid argument: argument structure do not match with model"));
        }

        return new GeolocationModel(data.latitude, data.longitude, data.zoom, data.title, data.icon);
    }
}