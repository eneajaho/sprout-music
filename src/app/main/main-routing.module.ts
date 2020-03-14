import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './main/main.component';
import {AlbumsComponent} from './containers/albums/albums.component';
import {AlbumDetailsComponent} from './containers/album-details/album-details.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'albums/:id', component: AlbumDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
