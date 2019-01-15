import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jQuery';
import { Ranch } from './farminggame';
import bareImage from './img/bare.png';
import growImage from './img/growing.png';
import cornImage from './img/corn.png';
import deadCorn from './img/dead.png';

$(document).ready(function() {
  let ranch= new Ranch();
  $("img#farm").attr("src",bareImage);
  $("img#corn").attr("src",cornImage);
  $("img#potato").attr("src",cornImage);
  $("img#wheat").attr("src",cornImage);
  ranch.start();
});
