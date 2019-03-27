import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchingGroupsComponent } from './components/matchingGroups/matchingGroups.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/Home/Home.component';
import { AddMatchingGroupComponent } from './components/addMatchingGroup/addMatchingGroup.component';
import { MatchingRulesComponent } from './components/matchingRules/matchingRules.component';
import { AddMatchingRuleComponent } from './components/addMatchingRule/addMatchingRule.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchingGroupsComponent,
    HomeComponent,
    AddMatchingGroupComponent,
    MatchingRulesComponent,
    AddMatchingRuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path:"",component:AppComponent},
        {path:"components/addGroup",component:HomeComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
