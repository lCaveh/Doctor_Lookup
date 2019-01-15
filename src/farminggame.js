import bareImage from './img/bare.png';
import growImage from './img/growing.png';
import cornImage from './img/corn.png';
import deadCorn from './img/dead.png';
import sickleImage from './img/sickle.png';
import hoseImage from './img/hose.png';

import $ from 'jQuery';

export class Ranch {
  constructor(){
    this.cropLife= 0;
    this.cropGrown= 0;
    this.wheat= 0;
    this.corn= 0;
    this.potato= 0;
    this.bread= 0;
    this.cake= 0;
    this.mashedPotato= 0;
    this.milk= 0;
    this.egg= 0;
    this.coin=0;
    this.plantDead=false;
    this.readyToHarvest=false;
    this.farm= {
      image:bareImage,
      typeOfCrop: "",
      timeToGrow: 0,
      harvestProduction: 0
    };
    this.bakery={
      typeOfProduction: "",
      timeToBake:0,
      productionAmount:0
    };
  }


  setLife() {
    const lifeInterval = setInterval(() => {
      this.cropLife--;
      if(this.readyToHarvest){
        clearInterval(lifeInterval);
      }
      if(this.cropIsDead() == true) {
        if (this.farm["typeOfCrop"]=="Corn") {
          this.farm["image"]=deadCorn;
          changeFarmImage(this.farm["image"]);
        }
        clearInterval(lifeInterval);
        this.plantDead=true;
        this.farm["harvestProduction"] =0;
        return "Your crop has died";
      }
    }, 1000);
  }
  plant(cropType,cropTime,cropProduction) {
    this.farm["typeOfCrop"] = cropType;
    this.farm["timeToGrow"] = cropTime;
    this.farm["harvestProduction"] = cropProduction;
    this.cropGrown = this.farm["timeToGrow"];
    this.cropLife=30;
    this.plantDead=false;
    this.readyToHarvest=false;
  }
  watering() {
    this.cropLife= 30;
  }
  growing() {
    const growingInterval = setInterval(() => {
      this.cropGrown--;
      changeHoverImage(hoseImage);
      giveWater(this);
      if (!this.plantDead){
        this.farm["image"] = growImage;
      }
      changeFarmImage(this.farm["image"]);
      if(this.plantIsReady() == true) {
        if (this.farm["typeOfCrop"]=="Corn" && !this.plantDead) {
          this.farm["image"]=cornImage;
        }
        changeFarmImage(this.farm["image"]);
        changeHoverImage(sickleImage);
        clearInterval(growingInterval);
        harvestTime(this);
        return "Your crop is ready to harvest";
      }
    }, 1000);
  }
  harvest(){
    this.farm["image"] = bareImage;
    changeFarmImage(this.farm["image"]);
    if (this.farm["typeOfCrop"]=="Corn"){
      this.corn+=this.farm["harvestProduction"];
      this.farm["harvestProduction"]=0;
      console.log(this.corn);
    }


  }
  cropIsDead() {
    if(this.cropLife <=0) {
      return true;
    } else {
      return false;
    }
  }
  plantIsReady() {
    if(this.cropGrown <=0) {
      this.readyToHarvest=true;
      return true;
    } else {
      return false;
    }
  }

}
function changeFarmImage(image){
  $("img#farm").attr("src",image);
}
function changeHoverImage(image){
  $("img#farm").hover(function(){
    $(this).css("cursor", `url(${image}), auto`);
  });
}
function giveWater(farm){
  $("img#farm").click(function(){
    $("img#farm").off();
    farm.watering();
  })
}
function harvestTime(farm){
  $("img#farm").click(function(){
    $("img#farm").off();
    farm.harvest();
  })
}
