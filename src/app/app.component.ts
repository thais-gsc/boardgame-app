import { Boardgame } from './models/boardgame.model';
import { Component } from '@angular/core';
import { BggApiService } from './service/bgg-api.service';
import * as convert from 'xml-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boardgame-app';

  constructor(private api: BggApiService) { }

  ngOnInit(): void {
    this.api.getGameByName('dead').subscribe((response: any) => {
      let nameResults = JSON.parse(convert.xml2json(response, { compact: true, trim: true, spaces: 4,  }))
      this.api.getGameById(nameResults.items.item[0]._attributes.id).subscribe((response: any) => {
        let results = JSON.parse(convert.xml2json(response, { compact: true, trim: true, spaces: 4,  }))
        console.log(results.boardgames.boardgame.minplayers._text)
    })}
    )
  }
}
