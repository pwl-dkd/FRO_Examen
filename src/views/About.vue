<template>
  <div id="app">
    <Banner />
    <Abouts />

  </div>
</template>

<script>

import Banner from '../components/layout/About/Banner';
import Abouts from '../components/layout/About/Abouts';


export default {
    name: 'Contact',
    components: {
      Banner,
      Abouts
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
