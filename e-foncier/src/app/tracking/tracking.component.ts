import { Component } from '@angular/core';

interface Dossier {
  id: number;
  status: string;
}

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent {
  dossiers: Dossier[] = [
    { id: 1, status: 'En cours' },
    { id: 2, status: 'Accepté' }
  ];

  updateStatus(dossier: Dossier, status: string) {
    dossier.status = status;
  }
}
