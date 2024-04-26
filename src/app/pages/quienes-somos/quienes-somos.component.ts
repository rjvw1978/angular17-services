import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuienesSomosService } from '../../services/quienes-somos.service';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {
  profesionalList:any;
  constructor(private QuienesSomosService:QuienesSomosService)
  {
    this.profesionalList=QuienesSomosService.obtenerProfesionales();
  }

}
