import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { WINDOW } from '../app.tokens';
import { filter, interval, startWith, switchMap, tap } from 'rxjs';

const CHECK_INTERVAL = 10000;

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
  standalone: true,
  imports: [ButtonModule, DialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateComponent implements OnInit {
  dialogVisible = false;

  constructor(
    private readonly swUpdate: SwUpdate,
    @Inject(WINDOW) private readonly window: Window,
    private readonly cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.handleServiceWorkerUpdates();
    }
  }

  reload(): void {
    this.window.location?.reload();
  }

  private handleServiceWorkerUpdates(): void {
    interval(CHECK_INTERVAL)
      .pipe(
        startWith(0),
        switchMap(() => this.swUpdate.checkForUpdate())
      )
      .subscribe();

    this.swUpdate.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
      )
      .subscribe(() => {
        this.dialogVisible = true;
        this.cd.detectChanges();
      });
  }
}
