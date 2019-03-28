import { Component, OnInit } from "@angular/core";
import { MatchingGroupsService } from 'src/app/services/matching-groups/matching-groups.service';
import { CONST_BaseServiceURL } from 'src/app/ServiceConstants';

@Component({
  selector: "app-Home",
  templateUrl: "./Home.component.html",
  styleUrls: ["./Home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(public matchingGroupSrv: MatchingGroupsService) { }

  matchingGroups: any = [];
  matchingRules: any = [];
  planets: any = [];
  groupName: string;
  angle: number;
  tolerance: number;

  selectedFirstPlanetId: any;
  selectedSecondPlanetId: any;

  ngOnInit() {
    this.getMatchingGroups();
    this.getPlanets();
  }

  addGroup() {

    let groupObj: any = {
      "GroupName": this.groupName,
      "Description": this.groupName
    };

    this.matchingGroupSrv.create(groupObj).subscribe(resp => {
      this.getMatchingGroups();
    })
  }
  getPlanetNameById(id: any) {
    // console.log("planet : " + JSON.stringify(this.planets));
    let desc: string;
    this.planets.forEach(element => {
      if (element.id == id) {
        desc = element.description;
      }
    });
    return desc;
  }
  getPlanetNameBySecondyId(id: any) {
    let desc: string;
    console.log("id :" + id + "planets : " + JSON.stringify(this.planets));
    this.planets.forEach(element => {
      if (element.id == id) {
        desc = element.description;
      }
    });
    return desc;
  }

  getmatchingGroupNameById(id: any) {
    let desc: string;
    this.matchingGroups.forEach(element => {
      if (element.matchingGroupId == id) {
        desc = element.description;
      }
    });
    return desc;
  }

  addMatchingRule() {

    console.log(this.selectedGroupId)
    console.log(this.selectedFirstPlanetId)
    console.log(this.selectedSecondPlanetId)
    console.log(this.angle)
    console.log(this.tolerance)

    let newMatchingRule: any = {
      MatchingGroupId: this.selectedGroupId,
      PrimaryPlanetId: this.selectedFirstPlanetId,
      SecondaryPlanetId: this.selectedSecondPlanetId,
      Angle: this.angle,
      Tolerance: this.tolerance
    }

    this.matchingGroupSrv.addMatchingRule(newMatchingRule).subscribe(resp => {
      this.getMatchingRules();
    })

  }

  getMatchingGroups() {
    console.log("veri çağrılıyor");
    return this.matchingGroupSrv.getAll().subscribe(resp => {
      console.log("veri geldi");
      this.matchingGroups = resp;
      if (this.matchingGroups && this.matchingGroups.length > 0) {
        // this.matchingGroups[0].selected = true;
        // this.selectedGroupId=this.matchingGroups[0].matchingGroupId;
        this.selectItem(this.matchingGroups[0].matchingGroupId);
        console.log(this.matchingGroups[0].matchingGroupId)
      }
    });
  }

  selectedGroupId: any;
  getMatchingRules() {
    return this.matchingGroupSrv.getMatchingRules(this.selectedGroupId).subscribe(resp => {
      this.matchingRules = resp;
    })
  }

  getPlanets() {
    return this.matchingGroupSrv.getPlanets().subscribe(resp => {
      this.planets = resp;
    })
  }

  selectItem(id: any) {
    this.selectedGroupId = id;
    this.getMatchingRules();
    console.log("selected matching groupId: " + id);
    this.matchingGroups.forEach(element => {
      if (element.matchingGroupId == id) {
        element.selected = true;
      } else {
        element.selected = false;
      }
    });
  }

}
