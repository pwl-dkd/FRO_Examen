<template>

  <div id="body">
    
    <div class="container">
        <div id="page_banner">
            <h1 id="page_header_title">MY SHOPPING CART</h1>
        </div>
        
        <div >
            <table id="customers">
                <tr>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>quantity</th>
                    <th>TOTAL</th>
                    <th></th>
                </tr>
                <tr>
                    <td class="table_product">
                        <div class="table_prodyct_wrapper">
                            <img id="product_image" src="../../../assets/images/cart/1.png">
                        </div>
                        <p class="product_name">Nike Air Max 2015</p>
                        <p class="product_size">Maat 45</p>
                    </td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td><i class="fas fa-times"></i></td>
                </tr>
                
                </table>
        </div>

        <div>
            <div style="border-bottom: 1px solid #F5F2EB; " class="checkout_box">
                <div class="total_price">
                    <span id="subtotal">SUBTOTAL </span>
                    <span id="price"> € 630.00</span>
                </div>
                <div class="checkout_wrapper">
                    <button class="checkout_btn">CHECKOUT</button>
                </div>
            </div>

            <div  class="checkout_box">
                <div class="total_price">
                    <span id="subtotal">or try: </span>
                </div>
                <div class="checkout_wrapper">
                    <button id="paypal" class="checkout_btn"></button>
                </div>
            </div>
        </div>

        

    </div>

  </div> 
    
</template>

<script>

export default {
  name: "Ships",
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

#page_banner {
    text-align: center;
    margin-bottom:50px;
}


#page_header_title {
    font-weight: 100;
    font-size: 50px;
    letter-spacing: 3px;
    /* font-family: 'bebas neue'; */
    font-family: 'Staatliches';
    color: #666565;
}


















#customers {
  /* font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; */
  font-family: Lato;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  border: 1px solid #F5F2EB; 
}

#customers td, #customers th {
  border-bottom: 1px solid  #F5F2EB;;
  padding: 8px;
}

.table_product {
    padding:30px 10px !important;
}

#customers tr {width:100%;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #F5F2EB;
  color: #666565;
  text-align: center;
  font-weight: 100;
}



@media screen and (max-width: 600px) {
    #product_image {
        width: 100px;
    }
}


.product_name {
	font-weight: bold;
    color: #63584c;
    font-size: 16px;
    text-decoration: none !important;
}

.product_size {
    margin-top: 3px;
    margin-bottom: 0;
    opacity: .7;
    font-size: 14px;
    font-size: 14px;
}












.checkout_box {
    width:100%;
    padding: 31px 10px;
}

.checkout_wrapper {
    display: inline-block;
    float: right;
}


.checkout_btn {
    color: white;
    background-color: #d4651f;
    font-family: Lato;
    padding: 14px 40px;
    font-size: 14px;
    border: 1px solid white;
    transition: 0.2s all ease;
    border-radius: 45px;
    line-height: 1em;
    letter-spacing: 1px;
    cursor:pointer;
}


.total_price {
        display: inline-block;
}

#subtotal {
    font-size: 18px;
    opacity: .8;
    letter-spacing: 1px;
    color: #666565;
}

#price {
    color: #d4651f;
    font-weight: bold;
    font-size: 26px;
}

#paypal {
    
    height: 42px;
    width:164px;
    background-image: url(../../../assets/images/cart/paypal.png) ;
    background-color: #ffc439;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-size: 60%;
    
}



@media screen and (max-width: 600px) {
    .checkout_wrapper {
        display: block;
        float: initial;
    }
}


@media screen and (max-width: 394px) {
    #product_image {
    width: 75px;
}
}


</style>
