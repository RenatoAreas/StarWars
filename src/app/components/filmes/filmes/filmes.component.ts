import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interface/filmes';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent implements OnInit {
  ngOnInit(): void {}

  filmes: Film[] = [
    {
      episode_id: 4,
      title: 'A New Hope',
      director: 'George Lucas',
      producer: '1977-05-25',
    },
    {
      episode_id: 5,
      title: 'The Empire Strikes Back',
      director: 'Irvin Kershner',
      producer: '1977-05-25',
    }, {
      episode_id: 6,
      title: 'The Empire Strikes Back',
      director: 'Irvin Kershner',
      producer: '1977-05-25',
    }, {
      episode_id: 7,
      title: 'The Empire Strikes Back',
      director: 'Irvin Kershner',
      producer: '1977-05-25',
    }, {
      episode_id: 8,
      title: 'The Empire Strikes Back',
      director: 'Irvin Kershner',
      producer: '1977-05-25',
    }, {
      episode_id: 9,
      title: 'The Empire Strikes Back',
      director: 'Irvin Kershner',
      producer: '1977-05-25',
    }, {
      episode_id: 10,
      title: 'The Empire Strikes Back',
      director: 'Irvin Kershner',
      producer: '1977-05-25',
    },
  ];

  displayedColumns: string[] = ['episode_id', 'title', 'director', 'producer'];
  dataSource = this.filmes;
}
