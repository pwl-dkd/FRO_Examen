<template>

  <div id="body" class="container_wrapper">
    <div class="container">
        <div class="container_header">

            <h2 class="container_header_title">Brands</h2>
            <h4 class="container_header_subtitle">Get your authentic goods here</h4>

        </div>
        <div class="container_grid">
            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/Brands/1.png`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/Brands/2.png`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/Brands/3.png`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/Brands/4.png`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/Brands/5.png`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/Brands/6.png`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/Brands/7.png`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/Brands/8.png`) + ')' }"></div>
                </a>
            </div>
            </div>
        </div>
    </div>
  </div> 
    
</template>

<script>
export default {
  name: "Brands",
}


</script>


<style scoped>

#body{
    margin-top: 170px;
}

@media screen and (max-width: 980px) {
    #body{
    margin-top: 110px;
}
}


.container_wrapper {
  padding: auto 15px;
  background-color: white;
  width: 100%;
  }


  .container {
      padding: 0px 15px 30px 15px;
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
      font-family: 'bebas neue';
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
    background-size: 90% 90% !important;
    background-repeat: no-repeat;
    background-size: cover;
  }

  



@media screen and (max-width:1230px) {
    .container {
      padding: 0px 50px 30px 50px;
        width: 100%;
    }

}
  

  @media screen and (max-width:1200px) {
    .container {
      padding: 0px 50px 30px 50px;
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
      padding: 0px 0px 30px 0px;
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
      padding: 0px 0px 30px 0px;
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
