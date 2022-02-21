<template>
  <v-app>
    <v-app-bar color="primary" dark app>
      <v-toolbar-title class="pt-5"
        ><img src="./assets/logo12.png" width="180px" height="80px" alt=""
      /></v-toolbar-title>
      <vv-app-bar-nav-icon></vv-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <!-- <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(n, index) in menu" :key="index" :to="n.url" flat>{{
          n.title
        }}</v-btn>
         <v-list v-if="n.submenu">
            <v-list-item
              v-for="(item, index) in n.submenu"
              :key="index"
              :to="item.url"
            >
               <v-list-item-title> {{ item.itemTitle }}</v-list-item-title>
            </v-list-item>
          </v-list>
      </v-toolbar-items> -->
      <!-- <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menu" :key="item.icon">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu> -->

      <v-toolbar-items class="hidden-sm-and-down" >
        <v-menu v-for="(n, index) in menu" :key="index" open-on-hover offset-y allow-overflow >
          <template v-slot:activator="{ on, attrs }">
            <v-btn :to="n.url" text v-bind="attrs" v-on="on"> {{ n.title }}</v-btn>
          </template>
          <v-list v-if="n.submenu">
            <v-list-item
              v-for="(item, index) in n.submenu"
              :key="index"
              :to="item.url"
            >
              <v-list-item-title> {{ item.itemTitle }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <!-- 註冊 -->
      <div>
        <v-dialog v-model="dialog" persistent max-width="350" color="primary">
          <template v-slot:activator="{ on, attrs2 }">
            <v-btn color="primary" dark v-bind="attrs2" v-on="on"> 註冊 </v-btn>
          </template>
          <v-card color="primary">
            <v-form v-model="valid" @submit.prevent="register" ref="form">
              <v-col cols="12" class="text-center">
                <h4 class="register">註冊</h4>

                <v-text-field
                  dark
                  v-model="form.account"
                  label="帳號"
                  required
                ></v-text-field>
                <v-text-field
                  dark
                  v-model="form.password"
                  label="密碼"
                  type="password"
                  required
                  :rules="inputRules"
                ></v-text-field>
              </v-col>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit">註冊</v-btn>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Disagree
                </v-btn>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Agree
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
      </div>
      <!-- 登入 -->
      <div>
        <v-dialog v-model="dialog2" persistent max-width="350">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Log in
            </v-btn>
          </template>
          <v-card color="primary">
            <v-form v-model="valid" @submit.prevent="login" ref="form2">
              <v-col cols="12" class="text-center">
                <h4 class="register">登入</h4>

                <v-text-field
                  dark
                  v-model="form2.account"
                  label="帳號"
                  required
                ></v-text-field>
                <v-text-field
                  dark
                  v-model="form2.password"
                  label="密碼"
                  type="password"
                  required
                  :rules="inputRules"
                ></v-text-field>
              </v-col>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit">登入</v-btn>
                <v-btn color="green darken-1" text @click="dialog2 = false">
                  Disagree
                </v-btn>
                <v-btn color="green darken-1" text @click="dialog2 = false">
                  Agree
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
      </div>

      <!-- <v-btn to="/About">註冊</v-btn> -->
    </v-app-bar>
    <v-main>
      <!-- <div class="cc">
        <video
          class="dd"
          src="./assets/pexels-mikhail-nilov-7699870.mp4"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        ></video>
      </div> -->

      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    menu: [
      // { index: "1", title: "Home", url:"/about" },
      // {
      //   index: "2",
      //   title: "Let GO",
      //   submenu: [{ itemIndex: "2-1", itemTitle: "Tranning",url:"/about" },
      //             { itemIndex: "2-2", itemTitle: "Tran",url:"/" }
      //            ],

      // },
      // {
      //   index: "3",
      //   title: "count",
      // },
      { index: '1', icon: 'home', title: 'HOME', url: '/' },
      {
        index: '2',
        icon: 'info',
        title: 'Tranning',
        submenu: [{ itemIndex: '2-1', itemTitle: 'Tranning', url: '/about' },
          { itemIndex: '2-1', itemTitle: 'Tranning', url: '/about' }
        ]
      },
      { index: '3', icon: 'warning', title: '管理者', url: '/admin' }
    ],
    dialog: false,
    dialog2: false,
    valid: true,
    form: {
      account: '',
      password: ''
    },
    form2: {
      account: '',
      password: ''
    },
    inputRules: [(v) => !!v || '必填']
  }),
  methods: {
    async register () {
      const valid = this.$refs.form.validate()
      if (!valid) return
      console.log(this.form)
      try {
        await this.api.post('/users', this.form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '註冊成功'
        })
        this.$router.push('/')
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '註冊失敗'
        })
      }
    },
    login () {
      const valid = this.$refs.form2.validate()
      if (!valid) return
      // console.log(this.form2);
      this.$store.dispatch('user/login2', this.form2)
    },
    menuItems () {
      return this.menu
    }
  },
  created () {
    this.$store.dispatch('user/getInfo')
  }
}

// export default {
//   data() {
//     return {
//       valid: true,
//       form: {
//         dialog: false,
//         account: "",
//         password: "",
//       },
//       inputRules: [(v) => !!v || "必填"],
//     };
//   },
//   methods: {
//     async register() {
//       const valid = this.$refs.form.validate();
//       if (!valid) return;
//       try {
//         await this.api.post("/users", this.form);
//         this.$swal({
//           icon: "success",
//           title: "成功",
//           text: "註冊成功",
//         });
//         this.$router.push("/");
//       } catch (error) {
//         this.$swal({
//            icon: "error",
//           title: "失敗",
//           text: "註冊失敗",
//         });
//       }
//     },
//   },
// };
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

.register{
  color: white;
}
</style>
