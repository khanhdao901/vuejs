<script setup>
import { ref } from 'vue';
import axios from 'axios';


const product = ref({
  name: '',
  image: '',
  price: '',
  category: 'option1', 
});

const onChange = (e) => {
  product.value = { ...product.value, [e.target.name]: e.target.value };
};

const onSubmit = async (e) => {
  e.preventDefault();

  if (!product.value.name || !product.value.image || !product.value.price || !product.value.category) {
    alert("Không được để trống!");
    return;
  }
    const response = await axios.post('http://localhost:3000/product', product.value);
    alert("Them thanh cong");
   
};
</script>

<template>
  <h2 style="color: red; margin-left: 230px">ADD PRODUCT</h2>

  <form @submit="onSubmit">
    <div class="input-group flex-nowrap">
      <span class="input-group-text" id="addon-wrapping">NAME</span>
      <input 
        type="text" 
        class="form-control" 
        placeholder="Enter name" 
        v-model="product.name"
        name="name"
        @input="onChange"
        aria-label="Product Name" 
        aria-describedby="addon-wrapping"
      />
    </div><br>

    <div class="input-group flex-nowrap">
      <span class="input-group-text" id="addon-wrapping">IMAGE</span>
      <input 
        type="url" 
        class="form-control" 
        placeholder="Enter image URL" 
        v-model="product.image"
        name="image"
        @input="onChange"
        aria-label="Product Image" 
        aria-describedby="addon-wrapping"
      />
    </div><br>

    <div class="input-group flex-nowrap">
      <span class="input-group-text" id="addon-wrapping">PRICE</span>
      <input 
        type="number" 
        class="form-control" 
        placeholder="Enter price" 
        v-model="product.price"
        name="price"
        @input="onChange"
        aria-label="Product Price" 
        aria-describedby="addon-wrapping"
      />
    </div><br>

    <div class="input-group flex-nowrap">
      <span  class="input-group-text" id="addon-wrapping">CATEGORY</span>
      <select 
        class="form-control" 
        v-model="product.category" 
        name="category"
        @change="onChange"
        aria-label="Product Category"
        aria-describedby="addon-wrapping"
      >
        <option value="san pham 1">san pham 1</option>
        <option value="san pham 2">san pham 2</option>
      </select>
    </div><br>

    <button type="submit" class="btn btn-success">Success</button>
  </form>
</template>