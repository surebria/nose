import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  title: string ='Votaciones';

  votacion = '';
  c1: number = 0;
  c2: number = 0;
  c3: number = 0;
  c4: number = 0;
  totalVotos: number = 0;

  votos = [
    {title: 'Emiliano Bollo'},
    {title: 'Isaac Lopez'},
    {title: 'Diego Chavarria'},
    {title: 'Daniel Padilla'},
  ];

  finalizar(): void {
    this.totalVotos = this.c1 + this.c2 + this.c3 + this.c4;
  }

  addVoto(response: string){
    this.votacion = 'Usted eligio: ' + response;
    switch(response.trim()){
      case 'Emiliano Bollo':
        this.c1++;
        break;
      case 'Isaac Lopez':
        this.c2++;
        break;
      case 'Diego Chavarria':
        this.c3++;
        break;
      case 'Daniel Padilla':
        this.c4++;
        break;
    }
  }

  mostrarGanador(): string {
    const nombres = ['Emiliano Bollo', 'Isaac Lopez', 'Diego Chavarria', 'Daniel Padilla'];
    const votos = [this.c1, this.c2, this.c3, this.c4];

    let maxVotos = Math.max(...votos); 
    let ganadores = nombres.filter((_, i) => votos[i] === maxVotos); 
    if (ganadores.length > 1) {
        return 'Empate';
    } else {
        return ganadores[0]; 
    }
}

  
}
