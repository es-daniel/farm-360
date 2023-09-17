import { NavigationComponent } from '@components/navigation/navigation.component';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CUSTOM_ICONS } from './constants/custom-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavigationComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'farm-360';
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

  constructor() {
    this.registryCustomIcons();
  }

  private registryCustomIcons(): void {
    for (const { LABEL, URL } of Object.values(CUSTOM_ICONS)) {
      this.matIconRegistry.addSvgIcon(LABEL, this.domSanitizer.bypassSecurityTrustResourceUrl(URL));
    }
  }
}
