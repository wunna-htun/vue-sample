<!-- About.vue -->
<template>
    <div>
      <h2>Add Products</h2>

      <form @submit.prevent="addProduct">
        <label for="name">name</label>
        <input type="text" id="name" v-model="product.name">
        <label for="price" >price</label>
        <input type="number" id="price" v-model="product.price">
        <button type="submit">Add Product</button>


      </form>
      
    </div>
  </template>
  
  <script>

  export default {
    name: 'UserEditPage',
    data(){
      return {
        product:{
          name:'',
          price:null
        }
      }
    },
    mounted(){
    },
    methods: {

      async addProduct(){
        try{
          const response = await fetch('http://localhost:3000/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.product)

        });
        console.log("response",response)


        }catch(error){
          console.log("error ",error)
        }
      }

    


      
    },
  };
  </script>
  