import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { TrackingComponent } from './tracking/tracking.component';
import { MapComponent } from './map/map.component';
import { LawyerListComponent } from './lawyer-list/lawyer-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'properties', component: PropertyListComponent },
  { path: 'property/:id', component: PropertyDetailComponent },
  { path: 'search', component: SearchComponent },
  { path: 'request', component: RequestFormComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'map', component: MapComponent },
  { path: 'lawyers', component: LawyerListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    HomeComponent,
    SearchComponent,
    RequestFormComponent,
    TrackingComponent,
    MapComponent,
    LawyerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
