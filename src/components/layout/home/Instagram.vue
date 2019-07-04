<template>

  <div class="container_wrapper">
    <div class="container">
        <div class="container_header">

            <h2 class="container_header_title">INSTAGRAM</h2>
            <h4 class="container_header_subtitle">Get your authentic goods here</h4>

        </div>
        <div class="container_grid">
            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/home/instagram/instagram1.jpg`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/home/instagram/instagram2.png`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/home/instagram/instagram3.jpg`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/home/instagram/instagram4.jpg`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/home/instagram/instagram5.png`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/home/instagram/instagram6.png`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/home/instagram/instagram7.png`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/home/instagram/instagram8.png`) + ')' }"></div>
                </a>
            </div>
            </div>
        </div>
    </div>
  </div> 
    
</template>

<script>
export default {
  name: "Instagram",
}


</script>


<style scoped>
.container_wrapper {
  padding: auto 15px;
  background-color: #F5F2EB;
  width: 100%;
  }


  .container {
      padding: 80px 15px 30px 15px;
      width: 1230px;
      margin:auto;
  }


  

  .container_header {
    text-align: center;
      padding-bottom: 35px;
  }

  .container_header_title {
      font-weight: 100;
      font-size: 40px;
      /* font-family: 'bebas neue'; */
      font-family: 'Staatliches';
      color:#63584C;
  }

  .container_header_subtitle {
    color:#666565;
    font-weight: 100;
  }

  .container_grid {
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
  }

  .container_grid_item_wrapper {
    text-align: center;
    padding:0 15px;
  }

  .container_grid_item {
    position: relative;
    margin-bottom: 20px;
    border-radius: 5px;
  }

  .grid_item_img {
    width: 270px;
    height: 270px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 26px -12px rgba(0,0,0,0.75);
    z-index: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
 /* .container_grid_item:after {
    font-family: "Font Awesome 5 Free";
    content: "\f16d";
    font-size: 30px;
    color:white;
    border-radius:inherit;
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: calc(100% - (50% - 13px));
    transition: 0.2s ease-in-out;
    opacity: 0;
    padding-top:calc(50% - 13px);
    font-weight: 900;
  } */

  .container_grid_item:hover:after{
    opacity: 1;
    background-color:rgba(215, 111, 0, 0.247);
  } 




@media screen and (max-width:1230px) {
    .container {
      padding: 80px 50px 30px 50px;
        width: 100%;
    }

}
  

  @media screen and (max-width:1200px) {
    .container {
      padding: 80px 50px 30px 50px;
        /* width: 940px; */
    }

    /* .container_grid {
      grid-template-columns: auto auto auto ;
    } */

      .grid_item_img {
        width: 250px;
        height:250px
      }


  }

  @media screen and (max-width: 980px) {
    .container {
      padding: 80px 0px 30px 0px;
        width: 100%;
    }


  }

  @media screen and (max-width: 580px) {
    .grid_item_img {
        width: 320px;
        height: 320px;
      }
  }

  @media screen and (max-width: 650px) {
    .container {
      padding: 80px 0px 30px 0px;
      }

      .grid_item_img {
        width: 186px;
        height:186px;
      }

      /* .container_grid {
      grid-template-columns: auto auto;
    } */
  }



  
</style>
