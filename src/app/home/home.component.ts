import { Component, inject } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  meta: Meta = inject(Meta);
  title: Title = inject(Title);
  
  ngOnInit() {
    this.meta.addTags([
      { name: 'description', content: 'Weather map' },
      { name: 'robots', content: 'index, follow' },
    ]);
    this.title.setTitle('Weather map');
  }
}
