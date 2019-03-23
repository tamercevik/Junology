import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchingGroupsComponent } from './components/matchingGroups/matchingGroups.component';
import { RouterModule } from '@angular/router';
import { AddGroupComponent } from './components/addGroup/addGroup.component';
import { HomeComponent } from './components/Home/Home.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchingGroupsComponent,
    AddGroupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path:"",component:AppComponent},
        {path:"components/addGroup",component:AddGroupComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
