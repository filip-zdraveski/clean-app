import { Component, OnInit } from '@angular/core';
import {City} from "../../../Models/Interfaces/City";
import {AppService} from "../../../services/app.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent implements OnInit {

  cities: City[] = [];

  form: FormGroup;

  selectedFile: File;
  retrievedImage: any;
  uploaded: boolean;

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
      description: new FormControl(''),
      imageId: new FormControl('')
    });
  }

  onSubmit() {
    this.service.createGarbageZone(this.form.getRawValue())
      .subscribe(() => {
        // TODO: Check why this isn't working
        return this.router.navigateByUrl('../../', { relativeTo: this.route });
      });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    this.service.uploadImage(uploadImageData)
      .subscribe(response => {
        this.uploaded = true;
        this.form.patchValue({ imageId: response.id });
      });
  }

  // TODO: Move this to the file where we want to display the pictures
  getImage() {
    // TODO: This is hardcoded for testing purposes, change it
    this.service.getImage("slika.jpeg")
      .subscribe(
        res => {
          this.retrievedImage = 'data:image/jpeg;base64,' + res.bytes;
        }
      );
  }
}
