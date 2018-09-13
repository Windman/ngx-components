import { TestBed } from '@angular/core/testing';

import { NgControlsService } from './ng-controls.service';

describe('NgControlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgControlsService = TestBed.get(NgControlsService);
    expect(service).toBeTruthy();
  });
});
