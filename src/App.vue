<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default {
    name:"app",
    components: {
      Header,
      Footer
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
    font-family: Lato, Arial;
    line-height: 1.4;
    bavkground-color:black;
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
