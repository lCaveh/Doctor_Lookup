import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jQuery';
import { Ranch } from './farminggame';
import bareImage from './img/bare.png';
import growImage from './img/growing.png';
import cornImage from './img/corn.png';
import deadCorn from './img/dead.png';
import potatoImage from './img/potatoImage.png';
import wheatImage from './img/wheatImage.png';

$(document).ready(function() {
  let ranch= new Ranch();
  $("img#farm").attr("src",bareImage);
  $("img#corn").attr("src",cornImage);
  $("img#potato").attr("src",potatoImage);
  $("img#wheat").attr("src",wheatImage);
  ranch.start();
});
