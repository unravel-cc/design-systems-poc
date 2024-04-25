import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppThemeTypes } from './models/app.models';

const LOCAL_STORAGE_KEY = 'theme';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _theme$ = new BehaviorSubject<AppThemeTypes>(
    (localStorage.getItem(LOCAL_STORAGE_KEY) as AppThemeTypes) ||
      AppThemeTypes.LIGHT
  );

  get theme$(): Observable<AppThemeTypes> {
    return this._theme$.asObservable();
  }

  get theme(): AppThemeTypes {
    return this._theme$.getValue();
  }

  set theme(value: AppThemeTypes) {
    localStorage.setItem(LOCAL_STORAGE_KEY, value);
    this._theme$.next(value);
  }
}
