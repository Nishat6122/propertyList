import { Injectable } from '@angular/core';
import { Property } from '../models/Property';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private Plist: Property[] = [
    {
      id: 1,
      Name: 'Nishat villa',
      Description: 'fifth_floor',
      size: 350
    },
    {
      id: 2,
      Name: 'Noor villa',
      Description: 'second_floor',
      size: 250
    },
    {
      id: 3,
      Name: 'nooh villa',
      Description: '1st_floor',
      size: 650
    }
  ];

  constructor() { }

  getPropertyFromData(): Property[] {
    return this.Plist;
  }

  addProperty(Property: Property) {
    Property.id = this.Plist.length + 1;
    this.Plist.push(Property);

  }
  deleteProperty(Property: Property) {
    this.Plist.splice(this.Plist.indexOf(Property), 1);
  }

}
