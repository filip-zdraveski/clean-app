import {Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import {AppService} from "../../services/app.service";
import {City} from "../../Models/Interfaces/City";
import {GarbageZone} from "../../Models/Interfaces/GarbageZone";
import {ActivatedRoute, Router} from "@angular/router";

declare var H: any;


function logEvent(str: string) {
  let coordinatesLabel = document.getElementById("coordinatesLabel");
  coordinatesLabel.innerText = "Координати (на мапата селектиравте " + str + ")";
}

@Component({
  selector: 'here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.scss']
})
export class HereMapComponent implements OnInit {

  @ViewChild("map")
  public mapElement: ElementRef;

  @Input()
  private _apikey: any;

  @Input()
  public lat: any;

  @Input()
  public lng: any;

  @Input()
  public width: any;

  @Input()
  public height: any;

  @Output() public clickEvent = new EventEmitter<string>();

  private group: any;
  private cities: City[] = [];
  private garbageZones: GarbageZone[] = [];

  public constructor(private service: AppService,
                     private route: ActivatedRoute,
                     private router: Router) { }

  public ngOnInit() {
   }

  public ngAfterViewInit() {
    let platform = new H.service.Platform({
      "apikey": this._apikey
    });
    let defaultLayers = platform.createDefaultLayers();
    let map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.vector.normal.map,
      {
        zoom: 9,
        center: { lat: this.lat, lng: this.lng }
      }
    );
    let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    let ui = H.ui.UI.createDefault(map, defaultLayers);

    // this.addMarkersToMap(map);
    this.addInfoBubble(map, ui);
    this.setUpClickListener(map);
  }

  addMarkerToGroup(group, coordinate, html) {
    let marker = new H.map.Marker(coordinate);
    // add custom data to the marker
    marker.setData(html);
    group.addObject(marker);
  }

  addInfoBubble(map, ui) {
    let group = new H.map.Group();

    map.addObject(group);

    // add 'tap' event listener, that opens info bubble, to the group
    group.addEventListener('tap', function (evt) {
      // event target is the marker itself, group is a parent event target
      // for all objects that it contains
      let bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
        // read custom data
        content: evt.target.getData()
      });
      // show info bubble
      ui.addBubble(bubble);
    }, false);

    this.group = group;

    // Not enough time to get this data directly from database, but it
    // does exist there.
    this.addMarkerToGroup(group, {lat:41.951574, lng:21.481201},
      '<div>Град: Скопје</a>' +
      '</div><div>Опис: Близу населба Пинтија</div>' +
      '<a href="http://localhost:4200/garbage-zones/1">Прегледај</a>');
    this.addMarkerToGroup(group, {lat:41.744636, lng:21.714039},
      '<div>Град: Велес</a>' +
      '</div><div>Опис: Близу Велес</div>' +
    '<a href="http://localhost:4200/garbage-zones/2">Прегледај</a>');
  }

  // Here's the code for the action below (WIP)
  addMarkersOnMap() {
    if (this.garbageZones.length != 0) {
      this.garbageZones.forEach(it => {
        let coordinates = it.coordinates.split(", ");
        let lat = coordinates[0];
        let long = coordinates[1];
        this.addMarkerToGroup(this.group, {lat:lat, lng:long},
          '<div>Град: ' + this.cities[it.cityId].name +
          '</div><div>Опис: <br>' + it.description + '</div>' +
        '<a href="{{this.route}}/{{it.id}}">Прегледај</a>')
      });
    }

  }

  setUpClickListener(map) {
    // Attach an event listener to map display
    // obtain the coordinates and display in an alert box.
    map.addEventListener('tap', function (evt) {
      var coord = map.screenToGeo(evt.currentPointer.viewportX,
        evt.currentPointer.viewportY);
      logEvent(Math.abs(coord.lat.toFixed(4)) +
        ', ' + Math.abs(coord.lng.toFixed(4)));
    });
  }

}
