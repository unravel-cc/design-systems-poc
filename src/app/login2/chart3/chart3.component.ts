import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'chart3',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './chart3.component.html',
  styleUrl: './chart3.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Chart3Component {}
