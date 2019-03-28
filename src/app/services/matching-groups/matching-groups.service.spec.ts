import { TestBed } from '@angular/core/testing';

import { MatchingGroupsService } from './matching-groups.service';

describe('MatchingGroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchingGroupsService = TestBed.get(MatchingGroupsService);
    expect(service).toBeTruthy();
  });
});
