import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';
import $ from 'jQuery';
import {DoctorLookup} from './doctorlookup-service';

$(document).ready(function() {
  let doctors = new DoctorLookup();
  $("button#nameSearch").click(function(){
    $(".intro").hide();
    $("form#searchByName").show();
  });
  $("button#issueSearch").click(function(){
    $(".intro").hide();
    $("form#searchByIssue").show();
  });
  $("form#searchByName").submit(function(){
    event.preventDefault();
    $("form#searchByName").hide();
    let name= $("input#name").val();
    let promise = doctors.searchDoctorByName(name);
    promise.then(function(response) {
      let result = JSON.parse(response);
      doctors.showData(result);
    },function(error){
      doctors.showError(error);
    });
  });
  $("form#searchByIssue").submit(function(){
    event.preventDefault();
    $("form#searchByIssue").hide();
    let issue= $("input#issue").val();
    let promise = doctors.searchDoctorByIssue(issue);
    promise.then(function(response) {
      let result = JSON.parse(response);
      doctors.showData(result);
    },function(error){
      doctors.showError(error);
    });
  });
});
