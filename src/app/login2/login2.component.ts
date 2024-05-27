import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';
import { Chart3Component } from './chart3/chart3.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { LogoComponent } from '../logo/logo.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [
    CardModule,
    Chart1Component,
    Chart2Component,
    Chart3Component,
    CommonModule,
    FormsModule,
    ButtonModule,
    LogoComponent,
    CheckboxModule,
    InputTextModule,
  ],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login2Component {}
