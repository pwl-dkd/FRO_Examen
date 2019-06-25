<template>
    <div>
        <div id="footer">
            <div class="container">
                <div class="collom">
                    <p class="collom_title">THANKS FOR VISITING</p>
                    <p>Come to one of our Three Stores in New York, or shop online 24/7 for New Inventory Updated Every Single Day</p>
                </div>
                <div class="collom">
                    <p class="collom_title">Six feet Down</p>
                    <a href="#">Shopping cart</a>
                    <a href="#">About</a>
                    <a href="#">Collection</a>
                </div>
                <div class="collom">
                    <p class="collom_title">JOIN THE NEWS LETTER</p>
                    <div class="join_mail">
                    <input  type="email" value="" placeholder="Enter email address" >
                    <button>JOIN</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="downfooter">
            <div><span>© 2019 <span>SixFeetDown</span> | <span>Front-end</span> examen | <span>Pawel Dokodo</span> </span></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer" 
}



</script>


<style scoped>

#footer {
    padding: 50px 0 30px 0;
    color: #ffffff;
    background: #454545;
    font-size: 14.5px;
}

.container {
    width: 1170px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 2%;
    margin-right: auto;
    margin-left: auto;
}

.collom {
    padding: 0px 20px 20px 20px;
     width: 33.3333%;
     display: inline-table;
}

.collom_title {
    font-weight: 100;
    font-size: 25px;
    font-family: 'bebas neue';
    margin-bottom:20px !important;
}

.collom p {
    margin:0;
}

.collom a {
    display:block;
    color: #979797;
    text-decoration:none;
    font-size: 14.5px;
}


.collom a:hover {
    display:block;
    color: #757575;
    text-decoration: underline;
}

.join_mail {
    width: 100%;
    font-size: 14.5px;
}

.join_mail input {
    border:none;
    border:1px solid white;
    padding: 14px 30px;
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
    width: 70%;
}

.join_mail button {
    /* width: 20%; */
    padding: 14px 9px;
    border:none;
    border:1px solid #d4651f;
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    background-color:#d4651f;
    color:white;
}

/* .downfooter {
    width: 100%;
    background-color:rgb(44, 44, 44);
    padding: 10px 30px;
}

.downfooter p {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
} */

.downfooter {
    padding: 10px 0;
    color: #ffffff;
    background: rgb(44, 44, 44);
    font-size: 14.5px;
}

.downfooter div {
    width: 1170px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

span span {
    color: #979797;
}

@media screen and (max-width: 1200px) {
    .container{width:940px;}
    .downfooter div{width:940px;}
}

@media screen and (max-width: 970px) {
    .container{width:720px;}
    .downfooter div{width:720px;}
}


@media screen and (max-width: 760px) {
 .container{width:auto;}
 .downfooter div{width:auto;}
 .collom {
     display: block;
     width: 100%;
     }
}


</style>
