import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

export enum Layouts {
  centeredContent,
  Main,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'admin-template';
  Layouts = Layouts;
  layout?: Layouts;

  private centeredLayoutParams: string[] = ['/login', '/register'];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(data => {
      if (data instanceof RoutesRecognized) {
        const url = data.url;
        if (!this.centeredLayoutParams.includes(url)) {
          this.layout =
            data.state.root.firstChild?.data?.['layout'] || Layouts.Main;
        } else {
          this.layout = Layouts.centeredContent;
        }
      }
    });
  }
}
