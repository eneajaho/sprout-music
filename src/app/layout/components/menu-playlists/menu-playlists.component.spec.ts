import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPlaylistsComponent } from './menu-playlists.component';

describe('MenuPlaylistsComponent', () => {
  let component: MenuPlaylistsComponent;
  let fixture: ComponentFixture<MenuPlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPlaylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
