<script>
  import axios from 'axios'

  export default {
    created() {
      this.fetchData()
    },

    watch: {
      '$route': 'fetchData'
    },

    methods: {
      fetchData() {
        axios.delete('/api/product/'+this.$route.params.id)
        .then((response) => {
			this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>