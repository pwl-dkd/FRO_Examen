<template>

  <div class="container_wrapper">
    <!-- <center> -->
        <div class="container">
            <div class="container_header">

                <h2 class="container_header_title">Best selling products</h2>
                <h4 class="container_header_subtitle">Get your authentic goods here</h4>

            </div>
            <div class="container_grid">
              <div class="container_grid_item_wrapper">
                <router-link class="header_link" to="/brands">
                  <div class="container_grid_item">
                    
                      <img class="grid_item_img" src="../../../assets/images/home/topsellers/vans.png">
                    
                  </div>
                </router-link>
              </div>

              <div class="container_grid_item_wrapper">
                <router-link class="header_link" to="/brands">
                  <div class="container_grid_item">
                    <img class="grid_item_img" src="../../../assets/images/home/topsellers/nike.png">
                </div>
                </router-link>
              </div>

              <div class="container_grid_item_wrapper">
                <router-link class="header_link" to="/product">
                  <div class="container_grid_item">
                    <img class="grid_item_img" src="../../../assets/images/home/topsellers/yeezy.png">
                  </div>
                </router-link>
              </div>

              <div class="container_grid_item_wrapper">
                <router-link class="header_link" to="/product">
                  <div class="container_grid_item">
                    <img class="grid_item_img" src="../../../assets/images/home/topsellers/jordan.png">
                  </div>
                </router-link>
              </div>

              <div class="container_grid_item_wrapper">
                <router-link class="header_link" to="/product">
                  <div class="container_grid_item">
                    <img class="grid_item_img" src="../../../assets/images/home/topsellers/fila.png">
                  </div>
                </router-link>
              </div>

              <div class="container_grid_item_wrapper">
                <router-link class="header_link" to="/product">
                  <div class="container_grid_item">
                    <img class="grid_item_img" src="../../../assets/images/home/topsellers/adidas.png">
                  </div>
                </router-link>
              </div>
            </div>
        </div>

    <!-- </center> -->
  </div> 
    
</template>

<script>
export default {
  name: "Sellers",
  

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
      width: 1170px;
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
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    /* display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap; */
  }




  .container_grid_item_wrapper {
    text-align: center;
    padding:0 15px;
  }

  .container_grid_item {
    position: relative;
    margin-bottom: 50px;
    border-radius: 50%;
  }

  .grid_item_img {
      width: 160px;
      /* height: 160px; */
      background-color: white;
      border-radius: 50%;
      box-shadow: 0px 0px 26px -12px rgba(0,0,0,0.75);
      z-index: 0;
  }

  .container_grid_item:after {
    content:'';
    border-radius:inherit;
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    transition: 0.2s ease-in-out;
    opacity: 0;
    height: calc(100% - 5px);
    background-color:#D77000;
  }

  .container_grid_item:hover:after{
    opacity: .2;
  }





  

  @media screen and (max-width:1200px) {
    .container {
      padding: 80px 50px 30px 50px;
        width: 940px;
    }

    .container_grid {
      grid-template-columns: auto auto auto ;
    }

      .grid_item_img {
        width: 100%;
      }


  }

  @media screen and (max-width: 980px) {
    .container {
      padding: 80px 0px 30px 0px;
        width: 100%;
    }


    .container_grid_item_wrapper {
      padding:0 26px;
    }

    

    .grid_item_img {
        width: 100%;
      }
  }

  @media screen and (max-width: 650px) {
    .container {
      padding: 80px 0px 30px 0px;

      }

      .container_grid {
      grid-template-columns: auto auto;
    }
  }



  
</style>
