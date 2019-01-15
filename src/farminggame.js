import bareImage from './img/bare.png';
import growImage from './img/growing.png';
import cornImage from './img/corn.png';
import deadCorn from './img/dead.png';
import sickleImage from './img/sickle.png';
import hoseImage from './img/hose.png';
import growPotato from './img/growPotato.png';
import growWheat from './img/growWheat.png';
import potatoImage from './img/potatoImage.png';
import wheatImage from './img/wheatImage.png';
import deadPotato from './img/deadPotato.png';
import deadWheat from './img/deadWheat.png';
import bakeryImage from './img/bakery.jpg';
import breadImage from './img/bread.png';
import cakeImage from './img/cake.png';
import mPotatoesImage from './img/mPotato.png';
import bakeryWorking from './img/bakeryWorking.png';

import $ from 'jQuery';

export class Ranch {
  constructor(){
    this.cropLife= 0;
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
    this.readyToTake=false;
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
      if(this.cropLife<10){
        $("img#farm").addClass("redborder");

      } else {
        $("img#farm").removeClass("redborder");
      }
      if(this.cropIsDead() == true) {
        if (this.farm["typeOfCrop"]=="Corn") {
          this.farm["image"]=deadCorn;
          changeFarmImage(this.farm["image"]);
        } else if(this.farm["typeOfCrop"]=="Wheat") {
          this.farm["image"]=deadWheat;
          changeFarmImage(this.farm["image"]);
        } else {
          this.farm["image"]=deadPotato;
          changeFarmImage(this.farm["image"]);
        }

        clearInterval(lifeInterval);
        this.farm["timeToGrow"]=0;
        this.plantDead=true;
        this.farm["harvestProduction"] =0;
        return "Your crop has died";
      }
    }, 1000);
  }
  plant() {
    this.cropLife=30;
    this.plantDead=false;
    this.readyToHarvest=false;
  }
  watering() {
    this.cropLife= 30;
  }
  growing() {
    const growingInterval = setInterval(() => {
      this.farm["timeToGrow"]--;
      changeHoverImage(hoseImage);
      giveWater(this);
      if (!this.plantDead){
        if (this.farm["typeOfCrop"]=="Corn"){
          this.farm["image"] = growImage;
        } else if (this.farm["typeOfCrop"]=="Potato"){
          this.farm["image"] = growPotato;
        } else {
          this.farm["image"] = growWheat;
        }
      }
      changeFarmImage(this.farm["image"]);
      if(this.plantIsReady() == true) {
        if (this.farm["typeOfCrop"]=="Corn" && !this.plantDead) {
          this.farm["image"]=cornImage;
        } else if (this.farm["typeOfCrop"]=="Potato" && !this.plantDead) {
          this.farm["image"]=potatoImage;
        } else if (this.farm["typeOfCrop"]=="Wheat" && !this.plantDead) {
          this.farm["image"]=wheatImage;
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
    }else if(this.farm["typeOfCrop"]=="Potato"){
      this.potato+=this.farm["harvestProduction"];
    }else{
      this.wheat+=this.farm["harvestProduction"];
    }
    this.farm["harvestProduction"]=0;
    this.start();
  }


  cropIsDead() {
    if(this.cropLife <=0) {
      return true;
    } else {
      return false;
    }
  }
  plantIsReady() {
    if(this.farm["timeToGrow"] <=0) {
      this.readyToHarvest=true;
      return true;
    } else {
      return false;
    }
  }
  start(){
    let that=this;
    $("img#farm").click(function(){
      $("img#farm").off();
      $(".cropselection").show();
      $("img#corn").click(function(){
        $("img#corn").off("click");
        that.farm["typeOfCrop"]="Corn";
        that.farm["timeToGrow"]=60;
        that.farm["harvestProduction"]=1000;
        that.planting();
      });
      $("img#potato").click(function(){
        $("img#potato").off("click");
        that.farm["typeOfCrop"]="Potato";
        that.farm["timeToGrow"]=120;
        that.farm["harvestProduction"]=600;
        that.planting();
      });
      $("img#wheat").click(function(){
        $("img#wheat").off("click");
        that.farm["typeOfCrop"]="Wheat";
        that.farm["timeToGrow"]=180;
        that.farm["harvestProduction"]=300;
        that.planting();
      });

    });
  }
  planting(){
    $(".cropselection").hide();
    this.plant();
    this.setLife();
    this.growing();
  }
  stat(){
    const statusInterval = setInterval(() => {
      $("span#cornAmount").text(this.corn);
      $("span#potatoAmount").text(this.potato);
      $("span#wheatAmount").text(this.wheat);
      $("span#breadAmount").text(this.bread);
      $("span#mPotatoAmount").text(this.mashedPotato);
      $("span#cakeAmount").text(this.cake);
      $("span#coinAmount").text(this.coin);
    }, 1000);
  }
  startBaking(){
    let that=this;
    $("img#bakery").click(function(){
      $("img#bakery").off();
      $(".bakedSelection").show();
      $("img#bread").click(function(){
        $("img#bread").off("click");
        that.bakery["typeOfProduction"]="Bread";
        that.bakery["timeToBake"]=60;
        that.bakery["productionAmount"]=100;
        that.baking();
      });
      $("img#cake").click(function(){
        $("img#cake").off("click");
        that.bakery["typeOfProduction"]="Cake";
        that.bakery["timeToBake"]=180;
        that.bakery["productionAmount"]=20;
        that.baking();
      });
      $("img#mPotato").click(function(){
        $("img#mPotato").off("click");
        that.bakery["typeOfProduction"]="MPotato";
        that.bakery["timeToBake"]=120;
        that.bakery["productionAmount"]=50;
        that.baking();
      });

    });
  }
  baking(){
    $(".bakedSelection").hide();
    this.readyToTake=false;
    this.setBake();

  }
  setBake() {
    const bakeInterval = setInterval(() => {
      $("img#bakery").attr("src",bakeryWorking);
      this.bakery["timeToBake"]--;
      if(this.bakery["timeToBake"]<=0){
        $("img#bakery").attr("src",bakeryImage);
        $("img#bakery").addClass("greenborder");
        clearInterval(bakeInterval);
        this.readyToTake=true;
        this.readyMeal();
        return "Your meal is ready";
      } else {
        $("img#bakery").removeClass("greenborder");
      }
    }, 1000);
  }
  readyMeal(){
    console.log("readyMeal");
    let that=this;
    $("img#bakery").click(function(){
      $("img#bakery").off();
      that.getMeal();
    });
  }
  getMeal(){
    console.log("getMeal");
    if (this.bakery["typeOfProduction"]=="Bread"){
      this.bread+=this.bakery["productionAmount"];
    }else if(this.bakery["typeOfProduction"]=="MPotato"){
      this.mashedPotato+=this.bakery["productionAmount"];
    }else{
      this.cake+=this.bakery["productionAmount"];
    }
    this.bakery["productionAmount"]=0;
    this.startBaking();
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
function getMeal(farm){
  $("img#farm").click(function(){
    $("img#farm").off();
    farm.harvest();
  })
}
