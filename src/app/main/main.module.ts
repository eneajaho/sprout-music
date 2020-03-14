import {NgModule} from '@angular/core';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main/main.component';
import {BoxItemComponent} from './components/box-item/box-item.component';
import {AlbumsComponent} from './containers/albums/albums.component';
import {SharedModule} from '../shared/shared.module';
import {FiltersComponent} from './components/filters/filters.component';
import {AlbumDetailsComponent} from './containers/album-details/album-details.component';
import {SongsListComponent} from './components/songs-list/songs-list.component';

@NgModule({
  declarations: [
    MainComponent,
    BoxItemComponent,
    AlbumsComponent,
    FiltersComponent,
    AlbumDetailsComponent,
    SongsListComponent
  ],
  imports: [
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule {}
