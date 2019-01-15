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
  $("img#farm").attr("src",ranch.farm.image);
  $("img#corn").attr("src",cornImage);
  $("img#potato").attr("src",cornImage);
  $("img#wheat").attr("src",cornImage);
  $("img#farm").click(function(){
    $("img#farm").off();
    $(".cropselection").show();
    $("img#corn").click(function(){
      planting(ranch,"Corn");
    });
    $("img#potato").click(function(){
      planting(ranch,"Potato");
    });
    $("img#wheat").click(function(){
      planting(ranch,"Wheat");
    });
  });
});
function planting(ranch,cropType){
  $(".cropselection").hide();
  if (cropType=="Corn"){
    ranch.plant(cropType,60,1000);
    ranch.setLife();
    ranch.growing();

  }
}
