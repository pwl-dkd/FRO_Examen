<template>

  <div id="body">
    
    <div class="container">
        <div id="product_brand">
            <span >Nike </span>
            <span> > </span>
            <span>Air Jordans</span>
        </div>
        <div class="product">
            <div id="product_img" class="product_data">
                    <div v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/product/0.jpg`) + ')' }" id="img_main"></div>
                    <div  id="img_thumb_grid">
                        <div v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/product/thumb/0.jpg`) + ')' }" v-on:click="img_thumb_select(0)" class="img_thumb"></div>
                        <div v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/product/thumb/1.jpg`) + ')' }" v-on:click="img_thumb_select(1)" class="img_thumb"></div>
                        <div v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/product/thumb/2.jpg`) + ')' }" v-on:click="img_thumb_select(2)" class="img_thumb"></div>
                    </div>
            </div>

            <div id="product_desc" class="product_data">
                <div id="product_name_field">
                    <h2 class="product_title">epix jordan</h2>
                    <h4 class="product_price">$200</h4>
                </div>

                <div id="product_list_field">
                    <p class="product_list"> Delivery time: 2 days</p>
                    <p class="product_list"> Free delivery at €50</p>
                </div>

                <div id="maten_field">
                    <p class="product_label"> kies een maat</p>
                    <button v-on:click="slected_size(0)" class="product_size"><b>11</b></button>
                    <button v-on:click="slected_size(1)" class="product_size"><b>11</b></button>
                    <button v-on:click="slected_size(2)" class="product_size"><b>11</b></button>
                    <button v-on:click="slected_size(3)" class="product_size"><b>11</b></button>
                    <button v-on:click="slected_size(4)" class="product_size"><b>11</b></button>
                </div>
                <div>
                    <div id="add_to_cart_field">
                        
                        <input id="total" v-bind:value="count">
                        <div id="add_total">
                            <!-- <div v-on:click="product_counter(1)" id="plus" class="item1"><i class="fas fa-plus"></i></div>
                            <div style="border-bottom: 1px solid grey;" v-on:click="product_counter(-1)" id="min" class="item2"><i class="fas fa-minus"></i></div> -->

                            <div v-on:click="total_count(1)" id="plus" class="item1"><i class="fas fa-plus"></i></div>
                            <div style="border-bottom: 1px solid grey;" v-on:click="total_count(-1)" id="min" class="item2"><i class="fas fa-minus"></i></div>
                        </div>
                        <router-link to="/cart">
                        <button id="add_to_cart">Add to cart <span> ></span></button>
                        </router-link>
                    </div>

                    <div id="product_information_field">
                        <p class="product_label">Product information</p>
                        <p class="product_information_text">ProductinformatieLeveringRetourneringen
                            Performance tech meets futuristic design met de komst van deze Alphaedge 4D
                            trainers van adidas. Deze zwarte heren sneakers zijn ontworpen 
                            met een ademend Primeknit bovenwerk en supportive overlays. Deze sneakers zijn 
                            ontworpen met een foot-hugging fit en maken een multi-directionale beweging mogelijk. </p>
                    </div>
                </div>

            </div>
            
        </div>

        <div class="grid_container_wrapper">

        <h2 class="container_header_title">related products</h2>
            <h4 class="container_header_subtitle">Some products you might like</h4>

        <div class="container_grid">
            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/product/related/1.jpg`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/product/related/2.jpg`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/product/related/3.jpg`) + ')' }"></div>
                </a>
            </div>
            </div>

            <div class="container_grid_item_wrapper">
            <div class="container_grid_item">
                <a href="#">
                <div class="grid_item_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/product/related/4.jpg`) + ')' }"></div>
                </a>
            </div>
            </div>

        </div>

        </div>




    </div>

  </div> 
    
</template>

<script>

export default {
  name: "Product",
  data () {
    return {
      count:1
      
    }
    
  },
    methods: {
        slected_size : function(index) {
            let sizes = document.getElementsByClassName("product_size");
            let x;

            for (x = 0; x < sizes.length; x++) { 
                sizes[x].classList.remove("selected_size");
            }

            sizes[index].classList.add("selected_size");

        },
        total_count : function(index) {
            this.count = this.count + index

            if (this.count  == 0) {
                this.count = 1;
            } 
            if (this.count  > 10) {
                this.count = 10;
            } 
        }, 
        img_thumb_select : function (index) {
            let images = document.getElementsByClassName("img_thumb");
            let z;

            for (z = 0; z < images.length; z++) { 
                images[z].classList.remove("selected_img");
            }

            images[index].classList.add("selected_img");

            console.log(index);


            // let img_url = 'url(../../../assets/images/product/'+index+'.jpg);';
            document.getElementById("img_main").setAttribute(
            "style", 'background-image: url("'+require(`../../../assets/images/product/${index}.jpg`)+' ")');
        }
    }

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



.container {
    width: 100%;
}

#product_brand {
    text-align: center
}

#product_brand span{
    color: #d4651f;
}

#product_brand span:nth-child(2) {
  color: #ccc;
}

#product_brand span:nth-child(3) {
  color: #666565;
}



.product {
    padding: 70px 15px 30px 15px;
    width: 1170px;
    margin:auto;
}

.product_data {
    display:inline-block;
}

#product_img {
    width:59% ;
    float: left;
}

#product_desc {
    width:39% ;
}



@media screen and (max-width: 1247px) {
    .product {
        width: 100%;
        padding: 80px 0px 30px 0px;
    }

    #product_img {
        width:65% ;
    }

    #product_desc {
        width:35% ;
    }

    

}

@media screen and (max-width: 780px) {
    .product_data {
        width: 100% !important;
        display:block;
    }

    
}





#product_name_field {
    padding-left:10px;
}

.product_title {
    font-weight: 100;
    font-size: 45px;
    /* font-family: 'bebas neue'; */
    font-family: 'Staatliches';
    color: #63584C;
}

.product_price {
    font-size: 30px;
    color:#666565;
    font-weight: 100;
}



#product_list_field {
    margin-top:20px;
    padding-left: 20px;
    margin-bottom:5%;
}

.product_list {
    font-size:14px;
    color: #777 !important;
}

.product_list:before {
    content:' - ';
    display:inline;
}



#maten_field {
    padding-left:10px;
    padding-top:5%;
    margin-bottom:35px;
    border-top: 1px solid grey;
}


.product_size {
    background-color: white ;
    border:1px solid grey;
    font-size: 12px;
    width:46px;
    height: 46px;
    padding: 0 5px 0 5px;
    text-align: center;
    margin: 0 4px 4px 0;
    transition:all ease .2s;
}

.product_size:hover {
    background-color:#d4651f;
    color:white;
    border:1px solid #d4651f;
}

.selected_size {
	background-color:#d4651f;
    color:white;
    border:1px solid #d4651f;
}

.product_label {
    margin-bottom:15px;
    font-weight: 600;
    font-size: 17px;
}

.item1 { 
    grid-area: plus; 
}

.item2 { 
    grid-area: min; 
}

.item3 { 
     margin: auto;
     height: 100%;
     padding-top:31px !important;
    grid-area: total; 
}

#add_to_cart_field {
    padding-left:10px;
    margin-bottom:30px;
    display: flex;
}


#total {    
    text-align: center;
    height: 50px;
    width: 50px;
}

#add_total div{
    padding-top: 2px;
    transition: all ease .3s;
    text-align: center;
    height: 25px;
    width: 25px;
    border-top: 1px solid grey;
}

#add_total div:hover{
    color:white;
    background-color: #2e2e2e;
}



#add_to_cart {
    color: white;
    background-color:#d4651f;
    font-family: Lato;
    padding: 14px 40px;
    padding-right:20px;
    font-size: 20px;
    border:1px solid #d4651f;
    transition: 0.2s;
    line-height: 1em;
}

#add_to_cart:hover{
    background-color:#9b4712;
}

#add_to_cart span {
    float :right;
}


#product_information_field {
    padding-left:10px;
    padding-top:5%;
    margin-bottom:20px !important;
    border-top: 1px solid grey;
}

.product_information_text {
    padding-left:7.5px;
    font-size:14px;
    color: #525252 !important;
    line-height: 18px;
}



@media screen and (max-width: 1248px) {
    #add_to_cart_field {
        width: 90%;
    }
}








#img_main {
    width: 652px;
    height:489px;
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    transition: all ease .2s;
}

#img_thumb_grid {
    width:400px;
    margin:auto;
    display:grid;
    grid-template-columns: auto auto auto;
    justify-items: center;
    margin-top: 20px;
}

.img_thumb {
    border-radius: 3px;
    height:75px;
    width:99.6px;
    background-color:white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.selected_img {
    border: 2px solid #d4651f;
    border-radius: 4px;
    background-size: 90% 90%;
}


@media screen and (max-width: 1248px) {
    #img_main {
        width: 90%;
        height: calc((65vw * 0.75) * .9);
        margin: auto;
    }
}

@media screen and (max-width: 780px) {
    #img_main {
        height: calc((90vw * 0.75) * .9);
    }

    #img_thumb_grid {
        margin-bottom: 20px;
    }


}














/* sss */



.grid_container_wrapper {
      padding: 80px 15px 30px 15px;
      width: 1230px;
      margin:auto;
      text-align: center;
  }

.container_grid {
    margin-top: 40px;
    width: 100%;
    
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
    width: 250px;
    /* width: 16%; */
    height: 200px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 26px -12px rgba(0,0,0,0.75);
    z-index: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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


  

@media screen and (max-width:1230px) {
    .grid_container_wrapper {
      padding: 80px 50px 30px 50px;
        width: 100%;
    }

}
  

  @media screen and (max-width:1230px) {
    .grid_container_wrapper {
      padding: 80px 50px 30px 50px;
        /* width: 940px; */
    }

    /* .container_grid {
      grid-template-columns: auto auto auto ;
    } */

      .grid_item_img {
        width: 19vw;
        height:18vh;
      }


  }

  @media screen and (max-width: 988px) {
    .grid_container_wrapper {
      padding: 80px 0px 30px 0px;
        width: 100%;
    }


  }

  @media screen and (max-width: 920px) {
    .grid_item_img {
        width: 272px;
        height:18vh;
      }


  }

  @media screen and (max-width: 580px) {
    .grid_item_img {
        width: 320px;
        height: 280px;
      }
  }

  @media screen and (max-width: 650px) {
    .grid_container_wrapper {
      padding: 80px 0px 30px 0px;
      }

      .grid_item_img {
        width: 186px;
        height:156px;
      }

      /* .container_grid {
      grid-template-columns: auto auto;
    } */
  }




</style>
