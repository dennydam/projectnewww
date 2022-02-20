<template>
  <v-card>
    <v-card max-width="250">
      <v-img
        :src="product.image"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="250px"
      >
        <v-card-title> {{ product.name }}</v-card-title>
     </v-img>
    </v-card>
  </v-card>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
