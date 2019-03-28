import { Component, OnInit } from "@angular/core";
import { MatchingGroupsService } from 'src/app/services/matching-groups/matching-groups.service';

@Component({
  selector: "app-addMatchingGroup",
  templateUrl: "./addMatchingGroup.component.html",
  styleUrls: ["./addMatchingGroup.component.css"]
})
export class AddMatchingGroupComponent implements OnInit {
  constructor(public matchingGroupSrv:MatchingGroupsService) { }

  groupName: string;

  ngOnInit() { }

  addGroup() {

    let groupObj: any = {
      "GroupName": this.groupName,
      "Description": this.groupName
    };

    this.matchingGroupSrv.create(groupObj).subscribe(resp=>{
      alert("iş tamam");
    })

  }

}

