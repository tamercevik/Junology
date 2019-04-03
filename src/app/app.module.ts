import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/Home/Home.component';
import { FormsModule } from '@angular/forms';
import { MatchingGroupsService } from './services/matching-groups/matching-groups.service';
import { UserComponent } from './components/user/user.component';


@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,

    RouterModule.forRoot(
      [
        {path:"",component:AppComponent},
        {path:"components/user",component:UserComponent}
      ]
    )
  ],
  providers: [MatchingGroupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
