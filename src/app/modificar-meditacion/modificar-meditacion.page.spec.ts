import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarMeditacionPage } from './modificar-meditacion.page';

describe('ModificarMeditacionPage', () => {
  let component: ModificarMeditacionPage;
  let fixture: ComponentFixture<ModificarMeditacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarMeditacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarMeditacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
