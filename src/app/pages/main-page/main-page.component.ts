import { Component, inject} from '@angular/core';

import Mail from '../../types/mail-type';
import { MailItemService } from '../../services/mail-item.service';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
}
