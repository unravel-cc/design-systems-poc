import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LogoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
