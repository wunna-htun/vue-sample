<!-- About.vue -->
<template>
    <div>
      <h2>Products </h2>
      <ul>
        <li v-for="product in products" :key="product.id"> 
        {{ product.title }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    name: 'UserListPage',
    data(){
      return {
        products:[]
      }
    },
    mounted(){
      this.fetchProducts();
    },
    methods: {

      fetchProducts(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
          .then(res=>{
            console.log("data response ",res)
            this.products=res.data
          })
          .catch(error=>{
            console.error('Error Fetching product :',error)
          })
      }



      
    },
  };
  </script>
  