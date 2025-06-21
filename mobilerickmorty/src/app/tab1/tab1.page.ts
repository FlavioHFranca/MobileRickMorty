import { Component } from '@angular/core';
import { RMApiService } from '../services/rmapi.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  public people: any = {
    id: '',
    name:'',
  };
  constructor(
    private rmApiService: RMApiService
    
  ) {}

  public getPeople() 
  {
      this.rmApiService.getPeopleById(340).subscribe((data)=>{
        this.rmApiService = JSON.parse(JSON.stringify(data))['id'];
        this.rmApiService = JSON.parse(JSON.stringify(data))['name'];
        // this.rmApiService = JSON.parse(JSON.stringify(data))['episode'];
        // this.rmApiService = JSON.parse(JSON.stringify(data))['image'];
        // this.rmApiService = JSON.parse(JSON.stringify(data))['origin']['name'];
      });
  }
}
