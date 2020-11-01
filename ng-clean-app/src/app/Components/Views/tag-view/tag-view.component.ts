import { Component, OnInit } from '@angular/core';
import {AppService} from "../../../services/app.service";
import {ActivatedRoute, Router} from "@angular/router";
import {City} from "../../../Models/Interfaces/City";

@Component({
  selector: 'app-tag-view',
  templateUrl: './tag-view.component.html',
  styleUrls: ['./tag-view.component.scss']
})
export class TagViewComponent implements OnInit {

  private garbageZoneId: number;

  garbageZone: any;

  cities: City[] = [];

  retrievedImage: any;

  constructor(private service: AppService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.garbageZoneId = +this.route.snapshot.paramMap.get('id');
      if (this.garbageZoneId) {
        this.service.findGarbageZone(this.garbageZoneId)
          .subscribe(garbageZone => this.garbageZone = garbageZone);
      }
    this.service.getCities().subscribe(cities => this.cities = cities);
    this.service.getImageForGarbageZone(this.garbageZoneId)
      .subscribe(it => this.retrievedImage = 'data:image/jpeg;base64,' + it.bytes);
  }

}
