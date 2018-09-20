import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventServiceProvider } from '../../providers/event-services/event-service';
import { DateUtilsProvider } from '../../providers/utils/dates-utils-services';
import { EventModel } from '../../models/eventModel';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})

export class EventsPage {

  public viewModel: string = "list";
  listEvents: EventModel[];
  currentEvents;

  constructor(public navCtrl: NavController,
              public eventService: EventServiceProvider,
            public dateServices: DateUtilsProvider) {
  }
  
  events() {
    this.listEvents = this.eventService.getEventsFromDate(new Date());
    return this.listEvents;
  }

  title() {
    return "Calendario de Eventos";
  }

  goToEvent(event: EventModel) {

  }

  showCalendar() {
    this.currentEvents = [
      {
        year: 2018,
        month: 8,
        date: 25
      },
      {
        year: 2018,
        month: 8,
        date: 26
      }
    ];
  }

  getDayOfWeek(date: Date) {
    return this.dateServices.getDayOfWeek(date);
  }

  getMonth(date: Date) {
    return this.dateServices.getMonth(date);
  }

}
