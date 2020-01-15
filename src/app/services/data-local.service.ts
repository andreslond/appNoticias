import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticiasFavoritas: Article[] = [];

  constructor(private storage: Storage) {
  }

  guardarNoticia(noticia: Article) {
    const existe = this.noticiasFavoritas.find(notiFav => noticia.title === notiFav.title);
    if (!existe) {
      this.noticiasFavoritas.unshift(noticia);
      this.storage.set('favoritos', this.noticiasFavoritas);
    }
  }

  async cargarFavoritos() {
    const favoritos = await this.storage.get('favoritos');
    if (favoritos) {
      this.noticiasFavoritas = favoritos;
    }
  }
}
