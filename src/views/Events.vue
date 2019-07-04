<template>
  <div id="app">
    <Banner />
    <Event />

  </div>
</template>

<script>

import Banner from '../components/layout/Event/Banner';
import Event from '../components/layout/Event/Event';


export default {
    name: 'Contact',
    components: {
      Banner,
      Event
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

  /* .btn {
    background: #555;
    display: inline-block;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  } */
</style>
