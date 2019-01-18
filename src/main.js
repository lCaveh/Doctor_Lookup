import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';
import $ from 'jQuery';
import {DoctorLookup} from './doctorlookup-service';

$(document).ready(function() {
  let doctors = new DoctorLookup();
  doctors.searchDoctorByIssue();


});
