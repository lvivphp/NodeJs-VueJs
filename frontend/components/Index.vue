<template>
    <div>
		<h3>List hotdogs</h3>
		
		<p class="float-right">			
		    <router-link :to="{ name: 'Index' }" class="btn btn-primary">List</router-link>
		    <router-link :to="{ name: 'Add' }" class="btn btn-success">Add</router-link>
		</p>
	
		<table class="table table-hover" style="width: 100%;">
		  <thead>
			<tr>
			  <th scope="col">#</th>
			  <th scope="col">Image</th>
			  <th scope="col">Title</th>
			  <th scope="col">Size</th>
			  <th scope="col">Status</th>
			  <th scope="col">Action</th>
			</tr>
		  </thead>
		  <tbody>
		  
			<tr v-for="(product, index) in products">
			  <th scope="row">{{index + 1}}</th>
			  <td><img :src="/uploads/+product.image" style="height: 50px;"></td>
			  <td>{{product.title}}</td>
			  <td>{{product.size}}</td>
			  <td>{{product.status}}</td>
			  <td>
				<router-link :to="{ name: 'View', params: { id: product._id } }" class="btn btn-primary">View</router-link>
				<router-link :to="{ name: 'Edit', params: { id: product._id } }" class="btn btn-warning">Edit</router-link>
				<router-link :to="{ name: 'Delete', params: { id: product._id } }" class="btn btn-danger">Delete</router-link>
			  </td>
			</tr>
			
			<tr v-show="products.length==0">
			  <td colspan="6">You do not have any product items</td>
			</tr>
			
		  </tbody>
		</table>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        products: {}
      }
    },

    created() {
      this.fetchData()
    },

    watch: {
      '$route': 'fetchData'
    },

    methods: {
      fetchData() {
        axios.get('http://localhost:3000/api/product/')
        .then((response) => {
          this.products = response.data
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>