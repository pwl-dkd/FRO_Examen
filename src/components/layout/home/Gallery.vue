<template>

  <div class="container">
    <div class="wrapper" id="item1"><div id="troep1" class="container_item"></div></div>
    <div class="wrapper" id="item2"><div id="troep2" class="container_item" ></div></div>
    <div class="wrapper" id="item3"><div id="troep3" class="container_item"></div></div>
  </div> 
    
</template>

<script>
export default {
  name: "Gallery",
  
}

console.log('hallo');

</script>


<style scoped>
.container {
    /* background-color:red; */
    width: 100%;
    height: 300px;
    display: grid;
    grid-template-columns: auto auto auto ;
}

.wrapper {
    height: 100%; 
    overflow: hidden;
}

.container_item{
    height: 100%; 
    /* border:1px solid black; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-image: url(../../../assets/images/home/wrap1.png) ;  */
    /* background-image: url(../../../assets/images/home/about.jpg) ; */
    transition: all .5s;
}


#troep1{
background-image: url(../../../assets/images/home/wrap1.png) ; 
}

#troep2{
background-image: url(../../../assets/images/home/wrap2.png) ; 
}

#troep3{
background-image: url(../../../assets/images/home/wrap3.jpg) ; 
}


/* #item1 { background-image: url(../../../assets/images/home/wrap1.gif) ; }
#item2 { grid-area: left; }
#item3 { grid-area: right; } */


@media screen and (min-width: 980px) {
    .wrapper:hover .container_item,
    .wrapper:focus .container_item {
    transform: scale(1.2);
    }
}


@media screen and (max-width: 980px) {
    
#item1 { grid-area: top; }
#item2 { grid-area: left; }
#item3 { grid-area: right; }

    .container {
        grid-template-columns: none ;
        /* width: 100%; */
        height: 600px;
        /* display: grid; */
        grid-template-areas:
        'top top'
        'left right';
    }
}


@media screen and (max-width: 550px) {
    .container {
        grid-template-columns: none ;
        /* width: 100%; */
        height: 600px;
        /* display: grid; */
        grid-template-areas:
        'top'
        'left'
        'right';
    }
}




  
</style>
