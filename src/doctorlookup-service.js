
export class DoctorLookup {
  constructor(){

  }
  searchDoctorByIssue(issue) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=wa-seattle&user_location=47.6062%2C-122.3321&skip=0&limit=10&user_key=${process.env.API_KEY}`;
      request.onload = function() {
        if (let status === 200) {
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
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=wa-seattle&user_location=47.6062%2C-122.3321&skip=0&limit=10&user_key=${process.env.API_KEY}`;
      request.onload = function() {
        if (let status === 200) {
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
    for (let i=0;i<result.meta.count;i++){
      let id=i;
      let acceptNewPatient = meta.data[i].practices.accepts_new_patients;
      let completeName = `${meta.data[i].profile.first_name} ${meta.data[i].profile.middle_name} ${meta.data[i].profile.last_name}`;
      let imageSrc = meta.data[i].profile.image_url;
      let address  = `${meta.data[i].practices.visit_address.street}, ${meta.data[i].practices.visit_address.city}, ${meta.data[i].practices.visit_address.state}, ${meta.data[i].practices.visit_address.zip}`;
      let phone = meta.data[i].practices.phones.number;
      let bio = meta.data[i].practices.profile.bio;
      $("ul#result").append(`<li id="${id}">${completeName}`);
      $("ul#result").append(`<div class="bio ${id}">`);
      $("ul#result").append(`<img src="${imageSrc}"><br>`);
      $("ul#result").append(`<p>Address: ${address}</p>`);
      $("ul#result").append(`<p>Tel: ${phone}</p>`);
      $("ul#result").append(`<p>Biography: ${bio}</p>`);
      if (acceptNewPatient){
        $("ul#result").append(`<p>Accept new patients</p></div></li>`);
      } else {
        $("ul#result").append(`<p>Not accept new patients</p></div></li>`);
      }
      $(`div.${id}`).css("display","none");
      $(`li#${id}`).click(function(){
        $(`div.${id}`).toggle("slow");
      });
    }
  }
}
