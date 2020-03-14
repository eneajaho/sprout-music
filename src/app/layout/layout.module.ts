import {NgModule} from '@angular/core';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout/layout.component';
import {NavigationComponent} from './containers/navigation/navigation.component';
import {SharedModule} from '../shared/shared.module';
import {MenuItemsComponent} from './components/menu-items/menu-items.component';
import {MenuPlaylistsComponent} from './components/menu-playlists/menu-playlists.component';
import {SearchComponent} from './components/search/search.component';
import {TopBarComponent} from './containers/top-bar/top-bar.component';
import {TopBarMenuComponent} from './components/top-bar-menu/top-bar-menu.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavigationComponent,
    MenuItemsComponent,
    MenuPlaylistsComponent,
    SearchComponent,
    TopBarComponent,
    TopBarMenuComponent
  ],
  imports: [
    SharedModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule {}
