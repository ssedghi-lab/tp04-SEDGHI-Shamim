import { Component, Signal , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../../card.service';
import { MaskCardCodePipe } from '../card-mask-pipe/card-mask.pipe';
import { CardFormComponent } from '../card-form/card-form.component';
import { Card } from '../models/card.model'; 
import { computed } from '@angular/core';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  standalone: true,
  styleUrls: ['./card-list.component.css'] , 
  imports: [CommonModule, MaskCardCodePipe ],
})


export class CardListComponent {

  cards$ = computed(() => this.cardService.getCartes()());
  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cards$ = this.cardService.getCartes();
    }

  supprimerCarte(carteId: number): void {
    this.cardService.delCarte(carteId);
  }
}

