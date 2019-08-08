<template>
	<div>
		<h3>View hotdogs</h3>
		
		<p class="float-right">			
		    <router-link :to="{ name: 'Index' }" class="btn btn-primary">List</router-link>
		    <router-link :to="{ name: 'Edit', params: { id: product._id } }" class="btn btn-warning">Edit</router-link>
		    <router-link :to="{ name: 'Delete', params: { id: product._id } }" class="btn btn-danger">Delete</router-link>
		</p>
	
		<div class="row">
			<div class="col-md-3">
				<img :src="/uploads/+product.image" style="height: 100px;">
			</div>
			<div class="col-md-9">
				<table class="table table-hover" style="width: 100%;">
				  <tbody>
					<tr>
					  <th scope="col">ID</th>
					  <th scope="col">{{product._id}}</th>
					</tr>
					<tr>
					  <th scope="col">Image</th>
					  <th scope="col">{{product.image}}</th>
					</tr>
					<tr>
					  <th scope="col">Title</th>
					  <th scope="col">{{product.title}}</th>
					</tr>
					<tr>
					  <th scope="col">Size</th>
					  <th scope="col">{{product.size}}</th>
					</tr>
					<tr>
					  <th scope="col">Status</th>
					  <th scope="col">{{product.status}}</th>
					</tr>			
				  </tbody>
				</table>
			</div>
		</div>
    </div>
</template>
<script>
  import axios from 'axios'

  export default {
	data() {
		return {
			product: {},
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
        axios.get('http://localhost:3000/api/product/'+this.$route.params.id)
        .then((response) => {
		  console.log(response);
          this.product = response.data
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>