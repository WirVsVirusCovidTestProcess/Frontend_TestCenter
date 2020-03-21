import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaitingQueuePage } from './waiting-queue.page';

describe('WaitingQueuePage', () => {
  let component: WaitingQueuePage;
  let fixture: ComponentFixture<WaitingQueuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingQueuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaitingQueuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
