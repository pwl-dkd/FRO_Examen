<template>
  <div id="app">
    <Brands />
    
  </div>
</template>

<script>

import Brands from '../components/layout/Brands/Brands';


export default {
  name: 'Brand',
  components: {
    Brands,
  }
}
  
</script>

<style>
.height-box {
  border: 1px solid black;
  width: 100px;
  height: 5000px;
}

  * {
    box-sizing:border-box;
    margin:0;
    padding: 0;
  }

  body {
    font-family: Lato;
    line-height: 1.4
  }

  .btn {
    background: #555;
    display: inline-block;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>
