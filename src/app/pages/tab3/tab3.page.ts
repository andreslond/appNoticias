import { Component } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Article } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  noticiasFavoritas: Article[];

  constructor(public dataLocalService: DataLocalService) {
    this.noticiasFavoritas = [];
    this.dataLocalService.cargarFavoritos();
    this.noticiasFavoritas = this.dataLocalService.noticiasFavoritas;
  }

}
