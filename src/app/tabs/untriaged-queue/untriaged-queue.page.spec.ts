import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UntriagedQueuePage } from './untriaged-queue.page';

describe('UntriagedQueuePage', () => {
  let component: UntriagedQueuePage;
  let fixture: ComponentFixture<UntriagedQueuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UntriagedQueuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UntriagedQueuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
