import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'chart1',
  standalone: true,
  imports: [
    CardModule,
    CommonModule
  ],
  templateUrl: './chart1.component.html',
  styleUrl: './chart1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Chart1Component {

}
