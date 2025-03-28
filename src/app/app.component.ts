import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tour of Heroes';
  items = [
    { title: 'AMASSANDO UM MONO VOLIBEAR QUE PICKOU LEBLANC 🤣', link: 'https://youtu.be/Y9py1cwi-z4?si=oTGtpFsKyYRfcrPq' },
    { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
    { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
    { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
    { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
  ]
}
