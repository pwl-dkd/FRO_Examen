<template>
  <div id="app">
    <Ships />

  </div>
</template>

<script>

import Ships from '../components/layout/Shipping/Ships.vue';


export default {
    name: 'Shipping',
    components: {
      Ships,
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
