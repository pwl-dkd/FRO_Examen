<template>

  <div class="banner_background">
    <div class="grid">
      <div>
        <img id="logo" width="420" src="../../../assets/images/about/logo.png">
      </div>
      <div id="about_text_div">
        <h1 id="about" class="title" >ABOUT</h1>
        <div >
          <div class="align_text" id="us_en_text">
            <h1 id="us" class="title" >US</h1>
          </div>
          <div class="align_text"  id="text">
            Laced Up is one of the biggest names in the Streetwear World. 
            The Creators of the Original Hypebeast Mystery Box, and purveyors
            of Authentic Bape, Supreme, Jordan, Yeezy, and all the streetwear
            you could ever need!
            <br>
            <br>
            Stop into one of our 3 New York retail locations to shop a curated 
            selection of authentic Hype Products, or shop online 24/7 for selection
              from all 3 stores, and worldwide shipping!
          </div>
        </div>
      </div>
    </div>
  </div> 
    
</template>

<script>
export default {
  name: "Banner",
}


</script>


<style scoped>

.banner_background {
  width:100%;
   background-color: #131313;
   color: white;
   padding-top:120px;
   padding-bottom: 40px;
}

.grid {
  width: 1170px;
  margin:auto;
  display: grid;
  grid-template-columns: auto auto ;
}

#about_text_div {
      padding-left: 25%;
}

.title {
  font-size: 116px;
  margin:0;
  /* font-family: 'bebas neue'; */
  font-family: 'Staatliches';
  line-height: 1;
}

#about {
  color: rgb(47, 72, 75);
}

#us {
  color: rgb(255, 211, 1);
  
}

#us_en_text {
  float: left;
  height: 100%;
}

#text {
  height:139px;
      width: 71%;
}

.align_text {
      display: inline-block;
}

@media screen and (max-width: 1200px) {
    .grid {
        width: 100%;
    }
    #logo {
      margin-left:5px;
    }
    #about_text_div {
        padding-left: 15%;
  }
}

@media screen and (max-width: 980px) {
  .title {
    font-size: 90px;
  }

  .grid {
    grid-template-columns:auto ;
  }
  #about_text_div {
    margin-top:50px;
    padding-left:3%;
    width: 100%;
    margin-bottom:50px;
  }

  #text {
      height:auto;
      width: 78%;
  }

}




/* @media screen and (max-width: 505px) {

  #text {
      height:auto;
      width: 80%;
  }

} */














</style>
