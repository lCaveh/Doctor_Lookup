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
    return promise1.then(function(response) {
      let body = JSON.parse(response);
      let doctors = body.meta.count;
      expect(doctors).toEqual(1);
    });
  });

  it('should find doctors in Seattle area by issue', function () {
    let promise2 = doctors.searchDoctorByIssue(issue);
    return promise2.then(function(response) {
      let body = JSON.parse(response);
      let doctors = body.meta.count;
      expect(doctors).toEqual(1);
    });
  });
});
