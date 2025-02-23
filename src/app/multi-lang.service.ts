import { effect, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MultiLangService {

  translateService = inject(TranslateService);

  // Corregido: Obtener directamente el valor como string
  languageSignal = signal<string>(
    window.localStorage.getItem('languageSignal') ?? "'en'"
  );

  constructor() {
    effect(() => {
      // Corregido: Guardar el valor directamente como string
      window.localStorage.setItem('languageSignal', this.languageSignal());
      this.translateService.use(this.languageSignal());
      console.log(this.languageSignal());
    });
  }

  updateLanguage(language: string): void {
    this.languageSignal.update(() => {
      switch (language) {
        case "en":
          return "en";
        case "es":
          return "es";
        default:
          return "en";
      }
    });
  }
}
