import { Component } from '@angular/core';
import { RMApiService } from '../services/rmapi.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  public people: any = [];
  constructor(
    private rmApiService: RMApiService,
    private router: Router
  ) {}
  ngOnInit() {
    this.getPeople();
  }
  getPeople() {
    // VERIFIQUE ESTA LINHA: DEVE CHAMAR getCharacters()
    this.rmApiService.getCharacters().subscribe(
      (response: any) => {
        // VERIFIQUE ESTA LINHA: DEVE ATRIBUIR response.results
        if (response && response.results) {
          this.people = response.results;
          console.log('Personagens carregados:', this.people);
        } else {
          console.warn('Resposta da API não contém a propriedade "results":', response);
        }
      },
      (error) => {
        console.error('Erro ao carregar personagens:', error);
      }
    );
  }
  goToDetails(id: number) {
    this.router.navigate(['/tabs/tab2', { id }]);
    console.log('Navegando para detalhes do personagem com ID:', id);
  }
}
