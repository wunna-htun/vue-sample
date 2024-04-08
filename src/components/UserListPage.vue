<!-- About.vue -->
<template>
    <div>
      <h2>Products </h2>

      <button @click="handleClick">Click me</button>

      <ul>
        <!-- <li v-for="product in products" :key="product.id"> 
        {{ product.title }}
        </li> -->
      </ul>
    </div>
  </template>
  
  <script>
import router from '@/router';
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
        axios.get('http://localhost:3000/products')
          .then(res=>{
            console.log("data response ",res)
            this.products=res.data
          })
          .catch(error=>{
            console.error('Error Fetching product :',error)
          })
      },


      handleClick(){
        console.log("go other page")
        router.push('/user-edit')
      }


      
    },
  };
  </script>
  