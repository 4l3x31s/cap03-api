import { Component, inject, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ApiService } from '../../services/api.service';
import { PersonasDto } from '../../model/personas.dto';

import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-prueba-material',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule,
    MatCardModule
  ],
  templateUrl: './prueba-material.component.html',
  styleUrl: './prueba-material.component.scss'
})
export class PruebaMaterialComponent implements OnInit {
  personas: PersonasDto = <PersonasDto>{}
  value= 'Click'
  apiService = inject(ApiService)

  async ngOnInit() {
    this.personas = await this.apiService.getUsers<PersonasDto>();
  }
}
