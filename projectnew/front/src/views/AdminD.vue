<template>
<v-app>
  <v-container mt-15>
    <v-row>
      <v-col cols="12" class="text-center">

    <v-btn
      rounded
      color="primary"
      dark
      to="/admin/products"
    >
      商品管理
    </v-btn>
    <v-btn
      rounded
      color="primary"
      dark
    >
      訂單管理
    </v-btn>
      </v-col>
    </v-row>
  </v-container>
  <router-view></router-view>
  </v-app>
</template>
