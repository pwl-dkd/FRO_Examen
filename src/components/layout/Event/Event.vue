<template>

  <div class="abouts_wrapper">
    <div class="container">
        <div v-bind:key="event.id" v-for="event in events" class="section">
            <div id="about_text">
                <div id="pir_title">
                    <p>12-06-19 <span> - </span> 17-06-19</p>
                </div>
                <div>
                    <!-- hallo  -->
                    {{event.body}}
                    <!-- Laced up was founded in 2016 as a small shop in Albany New York. Serial Entrepreneurs Andrew and Phillip Pevzner 
                    Opened in June 2016 with less than a hundred pairs of shoes and no experience in retail whatsoever. They built the 
                    first storefront all by hand with fixtures from Craigslist, materials from Home Depot, and help from friends and 
                    family.
                    <br>
                    <br>
                    Through 3 years of Amazing Staff, countless hours of work, and lots of luck, Laced Up has grown to 3 retail locations,
                    worldwide recognition, and a team of over 20 talented people.&nbsp;
                    <br>
                    <br>
                    Laced Up Palisades was our 2nd store and 
                    opened in March of 2017, and we opened our Flagship NYC location in Queens in September of 2018.
                    <br>
                    <br>
                    We are extremely grateful for everyone that has helped us get to where we are now, and look forward to a bright future of continued expansion. -->
                </div>
            </div>
            <!-- <img class="groud_photo" id="groud_photo_image" width="420" src="../../../assets/images/about/group.jpg">
            <div  class="groud_photo" id="groud_photo_div" width="420" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/about/group.jpg`) + ')' }"></div> -->
        </div>
        
    </div>
  </div> 
    
</template>

<script>
import axios from 'axios';
export default {
  name: "Abouts",
    data() {
      return{
        events: []
      }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=30')
        .then(res => this.events = res.data)
        .catch(err => console.log(error));
        console.log(this.events);
    }
}


</script>


<style scoped>

 .abouts_wrapper {
   width:100%;
   background-color: #F3F3F3;
   color: rgb(96, 96, 96);
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




.section {
   padding: 30px 0px;
   /* display: block; */
   width: 100%;
}

#about_text {
        width: 100%;
    display: inline-block;
}





#pir_title { 

  font-size: 50px;
  margin:0;
  /* font-family: 'bebas neue'; */
  font-family: 'Staatliches';
  line-height: 1;
  margin-bottom: 10px;
}

#pir_title span {
	margin:0 ;
    color: #D4641F;
}





















</style>
