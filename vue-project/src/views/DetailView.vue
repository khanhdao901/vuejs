<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();  
const product = ref({});


onMounted(async () => {
  const { id } = route.params;  
  const response = await axios.get(`http://localhost:3000/product/${id}`);
  product.value = response.data;  
});
</script>

<template>
  <div style="margin-left: 230px;">
    <h2 style="color: red;">PRODUCT DETAIL</h2>

    <div v-if="product.name">
      <p>Name: {{ product.name }}</p>
      <p>Price: {{ product.price }}</p>
      <p>Category: {{ product.category }}</p>
      <p>Image: <img :src="product.image" alt="Product Image" width="150" height="150" /></p>
    </div>
  </div>
</template>

<style scoped>

div {
  max-width: 800px;
  margin: 20px auto; 
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


h2 {
  color: #d9534f; 
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: bold;
}


p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 12px;
  color: #333;
}

img {
  border-radius: 8px;
  max-width: 100%;
  height: auto;
  display: block;
  margin-top: 10px;
}


div.v-else {
  text-align: center;
  font-size: 1.2rem;
  color: #888;
  padding: 40px;
}


p strong {
  color: #555; 
}
</style>
