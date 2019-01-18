import {DoctorLookup} from './../src/doctorlookup-service';

describe('DoctorLookup', function(){
  let doctors = new DoctorLookup();
  let name = "Eugene Etzkorn";
  let issue = "headache";

  it('should find doctors in Seattle area by name', function () {
    let promise = doctors.searchDoctorByName(name);
    return promise.then(function(response) {
      let body = JSON.parse(response);
      let doctors = body.meta.count;
      expect(doctors).toEqual(1);
    });
  });

  it('should find doctors in Seattle area by issue', function () {
    let promise = doctors.searchDoctorByIssue(issue);
    return promise.then(function(response) {
      let body = JSON.parse(response);
      let doctors = body.meta.count;
      expect(doctors).toEqual(1);
    });
  });
});
