<template>

  <div class="abouts_wrapper">
    <div class="container">
        <div class="section">
            <div id="about_text">
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
            <img class="groud_photo" id="groud_photo_image" width="420" src="../../../assets/images/about/group.jpg">
            <div  class="groud_photo" id="groud_photo_div" width="420" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/about/group.jpg`) + ')' }"></div>
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
        <div id="location_section" class="section">
            <div class="location_header"><h1>Six feet down Amsterdam</h1></div>
            <div class="location_text">
                <p>Our Second & Largest Store, Located in Nyack NY</p>
                <p>Address:</p>
                <p>1530 Palisades Center Drive, West Nyack NY 10994</p>
                <p>Phone: </p>
                <p>(518) 390 - 2901</p>
                <p>Shop Hours:</p>
                <p>Monday - Saturday 10am - 9:30pm</p>
                <p>Sunday: 11am - 7pm</p>
            </div>
            <img class="Location_image" id="Location_image_image" width="420" src="../../../assets/images/about/maps.png">
            <div class="Location_image" id="Location_image_div" width="420" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/about/maps.png`) + ')' }"></div>
        </div>
        <div class="section">
            <div v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/about/store.jpg`) + ')' }" class="store_image">

            </div>
        </div>
        <div class="section">
            <div id="our_people_header">
                <p>OUR STORY</p>
                <p>Homegrown and</p>
                <p>Locally Owned</p>
            </div>
            <div class="founder_grid">

                <div class="founder_wrapper">
                    <div class="founder_img_text">
                        <div class="founder_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/about/founders/1.jpg`) + ')' }"></div>
                        <div class="founder_info">
                            <p>Dave</p>
                            <p>Co-founder</p>
                            <p>@<span class="founder_ig">barackobama</span></p>
                        </div>
                    </div>
                </div>

                <div class="founder_wrapper">
                    <div class="founder_img_text">
                        <div class="founder_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/about/founders/2.jpg`) + ')' }"></div>
                        <div class="founder_info">
                            <p>etika</p>
                            <p>Co-founder</p>
                            <p>@<span class="founder_ig">barackobama</span></p>
                        </div>
                    </div>
                </div>

                <div class="founder_wrapper">
                    <div class="founder_img_text">
                        <div class="founder_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/about/founders/3.jpg`) + ')' }"></div>
                        <div class="founder_info">
                            <p>Armoo</p>
                            <p>District Manager</p>
                            <p>@<span class="founder_ig">barackobama</span></p>
                        </div>
                    </div>
                </div>

                <div class="founder_wrapper">
                    <div class="founder_img_text">
                        <div class="founder_img" v-bind:style="{ backgroundImage:  'url(' + require(`../../../assets/images/about/founders/4.jpg`) + ')' }"></div>
                        <div class="founder_info">
                            <p>Trevis</p>
                            <p>Marketing Manager</p>
                            <p>@<span class="founder_ig">barackobama</span></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  </div> 
    
</template>

<script>
export default {
  name: "Abouts",
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
   padding: 40px 0px;
   /* display: block; */
   width: 100%;
}

#about_text {
        width: 60%;
    display: inline-block;
}

.groud_photo {
    float: right;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#groud_photo_div {
        display: none;
    }



#pir_title { 
	color:black;
	text-align:right;
}

#pir_title p:nth-child(1) {
	margin:0 ;
	font-size: 14px;
    color:rgb(181, 181, 181);
}

#pir_title p:nth-child(2) {
	margin:0 ;
	font-size: 18px;
}

#pir_title p:nth-child(3) {
	margin:0 ;
	font-size: 28px;
}



@media screen and (max-width: 1200px) {
    .groud_photo {
        width: 45%;
    }

    #about_text {
        width: 50%;
        display: inline-block;
    }
}

@media screen and (max-width: 780px) {

    #pir_title { 
        color:black;
        text-align:center;
        margin-bottom:20px;
    }

    .groud_photo {
        margin-top:20px;
        width: 100%;
        /* height: calc(auto * 0.8); */
        height: 48vh;

    }

    #about_text {
        width: 100%;
        display: block;
    }
}

@media screen and (max-width: 600px) {

    .groud_photo {
        margin-top:20px;
        width: 100%;
        /* height: calc(auto * 0.8); */
        height: 38vh;
    }

    #groud_photo_image {
        display: none;
    }

    #groud_photo_div {
        display: block;
    }

}
















.section_text {
	font-size:18px;
}

#stats_section {
	padding:0px !important;
}

.stats_container_grid_item_wrapper {
    padding: 67px 0;
}

.stats_container_grid {
    /* background-image: url('https://images.unsplash.com/photo-1504051569746-b952af8e65e7'); */
    /* background-image: url('https://images.unsplash.com/photo-1504051569746-b952af8e65e7'); */
    background-image: url(../../../assets/images/about/background.png) ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width:100%;
    display:grid;
    justify-items: center;
    grid-template-columns: auto auto auto auto;
}

.stats_grid_item_img {
text-align:center;
color:white;
}

.stats_item_num {
    font-size:55px;
}

@media screen and (max-width: 700px) {
    .stats_container_grid {
        grid-template-columns: auto auto ;
    }

    .stats_container_grid_item_wrapper {
        padding: 40px 0;
    }

    .stats_item_num {
        font-size:40px;
    }
    
}






















#location_section {
    padding-top: 0px;
}

.location_header {
    width: 100%;
    text-align:center;
    font-weight: 100;
    font-size: 40px;
    /* font-family: 'bebas neue'; */
    font-family: 'Staatliches';
    color: #666565;
    margin-bottom: 23px;
}


.location_header h1{
    width: 100%;
    text-align:center;
    font-weight: 100;
    font-size: 40px;
    /* font-family: 'bebas neue'; */
    font-family: 'Staatliches';
    color: #666565;
}


.location_text {
    width: 50%;
    text-align: center;
    display:inline-block;
}

.location_text p{
    font-size: 20px;
}

.location_text p:nth-child(1) {
    color: black; 
    margin-bottom:20px;  
    font-weight: bold;
}


.Location_image {
    float: right;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#Location_image_div {
        display: none;
    }


@media screen and (max-width: 1200px) {
    .Location_image {
        width: 45%;
    }

    #location_text {
        width: 50%;
        display: inline-block;
    }
}


@media screen and (max-width: 780px) {
    .Location_image {
        margin-top:20px;
        width: 100%;
        /* height: calc(auto * 0.8); */
        height: 48vh;
    }

    .location_text {
        width: 100%;
        display: block;
    }

    #Location_image_image {
        display: none;
    }

    #Location_image_div {
        display: block;
    }
}



@media screen and (max-width: 700px) {
    .location_text {
        margin-bottom: 20px;
    }

    .stats_container_grid_item_wrapper {
        padding: 40px 0;
    }
    
}










.store_image {
    width:100%;
    height: 27vh;
    /* background-color: red; */
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}




.founder_grid {
    display: grid;
    grid-template-columns: auto auto auto auto;
}



#our_people_header {
    text-align:center;
    color:black;
    padding-bottom: 45px;
}

#our_people_header p:nth-child(1) {
	margin:0 ;
	font-size: 14px;
    color:rgb(181, 181, 181);
}

#our_people_header p:nth-child(2) {
	margin:0 ;
	font-size: 22px;
}

#our_people_header p:nth-child(3) {
	margin:0 ;
	font-size: 32px;
}

.founder_wrapper {
    padding:15px;
}

.founder_img {
    width:100%;
    height: 395px;
    /* background-color: red; */
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom:15px;
}

.founder_info {
    text-align: center;
}

.founder_info p:nth-child(1) {
    color:black;
}

.founder_info p:nth-child(2) {
	margin:0 ;
}

.founder_info p:nth-child(3) {
	margin-top:10px ;
}

.founder_ig {
	color:#d4651f;
    cursor: pointer;
}

.founder_ig:hover {
	color:#8f4416;
    text-decoration: underline;
    cursor:pointer;
}



@media screen and (max-width: 880px) {

    .founder_grid {
        grid-template-columns: auto auto;
    }
}


@media screen and (max-width: 600px) {

    .founder_wrapper {
        padding-left:5px;
        padding-right:5px;
    }
}



</style>
