import {DoctorLookup} from './../src/doctorlookup-service';

describe('DoctorLookup', function(){
  let doctors;
  let name;
  let issue;

  beforeEach(function () {
    doctors = new DoctorLookup();
    name = "Eugene Etzkorn";
    issue = "headache";
  });

  it('should find doctors in Seattle area by name', function () {
    let promise1 = doctors.searchDoctorByName(name);
    promise1.then(function(response1) {
      let body1 = JSON.parse(response1);
      let doctors1 = body1.meta.count;
      expect(doctors1).toEqual(1);
    });
  });

  it('should find doctors in Seattle area by issue', function () {
    let promise2 = doctors.searchDoctorByIssue(issue);
    promise2.then(function(response2) {
      let body2 = JSON.parse(response2);
      let doctors2 = body2.meta.count;
      expect(doctors2).toEqual(1);
    });
  });
});
