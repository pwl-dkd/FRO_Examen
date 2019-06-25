<template>
  <div id="app">
    <Banner />
    <Sellers />
    <About />
    <Gallery />
    <Review />
    <Instagram />
    <!-- <img width="1000px" src="https://images.pexels.com/photos/1502352/pexels-photo-1502352.jpeg"> -->
    <!-- <AddTodo  v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/> -->
    <!-- <div class="height-box">testing</div> -->
  </div>
</template>

<script>

import Banner from '../components/layout/home/Banner';
import Sellers from '../components/layout/home/Sellers';
import About from '../components/layout/home/About';
import Gallery from '../components/layout/home/Gallery';
import Review from '../components/layout/home/Review';
import Instagram from '../components/layout/home/Instagram';

import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import axios from 'axios';


export default {
  name: 'Home',
  components: {
    Banner,
    Sellers,
    About,
    Review,
    Gallery,
    Instagram,
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    deleteTodo(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res =>this.todos = this.todos.filter(todo => todo.id !== id))
      .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      const {title, completed} = newTodo;
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
        .then(res => this.todos = [...this.todos, newTodo, res.data])
        .catch(err => console.log(err));
      
    }
  },
created() {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.todos = res.data)
      .catch ( err => console.log(err));
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
