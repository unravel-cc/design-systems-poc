import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'chart2',
  standalone: true,
  imports: [
    CommonModule,
    CardModule
  ],
  templateUrl: './chart2.component.html',
  styleUrl: './chart2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Chart2Component {

}
