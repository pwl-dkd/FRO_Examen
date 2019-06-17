<template>
    
        <!-- <div id="banner" :style="{ backgroundImage: 'url(' + image + ')' }"> -->
          <!-- <div id="banner" :style="{ backgroundImage: 'url(../../assets/images/normal/1.jpg)' }"> -->
          <div id="banner" >
          <!-- <div> -->
            <!-- <img src="../../assets/images/normal/1.jpg"> -->
            <p>ONE OF A KIND SHOPPING EXPERIENCE</p>
        </div> 
    
</template>

<script>
export default {
  name: "Banner" ,
  data () {
    
    return {
      // mycolor: '#000000'
      image:"../../assets/images/normal/"+Math.floor(Math.random() * 10)+".jpg"
    }
    
  }, 
  // methods: {
  //     generator: function(event){
  //       this.mycolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
  //       document.body.style.background = this.mycolor
  //     }
  //   }
}

// var banner = document.getElementById('banner');

// document.body.style.backgroundImage = "url('../../assets/images/normal/2.jpg')";







</script>


<style scoped>
    #banner {
        background-image: url(../../assets/images/normal/6.jpg) ;
        background-color: #cccccc;
        height: 500px;
        width:100%;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }


</style>
