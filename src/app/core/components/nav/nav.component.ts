import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { canal } from 'src/app/canaux/models/canal';
import { CanauxService } from 'src/app/canaux/services/canaux.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public canaux$: Observable<canal[]>;

  constructor(private canauxService: CanauxService, private router: Router) {
    this.canaux$ = this.canauxService.collection$;
  }

  public goToCanal(canal: canal): void {
    this.router.navigate([`canaux/${canal.id}`]);
  }
}
