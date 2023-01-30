import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { canal } from '../../models/canal';
import { message } from '../../models/message';
import { CanauxService } from '../../services/canaux.service';

@Component({
  selector: 'app-display-canaux',
  templateUrl: './display-canaux.component.html',
  styleUrls: ['./display-canaux.component.scss'],
})
export class DisplayCanauxComponent {
  //public canaux$: Observable<canal[]>;
  public filler: message;

  public canal!: canal;
  //public canal!: BehaviorSubject<canal>;
  public id!: string;

  // Test hot
  //can default to Général/id =1
  public canalObservable$!: BehaviorSubject<canal>;

  //expermiental
  public content!: message[];

  constructor(
    private canauxService: CanauxService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //this.canaux$ = this.canauxService.collection$;
    //this.canauxService.getItemById('1').subscribe((response: canal) => {
    // this.canal.next(response);
    //});

    //default, on pourra enlever/mettre autre page
    this.id = '1';

    this.canalObservable$ = new BehaviorSubject<canal>(new canal());
    this.filler = new message();
  }

  ngOnInit(): void {
    //this.id = this.route.snapshot.paramMap.get('id') ?? '1';
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(`in id Observable : ${this.id}`);

      this.refreshCanal2();

      //exp - may trigger error
      this.print();
    });

    /*
    this.canauxService.getItemById(this.id).subscribe((response: canal) => {
      //this.canal.next(response);
      console.log('Current response ', response);
      this.canal = response;

      //Object.assign(this.canalObservable$, response);

      this.canalObservable$.next(response);
      console.log('cana obs status ', this.canalObservable$.getValue());

      console.log('Current canal ', response.name);

      //this.canauxService.refreshCollection(this.id);
    });
    */
    //this.print();
  }

  /*
  public refreshCanal(): void {
    this.canalObservable$.subscribe((data) => {
      this.canalObservable$.next(data);
    });
  }
  */

  public refreshCanal2(): void {
    this.canauxService.getItemById(this.id).subscribe((response: canal) => {
      //this.canal.next(response);
      console.log('2 Current response ', response);
      this.canal = response;

      //Object.assign(this.canalObservable$, response);

      //this.canalObservable$.next(response);
      //console.log('2 cana obs status ', this.canalObservable$.getValue());

      //console.log('2 Current canal ', response.name);
    });
  }

  /*
  public getNameCanal(): string {
    return this.canal.value.name;
  }
  */

  //do w function only vs use a variable "content"
  public print(): void {
    this.canauxService.getMessages(this.id).subscribe((response: message[]) => {
      this.content = response;
      console.log(`message : ${response}`);
    });
  }

  public action(message: message): void {
    console.log(
      `In action, message : ${message.content}, canal : ${this.canal.id}`
    );

    //using a behaviorSubject possibly;
    //refresh page is a bit ugly

    //put canalId. why have to ? works though.
    this.canauxService.addMessage(message).subscribe(() => {
      this.router.navigate([`canaux/${message.canalId}`]);
      console.log(`voyage`);
      this.print();
    });
  }
}
