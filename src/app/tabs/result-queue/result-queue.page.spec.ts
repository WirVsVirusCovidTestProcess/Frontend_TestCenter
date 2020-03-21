import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultQueuePage } from './result-queue.page';

describe('ResultQueuePage', () => {
  let component: ResultQueuePage;
  let fixture: ComponentFixture<ResultQueuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultQueuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultQueuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
