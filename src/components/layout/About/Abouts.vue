<template>

  <div class="abouts_wrapper">
    <div class="container">
        <div class="section">
            <div>
                <div id="pir_title">
                    <p>OUR STORY</p>
                    <p>Homegrown and</p>
                    <p>Locally Owned</p>
                </div>
                <div>
                    Laced up was founded in 2016 as a small shop in Albany New York. Serial Entrepreneurs Andrew and Phillip Pevzner 
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
                    We are extremely grateful for everyone that has helped us get to where we are now, and look forward to a bright future of continued expansion.
                </div>
            </div>
            <img id="groud_photo" width="420" src="../../../assets/images/about/group.jpg">
        </div>
        <div class="section">
            <div class="stats_container_grid">
                <div class="stats_container_grid_item_wrapper">
                <div class="stats_container_grid_item">
                    <div class="stats_grid_item_img" >
                        <h1 class="stats_item_num">3</h1>
                        <p class="stats_item_name">STORES</p>
                    </div>
                </div>
                </div>

                <div class="stats_container_grid_item_wrapper">
                <div class="stats_container_grid_item">
                    <div class="stats_grid_item_img" >
                        <h1 class="stats_item_num">21</h1>
                        <p class="stats_item_name">EMPLOYEES</p>
                    </div>
                </div>
                </div>

                <div class="stats_container_grid_item_wrapper">
                <div class="stats_container_grid_item">
                    <div class="stats_grid_item_img" >
                        <h1 class="stats_item_num">1,750</h1>
                        <p class="stats_item_name">PRODUCTS</p>
                    </div>
                </div>
                </div>

                <div class="stats_container_grid_item_wrapper">
                <div class="stats_container_grid_item">
                    <div class="stats_grid_item_img" >
                        <h1 class="stats_item_num">38,654</h1>
                        <p class="stats_item_name">Satisfied Customers</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="background_banner"  v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/product/0.jpg`) + ')' }"></div>
            <h1>Six feet down Amsterdam</h1>
            <div class="location_text">
                <p>Our Second & Largest Store, Located in Nyack NY</p>
                <p>Address:</p>
                <p>1530 Palisades Center Drive, West Nyack NY 10994</p>
                <p>Phone: </p>
                <p>(518) 390 - 2901</p>
                <p>Shop Hours:</p>
                <p>Monday - Saturday 10am - 9:30pm</p>
                <p>Sunday: 11am - 7pm</p>
                <p></p>
            </div>
        </div>
        <div class="section">
            <div>
                <div id="pir_title">
                    <p>OUR TEAM</p>
                    <p>The people that</p>
                    <p>Made us possible</p>
                </div>
                <div class="stats_container_grid">
                <div class="stats_container_grid_item_wrapper">
                <div class="stats_container_grid_item">
                    <div class="stats_grid_item_img" >
                        <img id="groud_photo" width="420" src="../../../assets/images/about/group.jpg">
                        <h1 class="stats_item_num">3</h1>
                        <p class="stats_item_name">STORES</p>
                        <p class="stats_item_name">instagram</p>
                    </div>
                </div>
                </div>

                <div class="stats_container_grid_item_wrapper">
                <div class="stats_container_grid_item">
                    <div class="stats_grid_item_img" >
                        <img id="groud_photo" width="420" src="../../../assets/images/about/group.jpg">
                        <h1 class="stats_item_num">3</h1>
                        <p class="stats_item_name">STORES</p>
                        <p class="stats_item_name">instagram</p>
                    </div>
                </div>
                </div>

                <div class="stats_container_grid_item_wrapper">
                <div class="stats_container_grid_item">
                    <div class="stats_grid_item_img" >
                        <img id="groud_photo" width="420" src="../../../assets/images/about/group.jpg">
                        <h1 class="stats_item_num">3</h1>
                        <p class="stats_item_name">STORES</p>
                        <p class="stats_item_name">instagram</p>
                    </div>
                </div>
                </div>

                <div class="stats_container_grid_item_wrapper">
                <div class="stats_container_grid_item">
                    <div class="stats_grid_item_img" >
                        <img id="groud_photo" width="420" src="../../../assets/images/about/group.jpg">
                        <h1 class="stats_item_num">3</h1>
                        <p class="stats_item_name">STORES</p>
                        <p class="stats_item_name">instagram</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <img id="groud_photo" width="420" src="../../../assets/images/about/group.jpg">
        </div>
    </div>
  </div> 
    
</template>

<script>
export default {
  name: "Abouts",
}

console.log('ik ben hier');


</script>


<style scoped>

.abouts_wrapper {
   width:100%;
   background-color: #F3F3F3;
   color: rgb(96, 96, 96);
   height:5000px;
}

.container {
  width: 1170px;
  padding: 0px 15px;
  margin:auto;
  /* display: grid;
  grid-template-columns: auto auto ; */
  background-color:white;
  transform:translateY(-30px);
}

.section {
   padding: 70px 0px;
   /* display: block; */
   width: 100%;
}

.title {
  font-size: 116px;
  margin:0;
  font-family: 'bebas neue';
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
  /* display:inline-block; */
  height:139px;
      width: 71%;
}

.align_text {
      display: inline-block;
}


</style>
