<template>
    <div>
        <h2>Edit hotdog</h2>
        <form @submit.prevent>
			<div class="form-group">
				<label for="title">Title</label>
				<input type="text" class="form-control" id="title" v-model="product.title">
			</div>
			
			<div class="form-group">
				<label for="size">Size</label>
				<input type="text" class="form-control" id="size" v-model="product.size">
			</div>
			
			<div class="form-group">
				<label for="status">Status</label>
				<input type="text" class="form-control" id="status" v-model="product.status">
			</div>
			
			<div class="form-group">
				<div class="input-group">				
					<div class="custom-file">
						<input type="hidden" v-model="product.image">
						<input type="file" class="custom-file-input" id="image" ref="image" v-on:change="handleFileUpload()">
						<label class="custom-file-label" for="image">Choose file</label>
					</div>
				</div>
			</div>
			
			<p>
				<button type="submit" class="btn btn-primary" v-on:click="editProduct($event)">Submit</button>
				<router-link :to="{ name: 'Index' }" class="btn btn-danger">Cancel</router-link>
			</p>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';

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
				axios.get('/api/product/'+this.$route.params.id)
				.then((response) => {
					console.log(response);
					this.product = response.data
				})
				.catch((err) => {
					console.log(err)
				})
			},
            editProduct(event) {
                if (event) event.preventDefault();
                let url = '/api/product/'+this.$route.params.id;
				
				let form = new FormData();
				form.append('title', this.product.title);
				form.append('size', this.product.size);
				form.append('status', this.product.status);
				form.append('image', this.product.image);
				
                axios.put(url, form, {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}).then((response) => {
					this.$router.push('/')
                }).catch((error) => {
                    console.log(error);
                })
            },
			handleFileUpload(){
				this.product.image = this.$refs.image.files[0];
			}
        }
    }
</script>