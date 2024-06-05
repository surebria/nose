import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() voto: string = '';
  @Output() unvoto = new EventEmitter<string>(); 
  votar(): void {
    this.unvoto.emit(this.voto);
  }
}
