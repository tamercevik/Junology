import { Component, OnInit } from "@angular/core";
import { MatchingGroup } from "src/app/models/matching-Group";
import { MatchingGroupsService } from 'src/app/services/matching-groups/matching-groups.service';

@Component({
  selector: "app-matchingGroups",
  templateUrl: "./matchingGroups.component.html",
  styleUrls: ["./matchingGroups.component.css"]
})
export class MatchingGroupsComponent implements OnInit {
  constructor(public matchingGroupsSrv:MatchingGroupsService) {

  }

  matchingGroups: any = [];

  ngOnInit() {
    this.getMatchingGroups();
  }

  getMatchingGroups() {
      console.log("veri çağrılıyor");
      return this.matchingGroupsSrv.getAll().subscribe(resp =>{
      console.log("veri geldi");
      this.matchingGroups = resp;
      if (this.matchingGroups && this.matchingGroups.length > 0) {
        this.matchingGroups[0].selected = true;
      }
    });
  }

  selectItem(id: any) {
    console.log("selected matching groupId: "+id  );
    this.matchingGroups.forEach(element => {
      if (element.matchingGroupId == id) {
        element.selected = true;
      } else {
        element.selected = false;
      }
    });
  }
}
