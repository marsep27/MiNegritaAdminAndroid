import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarPuntoPartidaPage } from './agregar-punto-partida.page';

describe('AgregarPuntoPartidaPage', () => {
  let component: AgregarPuntoPartidaPage;
  let fixture: ComponentFixture<AgregarPuntoPartidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPuntoPartidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarPuntoPartidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
