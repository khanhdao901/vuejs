<script setup>
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const product = ref([]);
const product_conditinal = ref('san pham 1');
const router = useRouter();

const product_handle = (value) => {
  product_conditinal.value = value;
};

const product_filter = computed(() => {
  return product.value.filter(item => item.category === product_conditinal.value);
});

onMounted(() => {
  fetch('http://localhost:3000/product')
    .then(response => response.json())
    .then(json => product.value = json);
});

const removeItem = async (id) => {
  const confirm = window.confirm("Are you sure you want to delete this item?");
  if (confirm) {
    await axios.delete(`http://localhost:3000/product/${id}`);
    product.value = product.value.filter(item => item.id !== id);
  }
};


const goToEditPage = (id) => {
  router.push(`/edit/${id}`); 
};

const goToDetailPage = (id) => {
  console.log(`Navigating to detail page with id: ${id}`); 
  router.push(`/detail/${id}`);
};

</script>

<template>
  <h2 style="color: red; margin-left: 230px">LIST PRODUCT</h2>

  <table class="table table-success table-striped-columns">
    <thead>
      <tr>
        <th>LIST</th>
        <th>NAME</th>
        <th>IMAGE</th>
        <th>PRICE</th>
        <th>CATEGORY</th>
        <th>EDIT</th>
        <th>DETAIL</th>
        <th>DELETE</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in product" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td><img :src="item.image" alt="Product Image" width="50" height="50" /></td>
        <td>{{ item.price }}</td>
        <td>{{ item.category }}</td>
        <td><button @click="goToEditPage(item.id)" type="button" class="btn btn-warning">Edit</button></td>
        <td><button @click="goToDetailPage(item.id)" type="button" class="btn btn-secondary">DETAIL</button></td>
        <td><button @click="removeItem(item.id)" type="button" class="btn btn-danger">DELETE</button></td>
      </tr>
    </tbody>
  </table>

  <h2 style="color: red; margin-left: 230px">FILTER PRODUCT</h2>

  <table class="table table-success table-striped-columns">
    <thead>
      <tr>
        <th>LIST</th>
        <th>NAME</th>
        <th>IMAGE</th>
        <th>PRICE</th>
        <th>CATEGORY</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in product_filter" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td><img :src="item.image" alt="Product Image" width="50" height="50" /></td>
        <td>{{ item.price }}</td>
        <td>{{ item.category }}</td>
      </tr>
    </tbody>
  </table>

  <button @click="product_handle('san pham 1')" type="button" class="btn btn-primary">San pham 1</button>
  <button style="margin-left: 10px;" @click="product_handle('san pham 2')" type="button" class="btn btn-primary">San pham 2</button>

  <div v-if="product_conditinal === 'san pham 1'"></div>
  <div v-else-if="product_conditinal === 'san pham 2'"></div>
</template>