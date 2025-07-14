import { Component } from '@angular/core';

interface Property {
  id: number;
  name: string;
  location: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query = '';
  results: Property[] = [];

  properties: Property[] = [
    { id: 1, name: 'Villa du Lac', location: 'Dakar' },
    { id: 2, name: 'Appartement Centre Ville', location: 'Paris' }
  ];

  search() {
    const q = this.query.toLowerCase();
    this.results = this.properties.filter(p =>
      p.name.toLowerCase().includes(q) || p.id.toString() === this.query
    );
  }
}
