import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CardListComponent } from './card-management/card-list/card-list.component';
import {CardFormComponent} from './card-management/card-form/card-form.component';
import { MaskCardCodePipe } from './card-management/card-mask-pipe/card-mask.pipe';
import {CardCodeFormatterDirective} from './card-management/directives/card-code-formatter.directive';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardListComponent , CardFormComponent , MaskCardCodePipe , CardCodeFormatterDirective , ReactiveFormsModule  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP04';
}
