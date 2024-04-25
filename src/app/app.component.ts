import { AppService } from './app.service';
import { ChangeDetectionStrategy, Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppThemeTypes } from './models/app.models';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    UpdateComponent,
    SelectButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly themeOptions = Object.values(AppThemeTypes);

  readonly selectOptions = [
    {
      icon: 'pi pi-sun',
      value: AppThemeTypes.LIGHT,
    },
    {
      icon: 'pi pi-moon',
      value: AppThemeTypes.DARK,
    },
  ];

  constructor(
    public readonly appService: AppService,
    private readonly renderer: Renderer2
  ) {
    this.handleThemeChange();
  }

  ngOnInit(): void {}

  private handleThemeChange(): void {
    this.appService.theme$.pipe().subscribe((theme) => {
      this.themeOptions.forEach((type) => {
        this.renderer.removeClass(document.body, type);
      });
      this.renderer.addClass(document.body, theme);
    });
  }
}
