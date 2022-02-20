<template>
  <v-main>
    <div id="section01">
      <div class="content1">
        <video
          class="dd"
          src="../assets/pexels-mikhail-nilov-7699870.mp4"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        ></video>
      </div>
      <div class="worktext">
        <h1>Sow nothing reap nothing</h1>
      </div>
    </div>
    <div id="section02">
      <div class="container">
        <v-row>
        <v-hover v-slot="{ hover }">
          <v-col cols="6" sm="4">
            <v-img
              src="https://go180.nl/app/uploads/2021/05/GO180-Groningen_36.jpg"
              gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
              width="500px"
              heigh="300px"
            >
            <v-expand-transition>
           <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
            style="height: 100%;"
           >
            $14.99
           </div>
          </v-expand-transition>
           </v-img>
          </v-col>
          </v-hover>

          <v-col cols="6" sm="4" class="img1">
            <v-img
              class="animate__animated animate__bounce animate__delay-1s"
              src="https://go180.nl/app/uploads/2021/05/GO180-Groningen_36.jpg"
              width="300px"
            >
              <div class="fill-height bottom-gradient"></div>
            </v-img>
          </v-col>

          <v-col cols="12" sm="4">
            <div class="text">
            <p>
             Our goal is to make health and fitness attainable, affordable and approachable.
            </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div id="section04">
      <v-container>
        <v-row align-content="center"
              justify="center"
              class="mb-10"
             >
             <p class="abouttext">About us</p>
        </v-row>
        <v-row>
          <v-col>
      <v-parallax
    dark
    src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="text-h4 font-weight-thin mb-4">
         ABOUT FITNESS BLENDER
        </h1>
        <h4 class="subheading">
          Build your application today!
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
  </v-col>
  </v-row>
  </v-container>
    </div>
    <section id="section03">
      <div class="container">
        <div class="row form">
          <div class="col-6">
            <h1>CONTACT US</h1>
          </div>
          <div class="col-6">
            <v-form class="text text--lighten">
              <v-text-field
                v-model="name"
                color="white"
                dark
                :error-messages="nameErrors"
                :counter="10"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                color="white"
                dark
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-container fluid>
                <v-textarea
                  dark
                  shaped
                  filled
                  autocomplete="email"
                  label="建議"
                  color="white"
                ></v-textarea>
              </v-container>
              <!-- <v-btn class="mr-4" @click="submit"> submit </v-btn>
              <v-btn @click="clear"> clear </v-btn> -->
            </v-form>
          </div>
        </div>
      </div>
    </section>
    <v-footer  padless>
      <v-card
        color="primary"
        flat
        tile
        class="indigo lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    <router-view />
  </v-main>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&display=swap');
#section01 {
  position: relative;
  height: 60vh;
}

.container{
  margin-top: 50px;
}
.dd {
  position: absolute;
  left: 0;
  top: -80px;
  width: 100%;
  height: 110%;
  object-fit: cover;
}

#section02 {
  color: white;
  width: 100%;
  height: 500px;
  font-family: 'Lobster', cursive;
  font-size: 2rem;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}

.img1{
  text-align: center;
  padding-left:100px;
}

.v-main {
  background-color: #0d1e25;
}

.worktext {
  font-size: 2.5rem;
  width: 100%;
  position: absolute;
  text-align: center;
  left: 0;
  color: white;
}

.form {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#section03 {
  text-align: center;
  color: white;
}

.text-white {
  color: white !important;
}

.text-green {
  color: white !important;
}

.container2 {
  width: 80%;
  min-width: 450px;
  margin: 0 auto;
}

.abouttext{
  font-size: 5rem;
  color: white;
}
// #section04
//   margin-top: -200px
//

</style>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'

    ]
  }
  )
}
</script>
