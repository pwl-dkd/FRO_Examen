<template>

  <div class="banner_background">
    <div class="grid">
      
      <div id="about_text_div">
        <h1 id="about" class="title" >OUR</h1>
        <div >
          <div class="align_text" id="us_en_text">
            <h1 id="us" class="title" >EVENTS</h1>
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
   /* background-color: #131313; */
   color: white;
   padding-top:120px;
   padding-bottom: 40px;
   background-image: url(../../../assets/images/events/line.jpg) ;
   background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  /* color: rgb(47, 72, 75); */
  color:rgb(231, 13, 13);
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
