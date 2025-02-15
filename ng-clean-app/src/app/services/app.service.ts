import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {City} from "../Models/Interfaces/City";
import {GarbageZone} from "../Models/Interfaces/GarbageZone";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) {
  }

  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(`/api/cities`);
  }

  createGarbageZone(garbageZone: GarbageZone): Observable<any> {
    return this.httpClient.post<any>(`/api/garbage-zones/create`, garbageZone);
  }

  uploadImage(uploadImageData): Observable<any> {
    return this.httpClient.post('api/images/upload', uploadImageData);
  }

  getImageById(id: number): Observable<any> {
    return this.httpClient.get(`api/images/${id}`);
  }

  getImageByName(imageName: string): Observable<any> {
    return this.httpClient.get(`api/images/${imageName}`);
  }

  getImageForGarbageZone(id: number): Observable<any> {
    return this.httpClient.get(`api/images/garbage-zone/${id}`)
  }

  getGarbageZones(): Observable<any> {
    return this.httpClient.get<any>(`api/garbage-zones`);
  }

  findGarbageZone(id: number): Observable<any> {
    return this.httpClient.get<any>(`api/garbage-zones/${id}`);
  }
}
