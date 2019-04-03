import { Component, OnInit, NgModule } from '@angular/core';
import { MatchingGroupsService } from 'src/app/services/matching-groups/matching-groups.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public matchingGroupSrv: MatchingGroupsService) { }

  selectedUserId:any;
  userName:any;
  newUserName:any;
  dateOfBirth:any;
  users: any = [];

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): any {
    //console.log("veri çağrılıyor");
    return this.matchingGroupSrv.getUsers().subscribe(resp => {
      //console.log("veri geldi");
      this.users = resp;
      if (this.users && this.users.length > 0) {
        this.users[0].selected = true;
        // this.selectedGroupId=this.matchingGroups[0].matchingGroupId;
        this.selectUser(this.users[0].id);
        //console.log(this.matchingGroups[0].matchingGroupId);
      }
    });
  }

  selectUser(id: any): any {
    this.selectedUserId=id;
    this.users.forEach(element => {
      if (element.id == id) {
        element.selected = true;
      } else {
        element.selected = false;
      }
    });
  }

  addUser() {
    let newUser: any = {
      name: this.newUserName,
      birthday: this.dateOfBirth,
    };

    this.matchingGroupSrv.addUser(newUser).subscribe(resp => {
      this.getUsers();
    });
  }

  removeUser(id: any) {
    this.matchingGroupSrv.removeUser(id).subscribe(
      ()=>this.getUsers(),
      (err)=>console.log(err)
    );
     
  }

}
