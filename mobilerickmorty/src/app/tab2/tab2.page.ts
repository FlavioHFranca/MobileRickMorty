import { Component } from '@angular/core';
import { RMApiService } from '../services/rmapi.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(
    private rmApiService: RMApiService,
    private router: Router
  ) {}

}
