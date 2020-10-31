import { Component, OnInit } from '@angular/core';
import {City} from "../../../Models/Interfaces/City";
import {AppService} from "../../../services/app.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GarbageZone} from "../../../Models/Interfaces/GarbageZone";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent implements OnInit {

  cities: City[] = [];

  form: FormGroup;

  constructor(private service: AppService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getCities().subscribe(cities => this.cities = cities);

    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      cityId: new FormControl('', Validators.required),
      coordinates: new FormControl(''),
      description: new FormControl('')
    });
  }

  onSubmit() {
    debugger;
    this.service.createGarbageZone(this.form.getRawValue())
      .subscribe(() => {
        // TODO: Check why this isn't working
        return this.router.navigateByUrl('../../', { relativeTo: this.route });
      });
  }
}
