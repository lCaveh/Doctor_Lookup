import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';
import $ from 'jQuery';
import {NasaService} from './nasa-service'

$(document).ready(function() {
    let nasaService = new NasaService();
    let promise = nasaService.getNasaPictureOfTheDay();

    promise.then(function(response) {
      let body = JSON.parse(response);
      nasaService.showData(body)
    });


});
