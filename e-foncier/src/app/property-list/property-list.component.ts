import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Property {
  id: number;
  name: string;
  location: string;
}

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  properties: Property[] = [
    { id: 1, name: 'Villa du Lac', location: 'Dakar' },
    { id: 2, name: 'Appartement Centre Ville', location: 'Paris' }
  ];

  constructor(private router: Router) {}

  viewDetails(property: Property) {
    this.router.navigate(['/property', property.id]);
  }
}
