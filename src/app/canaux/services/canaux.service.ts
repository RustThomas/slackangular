import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { canal } from '../models/canal';
import { message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class CanauxService {
  private urlApi: string;
  //works
  public collection$: Observable<canal[]>;

  // #Test
  public collection2$!: BehaviorSubject<canal>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.collection$ = this.httpClient.get<canal[]>(`${this.urlApi}/canaux`);
    //this.currentCanal = new BehaviorSubject<canal>();

    // #Test
    this.collection2$ = new BehaviorSubject<canal>(new canal());
    //this.refreshCollection();

    console.log(this.collection$);
  }

  public getItemById(id: string): Observable<canal> {
    //this.refreshCollection();
    //this.httpClient.get<canal>(`${this.urlApi}/canaux/${id}`).subscribe();

    return this.httpClient.get<canal>(`${this.urlApi}/canaux/${id}`);
  }

  public getMessages(canalId: string): Observable<message[]> {
    //this.httpClient.get<string>(`${this.urlApi}/messages`).subscribe() ;
    // /posts?id=1&id=2
    return this.httpClient.get<message[]>(
      `${this.urlApi}/messages?canalId=${canalId}`
    );
  }

  public addMessage(message: message): Observable<message> {
    return this.httpClient.post<message>(`${this.urlApi}/messages`, message);
  }

  /*
  public refreshCanal(id: string): void {
    this.httpClient
      .get<canal>(`${this.urlApi}/canaux/${id}`)
      .subscribe((canal) => {
        this.currentCanal.next(canal);
      });
  }
  */

  // ?????????????? Erreur

  /*
  public refreshCollection(id: string): void {
    this.httpClient
      .get<canal>(`${this.urlApi}/canaux/${id}`)
      .subscribe((data) => {
        this.collection2$.next(data);
      });
  }
  */

  //refresh

  /*

  public update(order: Order): Observable<Order> {
    console.log(
      `passed id : ${order.id} , passed client name : ${order.client}`
    );
    return this.httpClient.put<Order>(
      `${this.urlApi}/orders/${order.id}`,
      order
    );
  }

  public add(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.urlApi}/orders`, order);
  }

  //return boolean, request code...

  public deleteById(id: number): Observable<Order> {
    return this.httpClient.delete<Order>(`${this.urlApi}/orders` + '/' + id);
  }

  // boulcer sur db et send ? lent ?

  public getItemById(id: string): Observable<Order> {
    return this.httpClient.get<Order>(`${this.urlApi}/orders/${id}`);
  }
  */
}
