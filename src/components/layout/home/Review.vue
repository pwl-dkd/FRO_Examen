<template>

  <div >
    <div class="container">
      <div v-on:click="open_review" class="container_item img"></div>

      <div class="container_item text">
          <h2 class="container_header_title">Air Jordan Review</h2> 
          <h4 class="container_header_subtitle">
              <p>Check Out the latest Laced Up video on our Youtube Channel</p>
          </h4>
          <button>LEARN MORE</button>
      </div>
    </div>

  <div id="modaal" v-on:click="close_review">
    <span v-on:click="close_review" class="close">&times;</span>
      <iframe id="youtube_video"
       width="1280" height="720" 
        src="https://www.youtube.com/embed/vgyJQ_bzpCY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  </div> 
    
</template>

<script>
export default {
  name: "Review",
  methods: {
    open_review : function() {
      let modaal = document.getElementById("modaal");
      modaal.style.display = "block";
    },
    close_review : function() {
      let modaal = document.getElementById("modaal");
      modaal.style.display = "none";
    }
  }

}

console.log('hallo');

</script>


<style scoped>
.container {
    background-color:#d4651f;
    width: 100%;
    height: 367px;
    /* background-color: red; */
}

.container_item{
    /* width: 50%; */
    height: 100%;
    display: inline-block;

    text-align: right;
}

.img {
    width: 58%;
    cursor: pointer;
    background-image: url(../../../assets/images/home/youtube.jpg) ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.text{
    width: 42%;
    /* padding: 150px 60px;  */
    padding: 100px 60px 150px 60px;
    float: left;
}

.container_header_title {
    font-weight: 100;
    font-size: 50px;
    /* font-family: 'bebas neue'; */
    font-family: 'Staatliches';
    color:White;
}

.container_header_subtitle {
    font-family: sans-serif;
    color:#EFC7AE;
    font-size:18px;
    font-weight: 100;
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
    color: #d4651f;
    background-color:white;
    border:1px solid #d4651f;
}


#modaal {
  display: none; 
  position: fixed; 
  z-index: 1; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh; 
  overflow: auto; 
  background-color: rgb(0,0,0,0.9);
}

.close {
  cursor:pointer;
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  /* font-weight: bold; */
  transition: 0.3s;
}



#youtube_video {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 80vw;
  height:calc(80vw * 0.5625);
  transform: translate(-50%, -50%);
}








@media screen and (min-width: 981px) {
  .container_header_subtitle p {
        width: 400px;
        float: right;
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

   }



  
</style>
