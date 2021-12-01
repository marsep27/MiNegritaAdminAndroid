import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarPuntoPartidaPage } from './modificar-punto-partida.page';

describe('ModificarPuntoPartidaPage', () => {
  let component: ModificarPuntoPartidaPage;
  let fixture: ComponentFixture<ModificarPuntoPartidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarPuntoPartidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarPuntoPartidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
