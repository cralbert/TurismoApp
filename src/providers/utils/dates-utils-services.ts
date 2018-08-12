import { Injectable } from '@angular/core';

@Injectable()
export class DateUtilsProvider {

    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    getDayOfWeek(date: Date) {
        return this.days[date.getDay()];
    }

    getMonth(date: Date) {
        return this.months[date.getMonth()];
    }
}