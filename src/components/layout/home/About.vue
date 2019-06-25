<template>

  <div class="container">
    <div class="container_item img">
        <!-- aaaaaaaaaaaaaa -->
        </div>
    <div class="container_item text">
      <!-- <p>hallo</p> -->
        <h2 class="container_header_title">Brand History</h2> 
        <h4 class="container_header_subtitle"><p>Laced Up is one of the biggest names in the Streetwear World. The Creators of the Original  Hypebeast Mystery Box, and purveyors of Authentic Bape, Supreme, Jordan, Yeezy, and all the streetwear you could ever need!</p></h4>
    <button>LEARN MORE</button>
    </div>

    
  </div> 
    
</template>

<script>
export default {
  name: "About",

}

console.log('hallo');

</script>


<style scoped>
.container {
    background-color:#F5F2EB;
    width: 100%;
    height: 545px;
}

.container_item{
    width: 50%;
    height: 100%;
    display: inline-block;
}

.img {
    background-image: url(../../../assets/images/home/about.jpg) ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.text{
  padding: 150px 60px; 
  float: right;
}

.container_header_title {
  font-weight: 100;
  font-size: 50px;
  font-family: 'bebas neue';
  color:#63584C;
}

.container_header_subtitle {
  font-family: sans-serif;
  color:#6665659c;
  font-size:20px;
  font-weight: 100;
}

.container_header_subtitle p {
      width: 500px;
      float: left;
  }


.container_item button{
  color: white;
  background-color:#d4651f;
  margin-top: 24px;
  font-family: Lato;
  padding: 14px 40px;
  font-size: 14px;
  border:1px solid white;
  transition: 0.2s;
  border-radius: 45px;
  line-height: 1em;
  letter-spacing: 1px;
}


.container_item button:hover{
    background-color:#d4814d;
}

@media screen and (max-width: 1200px) {
  .container_header_subtitle p {
      width: 100%;
      /* float: left; */
  }
}


@media screen and (max-width: 980px) {
  .container {
    height: auto;
  }

  .container_item {
    display: block;
    width: 100%;
  }

  .img{
    height: 382px;
  }

  .text {
    padding:35px;
    height: auto;
    float:none;
    text-align: center;
  }
  
  .container_header_subtitle p {
      width: 100%;
      float: left;
  }

}



  
</style>
