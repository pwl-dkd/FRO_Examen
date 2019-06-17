<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layout/Header';

export default {
    name:"app",
    components: {
      Header
    }
}
</script>


<style>
  * {
    box-sizing:border-box;
    margin:0;
    padding: 0;
    /* transition: all .2s ease; */
  }

  body {
    font-family: Arial;
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
