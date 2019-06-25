<template>
    <header id="header">
        <div style="display:flex">
            <div class="side" id="left">
                <div v-on:click="open_sidenav" class='bread'>
	                <div class="ham"></div>
                    <div class="ham"></div>
                    <div class="ham"></div>
                </div>
            </div>

            <div id=center>
                <div >
                    <p id="text_logo">SixFeetDown</p>
                </div>
            </div> 

            <div class="side"  id="right">
                <i class="icontje fas fa-shopping-cart"></i>
                <!-- <i class="icontje far fa-user"></i> -->
            </div>
        </div>
        <div id="nav">
            <router-link class="header_link" to="/">HOME</router-link>
            <router-link class="header_link" to="/collection">COLLECTION</router-link>
            <router-link class="header_link" to="/brands">BRANDS</router-link>
            <router-link class="header_link" to="/sale">SALE</router-link>
            <router-link class="header_link" to="/events">EVENTS</router-link>
            <router-link class="header_link" to="/contact">CONTACT</router-link>
        </div>

        <div>
            <div  id="side_menu" class="side-nav">
                <!-- <a href="#" class="btn-close" v-on:click="close_sidenav">&times;</a> -->
                <router-link class="balk-knopies" to="/">HOME</router-link>
                <router-link class="balk-knopies" to="/collection">COLLECTION</router-link>
                <router-link class="balk-knopies" to="/brands">BRANDS</router-link>
                <router-link class="balk-knopies" to="/sale">SALE</router-link>
                <router-link class="balk-knopies" to="/events">EVENTS</router-link>
                <router-link class="balk-knopies" to="/contact">CONTACT</router-link>
            </div>
            <div v-on:click="close_sidenav" id="background"></div>
        </div>

    </header>
</template>

<script>
export default {
    name: "Header" ,
    methods: {
        open_sidenav : function() {
            // console.log('open_sidenav');
            let background = document.getElementById('background');

            // console.log(background);

            document.getElementById('side_menu').style.width = '250px';
            background.setAttribute(
                    "style", "background-color:rgba(0, 0, 0, 0.432); width: calc(100% );");
        },
        close_sidenav : function() {
            let background = document.getElementById('background');

            document.getElementById('side_menu').style.width = '0';

            background.setAttribute(
                    "style", "background-color:rgba(0, 0, 0, 0.0); width:0;");
        },
        scroll_header : function () {
            let currentPage = this.$router.currentRoute.name;
            console.log(currentPage);
            let topscroll;
            
            if(currentPage == 'product' || currentPage == 'brand') {
                topscroll = 60;
            } else {
                topscroll = 500;
            }

            
            if (document.documentElement.scrollTop > topscroll ) {

                if(currentPage != 'product' && currentPage != 'brand') {
                    if (window.innerWidth > 764) {
                    document.getElementById("header").setAttribute(
                    "style", "background: #D77000; ");
                    }
                }

                if (window.innerWidth > 988) {
                    
                    document.getElementById("nav").setAttribute(
                    "style", "width:70%;          position: absolute; top: 0px; right: 15%;");
                    
                    document.getElementById("center").style.display = 'none';
                }

                if (window.innerWidth < 988) {
                    
                    document.getElementById("center").style.display = 'inline-block';
                }

                // console.log('if3');

            } else {

                // console.log('else');

                if (window.innerWidth > 764) {
                    if(currentPage != 'product' && currentPage != 'brand') {
                        document.getElementById("header").setAttribute(
                        "style", "background: #linear-gradient(to bottom, #25211e 0%, rgba(37,33,30,0) 100%);  ");
                    }
                }

                if (window.innerWidth > 988) {
                    document.getElementById("nav").setAttribute(
                    "style", "width:100%;      transform: translate(0%, 0px); ");
                    document.getElementById("center").style.display = 'inline-block';
                }
            }
        },
    
        header_background : function () {
          let currentPage = this.$router.currentRoute.name;  
          console.log('curren page van background is '+ currentPage);
            if(currentPage == 'product' && currentPage == 'brand') {      
                document.getElementById("header").setAttribute("style", "background: #D77000; ");
            } else {
                console.log('ecpc else');
                document.getElementById("header").setAttribute(
                "style", " background: linear-gradient(to bottom, #25211e 0%, rgba(37,33,30,0) 100%) !important;  ");
            }
        }
    },
    created () {
        var currentPage = this.$router.currentRoute.name;
        window.addEventListener('scroll', this.scroll_header);
        window.addEventListener('resize', this.scroll_header);
        // window.addEventListener('load', this.header_background);
        window.addEventListener('DOMContentLoaded', this.header_background);
        // this.header_background();
        

    }
}




var header =  document.getElementById("header");
// var text_logo = document.getElementById('text_logo');

// function openSlideMenu(){
//     console.log('open');
//     // document.getElementById('side_menu').style.width = '250px';
//     console.log (document.getElementById('side_menu'));
// }

// function closeSlideMenu(){
//     console.log('close');
//     // document.getElementById('side_menu').style.width = '0';
// }

// openSlideMenu();
// closeSlideMenu();

// window.onscroll = function() {scrollFunction()};

// console.log(header);

// function scrollFunction() {
//     // if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 480) {
//     //     document.getElementById("header").setAttribute(
//     //         "style", "background: #D77000; ");

//     //     if (window.innerWidth > 988) {
//     //         document.getElementById("nav").setAttribute(
//     //     "style", "width:70%;          position: absolute; top: 0px; right: 15%;");
//     //         document.getElementById("center").style.display = 'none';
//     //     }

//     // } else {
//     //     document.getElementById("header").setAttribute(
//     //     "style", "background: #linear-gradient(to bottom, #25211e 0%, rgba(37,33,30,0) 100%);  ");

//     //     if (window.innerWidth > 988) {
//     //         document.getElementById("nav").setAttribute(
//     //         "style", "width:100%;      transform: translate(0%, 0px); ");
//     //         document.getElementById("center").style.display = 'inline-block';
//     //     }
//     // }


    
// }





 

</script>


<style scoped>
    #header {
        /* background:#333; */
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        color: #fff;
        /* height: 120px; */
        overflow: hidden;
        background: linear-gradient(to bottom, #25211e 0%, rgba(37,33,30,0) 100%);
        text-align: center;
        transition: all .3s ease;
        z-index: 1;

    }

    .side {
        padding: 20px;
        height: 60px;
        width: 15%;
        /* background-color: red; */
        display: inline-block; 
    }

    .icontje {
        margin: 0 15px 0 15px;
        margin-top:0;
        font-size:20px;
    }

    .bread {
	    height:30px;
        width:30px;
        display: none;
        cursor:pointer;
    }

    .ham {
	    width: 100%;
        border-radius: 2px;
        border:2px solid white;
    }

    .ham:nth-child(2) {
        margin: 7px 0;
    }

    #right {
        float:right;
        right: 0px;
        position: absolute;
    }

    #center {
        height: 60px;
        width:70%;
        display: inline-block;
        text-align: center;
    }

    #text_logo {
        font-family: "Times New Roman", Times, serif;
        font-weight: 100;
        font-size: 30px;
        padding-top: 10px;
    }

    #nav {
        display:block;
        height: 60px;
        width:100%;
        text-align:center;
    }

    .header_link {
        color: #fff !important;
        display: inline-table;
        font-size: 13px;
        padding: 20px 33px 0px 33px;
        font-weight: 700;
        font-family: Lato, Helvetica, sans-serif;
        text-decoration: none;
    }

    .header_link:hover,.header_link:hover::after{
        color: white !important;
        opacity:1;
    }

    .header_link:after {
        font-family: "Font Awesome 5 Free";
        content: "\f077";
        font-size: 13px;
        display: block;
        opacity:0;
        padding-right: 3px;
        vertical-align: middle;
        font-weight: 900;
        transition: all 0.2s ease;
    }

    .header_link:hover {
        color: white !important;
    }


    
.side-nav{
    height:100%;
    width:0;
    position:fixed;
    z-index:2;
    top:0;
    left:0;
    background-color:#D77000;
    /* opacity:0.9; */
    overflow-x:hidden;
    padding-top:60px;
    transition:0.5s;
}

.balk-knopies {font-family: Lato, Helvetica, sans-serif;}

#background {
    height:100vh;
    width: 0;
    position:fixed;
    z-index:1;
    top:0;
    right:0;
    transition: none;
    /* background-color: rgba(0, 0, 0, 0.432); */
}

.side-nav a{
    border-radius: 3px;
    padding:10px 10px 10px 30px;
    text-decoration:none;
    font-size:22px;
    color:white;
    display:block;
    transition:0.3s;
}

.header_link:after {
        font-family: "Font Awesome 5 Free";
        content: "\f077";
        font-size: 13px;
        display: block;
        opacity:0;
        padding-right: 3px;
        vertical-align: middle;
        font-weight: 900;
        transition: all 0.2s ease;
    }

.side-nav a:hover{
    background-color: #A45500;
    color:white;
}

.side-nav .btn-close{
    position:absolute;
    top:0;
    right:22px;
    font-size:36px;
    margin-left:50px;
}



    @media screen and (max-width:988px) {
        #nav {
            display:none;
        }
        
        .bread {
            display:block;
        }

        #header {
        background:#D77000 ; 
        }
    }

    @media screen and (max-width:764px) {
        #nav {
            background-color:none;
        }

        

    }
    


</style>
