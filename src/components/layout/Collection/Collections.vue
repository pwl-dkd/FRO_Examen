<template>

  <div id="body">
    
    <div class="container">
        <div id="collection_banner">
            <h1 id="page_header_title">COLLECTION</h1>
            <!-- <p>The news sh </p> -->
        </div>
        <div id="collection_forms">
            <div>
                <p><span>18</span> Shoenen gevonden</p>
            </div>
            <div>
                <span>Sort by </span> 
                <select>
                    <option value="volvo">Best selling</option>
                    <option value="saab">Alphabetically, Z-A</option>
                    <option value="saab">Alphabetically, Z-A</option>
                    <option value="opel">Price, low to high</option>
                    <option value="opel">Price, high to low</option>
                </select>
            </div>
        </div>
        <div id="collection">
            <div class="product_wrapper">
                <div class="product">
                    <div class="product_image_wrapper">
                        <img class="product_image" src="../../../assets/images/products/Nike/1/1.png">
                    </div>
                    <div class="product_info">
                        <p>Nike air max</p>
                        <p>for € 350</p>
                    </div>
                </div>
            </div>

            <div class="product_wrapper">
                <div class="product">
                    <div class="product_image_wrapper">
                        <img class="product_image"  src="../../../assets/images/products/Nike/1/1.png">
                    </div>
                    <div class="product_info">
                        <p>Nike air max</p>
                        <p>for € 350</p>
                    </div>
                </div>
            </div>

            <div class="product_wrapper">
                <div class="product">
                    <div class="product_image_wrapper">
                        <img class="product_image" src="../../../assets/images/products/Nike/1/1.png">
                    </div>
                    <div class="product_info">
                        <p>Nike air max</p>
                        <p>for € 350</p>
                    </div>
                </div>
            </div>

            <div class="product_wrapper">
                <div class="product">
                    <div class="product_image_wrapper">
                        <img class="product_image" src="../../../assets/images/products/Nike/1/1.png">
                    </div>
                    <div class="product_info">
                        <p>Nike air max</p>
                        <p>for € 350</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

  </div> 
    
</template>

<script>

export default {
  name: "Collections",
  methods: {
      
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
        width:100%
    }
}

.container {
  width: 1170px;
  padding: 0px 15px;
  margin:auto;
  background-color:white;
  transform:translateY(-30px);
}

@media screen and (max-width: 1200px) {
    .container {
        width: 100%;
    }
}


#collection_banner {
    text-align: center
}


#page_header_title {
    font-weight: 100;
    font-size: 50px;
    letter-spacing: 3px;
    font-family: 'bebas neue';
    color: #666565;
}



#collection {
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
  }

.product_wrapper {
    text-align: center;
    padding:0 15px;
  }


  .product {
    position: relative;
    margin-bottom: 20px;
    border-radius: 5px;
  }

  .product_image {
      width:255px;
  }



</style>
