import { Component } from '@angular/core';

interface Lawyer {
  name: string;
  contact: string;
}

@Component({
  selector: 'app-lawyer-list',
  templateUrl: './lawyer-list.component.html',
  styleUrls: ['./lawyer-list.component.css']
})
export class LawyerListComponent {
  lawyers: Lawyer[] = [
    { name: 'Me Ndoye', contact: 'ndoye@example.com' },
    { name: 'Me Dupont', contact: 'dupont@example.com' }
  ];
}
