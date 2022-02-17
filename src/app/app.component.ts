import { Component, OnInit } from '@angular/core';
import { Property } from './models/Property';
import { PropertyService } from './services/Property.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  Plist: Property[] = [];
  PropertyForm: boolean = false;
  isNewProperty: boolean = false;
  newProperty: any = {};
  
  constructor(private PropertyService: PropertyService) { }

  ngOnInit() {
    this.Plist = this.getProperty();
  }

  getProperty(): Property[] {
    return this.PropertyService.getPropertyFromData();
  }

  showAddPropertyForm() {
    // resets form if edited Property
    if (this.Plist.length) {
      this.newProperty = {};
    }
    this.PropertyForm = true;
    this.isNewProperty = true;

  }

  saveProperty(Property: Property) {
    if (this.isNewProperty) {
      // add a new Property
      this.PropertyService.addProperty(Property);
    }
    this.PropertyForm = false;
  }


  removeProperty(Property: Property) {
    this.PropertyService.deleteProperty(Property);
  }

  cancelNewProperty() {
    this.newProperty = {};
    this.PropertyForm = false;
  }

}

