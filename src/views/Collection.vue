<template>
  <div id="app">
    <Collections />

  </div>
</template>

<script>

import Collections from '../components/layout/Collection/Collections';

export default {
    name: 'collection',
    components: {
      Collections,
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
