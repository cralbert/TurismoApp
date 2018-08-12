import { Injectable } from '@angular/core';
import { EventModel } from '../../models/eventModel';

@Injectable()
export class EventServiceProvider {

  private events: EventModel[] = [];

  constructor() {
    this.events = [
      new EventModel('Fiesta 1', new Date(2018, 7, 1), "Descripcion fiesta 1","bar-icon.png"),
      new EventModel('Fiesta 2', new Date(2018, 6, 10), "Descripcion fiesta 2","disco-icon.png"),
      new EventModel('Fiesta 3', new Date(2018, 7, 4), "Descripcion fiesta 3","bar-icon.png"),
      new EventModel('Fiesta 4', new Date(2018, 6, 1), "Descripcion fiesta 4","disco-icon.png"),
      new EventModel('Fiesta 5', new Date(2018, 4, 1), "Descripcion fiesta 5","bar-icon.png"),
      new EventModel('Fiesta 6', new Date(2018, 7, 1), "Descripcion fiesta 6","disco-icon.png"),
      new EventModel('Fiesta 7', new Date(2018, 6, 1), "Descripcion fiesta 7","bar-icon.png")
    ];
  }

  getAllEvents() {
    return this.events.sort(function(event1, event2) { 
      if (event1.date < event2.date) return -1;
      if (event1.date > event2.date) return 1;
      return 0;
    });
  }

  getEventsFromDate(date: Date) {
    return this.events.filter(event => {
      return event.date >= date;
    }).sort(function(event1, event2) {
      if (event1.date < event2.date) return -1;
      if (event1.date > event2.date) return 1;
      return 0;
    });
  }
}