import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PuntosPartidaPage } from './puntos-partida.page';

describe('PuntosPartidaPage', () => {
  let component: PuntosPartidaPage;
  let fixture: ComponentFixture<PuntosPartidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntosPartidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PuntosPartidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
