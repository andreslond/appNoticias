import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/Interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: number;

  constructor(
    private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
  }

  abrirNoticia() {
    const browser = this.inAppBrowser.create(this.noticia.url, '_system');
  }

}
