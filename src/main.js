import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';
import $ from 'jQuery';
import { Ranch } from './farminggame';
import bareImage from './img/bare.png';
import growImage from './img/growing.png';
import cornImage from './img/corn.png';
import deadCorn from './img/dead.png';
import potatoImage from './img/potatoImage.png';
import wheatImage from './img/wheatImage.png';
import bakeryImage from './img/bakery.jpg'
import breadImage from './img/bread.png';
import cakeImage from './img/cake.png';
import mPotatoesImage from './img/mPotato.png';

$(document).ready(function() {
  let ranch= new Ranch();
  $("img#farm").attr("src",bareImage);
  $("img#bakery").attr("src", bakeryImage);
  $("img#corn").attr("src",cornImage);
  $("img#potato").attr("src",potatoImage);
  $("img#wheat").attr("src",wheatImage);
  $("img#bread").attr("src",breadImage);
  $("img#cake").attr("src",cakeImage);
  $("img#mPotato").attr("src",mPotatoesImage);
  ranch.stat();
  ranch.start();
  ranch.startBaking();
});
