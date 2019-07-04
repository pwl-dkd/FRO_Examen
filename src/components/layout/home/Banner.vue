<template>
    
  <!-- <div id="banner" :style="{ backgroundImage: 'url(' + image + ')' }"> -->
  <div id="banner" :style="{ backgroundImage: `url(${ bg })` }">
    
    <div class="grid-container">
      <div class="grid-item" v-on:mouseover="grid_item_hover(0)" v-on:mouseleave="grid_item_leave(0)">
        <div class="grid_text">
          <p class="grid_title">ONE OF A KIND SHOPPING EXPERIENCE</p>
          <p class="grid_sub_title">3 Locaties in Amsterdam</p>
        </div>
      </div>
      <div class="grid-item" v-on:mouseover="grid_item_hover(1)" v-on:mouseleave="grid_item_leave(1)">
        <div class="grid_text">
          <p class="grid_title">AUTHENTIC PRODUCT, GUARANTEED</p>
          <p class="grid_sub_title">Authentication is verified</p>
        </div>
      </div>
      <div class="grid-item" v-on:mouseover="grid_item_hover(2)" v-on:mouseleave="grid_item_leave(2)">
        <div class="grid_text">
          <p class="grid_title">ONE OF A KIND SHOPPING EXPERIENCE</p>
          <p class="grid_sub_title">3 Locaties in Amsterdam</p>
        </div>
      </div>
    </div>
  </div> 
    
</template>

<script>
export default {
  name: "Banner" ,
  data () {
    return {
      image:["../../../assets/images/home/banner/2.jpg"]
      
    }
    
  }, 
  methods: {
      generator: function(event){
        this.mycolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
        document.body.style.background = this.mycolor
      },
      grid_hover: function(event) {
        var x = document.getElementsByClassName("grid-item");
        // console.log(x);
      },
      grid_item_hover: function(index) {
        var gridItem = document.getElementsByClassName("grid-item");
        var gridTitle = document.getElementsByClassName("grid_title");
        // var banner = document.getElementsById("banner");
      
        if (window.innerWidth > 880) {
          gridItem[index].setAttribute(
          "style", "background-color:#00000054; padding-top: calc(91vh - 170px); ");

          gridTitle[index].setAttribute(
          "style", "color:rgba(255, 255, 255, 1); ");

        
          let img_url = 'url(../../../assets/images/home/banner/'+index+'.jpg);';
          document.getElementById("banner").setAttribute(
          "style", 'background-image: url("'+require(`../../../assets/images/home/banner/${index}.jpg`)+' ")');
        }

      },
      grid_item_leave: function(index) {
        var gridItem = document.getElementsByClassName("grid-item");
        var gridTitle = document.getElementsByClassName("grid_title");
        // var gridSub = document.getElementsByClassName("grid_sub_title");

        gridItem[index].setAttribute(
        "style", "background-color:none; padding-top: calc(95vh - 170px); ");

        gridTitle[index].setAttribute(
        "style", "color:rgba(255, 255, 255, 0.8); ");

      },
    },

    computed: {
    bg () {
      let img_num = 2;
      let logo = img_num+'.jpg';
      return require(`../../../assets/images/home/banner/${ logo }`);
    }
  }
}

// var banner = document.getElementById('banner');








</script>


<style scoped>
  #banner {
      background-color: #cccccc;
      height: 100vh;
      width:100%;
      background-image: url(../../../assets/images/home/banner/2.jpg) ;
      /* background-attachment: fixed; */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      /* transition: all 300ms ease; */
  }

  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    height: 100%;
    width: 100%;
  }
  .grid-item {
    padding-top: calc(95vh - 170px);
    border: .1px solid rgba(255, 255, 255, 0.521);
    font-size: 30px;
    text-align: center;
    transition: .2s all ease;
    background: rgb(2,0,36);
background: linear-gradient(360deg, rgba(2, 0, 36, 0.082) 0%, rgba(0,212,255,0) 100%);


  }

  /* .grid-item:hover {
    background-color:#00000054;
    padding-top: calc(67vh - 170px);
  } */

  .grid_text {
    /* transition: .4s all ease; */
    /* margin-top: calc(70vh - 170px); */
    /* text-align: left; */
    color:rgba(255, 255, 255, 0.9);
  }

  .grid_text:hover{
    /* margin-top: calc(67vh - 170px); */
    color:rgba(255, 255, 255, 1);
  }

  .grid_title {
    font-size: 34px;
    /* font-family: bebas; */
    font-family: 'Staatliches';
    text-shadow: 0px 0px 3px rgba(150, 150, 150, 1);
  }

  .grid_sub_title {
    font-size: 19px;
    font-weight: 400;
    color:rgba(255, 255, 255, .7);
    text-shadow: 0px 0px 3px rgba(150, 150, 150, 1);
  }



  @media screen and (max-width:980px) {
      #banner {
          height: 100vh;
      }
      
  }


    @media screen and (max-width:880px) {

      .grid-container {

        grid-template-columns: auto;

      }

      .grid-item:nth-child(1) {
        display:none;
      }
      .grid-item:nth-child(2) {
        width: 100%
      }
      .grid-item:nth-child(3) {
        display:none;
      }

      .grid_title {color:rgba(255, 255, 255, 1);}
      
      .grid-item {
        /* background: rgb(2,0,36);
background: linear-gradient(360deg, rgba(2,0,36,0.5218508997429305) 0%, rgba(0,212,255,0) 100%); */


background: rgb(2,0,36);
background: linear-gradient(360deg, rgba(2,0,36,0.38046272493573263) 0%, rgba(0,212,255,0) 100%);



}
  }



</style>
