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
                <i class="fas fa-shopping-cart"></i>
                <i class="far fa-user"></i>
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

          <div v-on:click="close_sidenav" id="side_menu" class="side-nav">
                <a href="#" class="btn-close" onclick="closeSlideMenu()">&times;</a>
                <a class="balk-knopies" href="#aboutMe">Over mij</a>
                <a class="balk-knopies" href="#projecten">Projecten</a>
                <a class="balk-knopies" href="#skills">Skills</a>
                <a class="balk-knopies" href="#contact">Contact</a>
            </div>
    </header>
</template>

<script>
export default {
    name: "Header" ,
    methods: {
        open_sidenav : function() {
            console.log('epic open');
            document.getElementById('side_menu').style.width = '250px';
        },
        close_sidenav : function() {
             console.log(' epi close');
            document.getElementById('side_menu').style.width = '0';
        },
    },
    created () {
        window.addEventListener('scroll', this.handleScroll)
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

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 480) {
        document.getElementById("header").setAttribute(
            "style", "background: #D77000; ");

        if (window.innerWidth > 988) {
            document.getElementById("nav").setAttribute(
        "style", "width:70%;          position: absolute; top: 0px; right: 15%;");
            document.getElementById("center").style.display = 'none';
        }

    } else {
        document.getElementById("header").setAttribute(
        "style", "background: #linear-gradient(to bottom, #25211e 0%, rgba(37,33,30,0) 100%);  ");

        if (window.innerWidth > 988) {
            document.getElementById("nav").setAttribute(
            "style", "width:100%;      transform: translate(0%, 0px); ");
            document.getElementById("center").style.display = 'inline-block';
        }
    }


    
}





 

</script>


<style scoped>
    #header {
        background:#333;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        color: #fff;
        /* height: 120px; */
        overflow: hidden;
        background: linear-gradient(to bottom, #25211e 0%, rgba(37,33,30,0) 100%);
        /* text-align: center; */
        transition: all .3s ease;

    }

    .side {
        height: 60px;
        width: 15%;
        background-color: red;
        display: inline-block; 
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
        font-family: Arial, Helvetica, sans-serif;
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
    z-index:1;
    top:0;
    left:0;
    background-color:#D77000;
    /* opacity:0.9; */
    overflow-x:hidden;
    padding-top:60px;
    transition:0.5s;
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
    }


</style>
