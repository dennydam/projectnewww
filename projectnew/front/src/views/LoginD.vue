<template>
<v-container>

  <h1>基礎代謝率</h1>
   <div class="mb-5"><h2>基礎代謝率 BMR（Basal Metabolic Rate）</h2>
    <h3>基礎代謝意思是身體為了要維持運作，在休息時消耗掉的熱量。基礎代謝率佔了總熱量消耗的一大部分，大約65-75%左右。會影響到基礎代謝率高低的有很多，像是總體重、肌肉量、賀爾蒙、年齡等。</h3></div>

  <h2>總熱量消耗 TDEE ( Total Daily Energy Expenditure )</h2>
   <h3>身體一整天所消耗掉的熱量。也有人稱為維持體重的熱量，因為當攝取的卡路里 = TDEE，體重會維持。</h3>

   <v-card class="mt-5"
    max-width="800"
    height="150px"
    dark
    >
     <v-card-text>
     </v-card-text>
  </v-card>
  <h1>TDEE熱量計算機與BMR計算機</h1>

  <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="12"
      >
        <v-select
          :items="items"
          label="Standard"
          outlined
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="12"
      >
        <v-select
          :items="items"
          outlined
          label="Filled style"
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="12"
      >
        <v-select
          :items="items"
          label="Outlined style"
          outlined
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="12"
      >
        <v-text-field
          required
        ></v-text-field>
      </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz']
  })
}
</script>
