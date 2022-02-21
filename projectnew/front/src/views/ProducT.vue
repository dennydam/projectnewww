<template>
<v-container>
  <div id="section01">
      <div class="content1 mt-10 "
       align="center"
      justify="center" >
     <iframe width="560" height="315" src="https://www.youtube.com/embed/3zE5rIdQn38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="worktext">
        <h1>Sow nothing reap nothing</h1>
      </div>
      <v-form
          ref="form"
        >
          <v-text-field
            v-model.number='quantity'
            type="number"
            required
            :state='quantityState'
             min='0'
          >
          </v-text-field>
          <v-btn @click="addCart">加入購物車</v-btn>
        </v-form>
    </div>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      price: 0,
      description: '',
      image: '',
      sell: false,
      category: '',
      quantity: 0
    }
  },
  methods: {
    addCart () {
      this.$store.dispatch('user/addCart', { product: this.$route.params.id, quantity: this.quantity })
    }
  },
  computed: {
    quantityState () {
      return this.quantity === 0 ? null : this.quantity > 0
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/' + this.$route.params.id)
      this.name = data.result.name
      this.price = data.result.price
      this.description = data.result.description
      this.image = data.result.image
      this.sell = data.result.sell
      this.category = data.result.category
      document.title = `${this.name} | 購物網`
      console.log('555')
    } catch (error) {
      console.log(error)
      this.$router.push('/')
    }
  }
}
</script>
