import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-validation-indicator',
  templateUrl: './validation-indicator.component.html',
  styleUrls: ['./validation-indicator.component.scss']
})
export class ValidationIndicatorComponent {
  @Input() shortPassword!: boolean;
  @Input() easy!: boolean;
  @Input() medium!: boolean;
  @Input() strong!: boolean;
}
