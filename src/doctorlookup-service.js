import $ from 'jQuery';
export class DoctorLookup {
  constructor(){

  }
  searchDoctorByIssue(issue) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=wa-seattle&user_location=47.6062%2C-122.3321&skip=0&limit=100&user_key=${process.env.API_KEY}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
  searchDoctorByName(name) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=wa-seattle&user_location=47.6062%2C-122.3321&skip=0&limit=100&user_key=${process.env.API_KEY}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
  showData(result){
    if (result.meta.count>0){
      for (let i=0;i<result.meta.count;i++){
        let id=i;
        let acceptNewPatient = result.data[i].practices[0].accepts_new_patients;
        let completeName = `${result.data[i].profile.first_name} ${result.data[i].profile.middle_name} ${result.data[i].profile.last_name}`;
        let imageSrc = result.data[i].profile.image_url;
        let address  = `${result.data[i].practices[0].visit_address.street}, ${result.data[i].practices[0].visit_address.city}, ${result.data[i].practices[0].visit_address.state}, ${result.data[i].practices[0].visit_address.zip}`;
        let phone = result.data[i].practices[0].phones[0].number;

        $("ul#result").append(`<li id="${id}">${completeName}`);
        $("ul#result").append(`<div class="bio ${id}">`);
        $("ul#result").append(`<img src="${imageSrc}"><br>`);
        $("ul#result").append(`<p>Address: ${address}</p>`);
        $("ul#result").append(`<p>Tel: ${phone}</p>`);
        if (acceptNewPatient){
          $("ul#result").append(`<p>Accept new patients</p></div></li>`);
        } else {
          $("ul#result").append(`<p>Not accept new patients</p></div></li>`);
        }
      }
    } else {
      $("ul#result").append("<h2>There is no doctor related on your search in your area");
    }
  }
  showError(error){
    $("ul#result").append(`<h2>An error appears in procceing your request: ${error.message}</h2>`);
  }
}
