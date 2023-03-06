import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photos } from './photos';
import { from, map, Observable } from 'rxjs';
import { reservation } from './reservation';
import { Tables } from './tables';
import { Opens } from './opens';
import { Elements } from './elements';
import { Plats } from './plats';
import { users } from './users';
import { Token } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ROLE: string;




  redirectUrl: any;


  PHP_API_SERVER = "http://127.0.0.1:80";
  base_url: string = "http://127.0.0.1:80";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();




  readImages(): Observable<Photos[]> {
    return this.httpClient.get<Photos[]>(`${this.PHP_API_SERVER}/back-app-food/images.php`);
  }
  deletePhotos(img_id: number) {
    return this.httpClient.delete<Photos>(`${this.PHP_API_SERVER}/back-app-food/delete-foto.php/?img_id=${img_id}`);
  }
  createPhotos(photos: Photos) {
    return this.httpClient.post<Photos>(`${this.PHP_API_SERVER}/back-app-food/insert-img.php`, photos);
  }
  updatePhotos(photos: Photos) {
    return this.httpClient.put<Photos>(`${this.PHP_API_SERVER}/back-app-food/update-foto.php`, photos);
  }
  createReservation(reservation: reservation) {
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/back-app-food/insert-reserv.php`, reservation);
  }

  getNbrReservation(data) {
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/back-app-food/nbrReservation.php`, data);
  }
  getValeurParDefault(data) {
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/back-app-food/getValeur.php`, data);
  }
  readReservation(): Observable<Tables[]> {
    return this.httpClient.get<Tables[]>(`${this.PHP_API_SERVER}/back-app-food/reservation.php`);
  }
  readHoraires(): Observable<Opens[]> {
    return this.httpClient.get<Opens[]>(`${this.PHP_API_SERVER}/back-app-food/horaire.php`);
  }
  updateHoraires(opens: Opens) {
    return this.httpClient.put<Opens>(`${this.PHP_API_SERVER}/back-app-food/update-horaire.php`, opens);
  }
  readElements(): Observable<Elements[]> {
    return this.httpClient.get<Elements[]>(`${this.PHP_API_SERVER}/back-app-food/menu.php`);
  }

  updateMenu(elements: Elements) {
    return this.httpClient.put<Elements>(`${this.PHP_API_SERVER}/back-app-food/menu.php`, elements);
  }
  readCarte(): Observable<Plats[]> {
    return this.httpClient.get<Plats[]>(`${this.PHP_API_SERVER}/back-app-food/carte.php`);
  }
  getData(): Observable<[]> {
    return this.httpClient.get<[]>(`${this.PHP_API_SERVER}/back-app-food/images.php`);
  }
  createMenu(elements: Elements) {
    return this.httpClient.post<Elements>(`${this.PHP_API_SERVER}/back-app-food/insert-menu.php`, elements);
  }
  getMenu() {
    return this.httpClient.get<string[]>(`${this.PHP_API_SERVER}/back-app-food/get-menu.php`);
  }
  createCategorie(plats: Plats) {
    return this.httpClient.post<Plats>(`${this.PHP_API_SERVER}/back-app-food/insert-cart.php`, plats);
  }
  getCategorie() {
    return this.httpClient.get<string[]>(`${this.PHP_API_SERVER}/back-app-food/get-carte.php`);
  }
  registerClient(users: users) {
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/back-app-food/register-admin.php`, users);
  }


  constructor(private httpClient: HttpClient) { }



  public userlogin(email, password) {
    return this.httpClient.post<any>(this.base_url + '/back-app-food/authUser.php', { email, password })
      .pipe(map(users => {

        return users;
      }));
  }
  // token
  setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken() {
    return JSON.parse(localStorage.getItem('token'));
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    return usertoken != null;
  }
  getRole() {
    this.ROLE = localStorage.getItem('ROLE');
    return this.ROLE;
  }


}


