<template>
  <v-footer
    :color="footerBG"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >

      <v-btn
        color="white"
        text
        rounded
        class="my-2"
        @click="tos = true"
      >
        TERMS OF SERVICE
      </v-btn>
      <v-btn
        color="white"
        text
        rounded
        class="my-2"
        @click="pp = true"
      >
        PRIVACY POLICY
      </v-btn>
      <v-col
        class="py-4 text-center white--text"
        :color='footerBG'
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Name</strong>
      </v-col>
    </v-row>




      <div class="text-center">
        <v-dialog
          v-model="tos"
          width="500"
          dark
        >
          <v-card>
            <v-card-title class="headline dark">
              Terms Of Service
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="tos = false"
              >
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>


      <div class="text-center">
        <v-dialog
          v-model="pp"
          width="500"
          dark
        >
          <v-card>
            <v-card-title class="headline dark">
              Privacy Policy
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="pp = false"
              >
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",

  data: () => ({

    footerBG: '#23273B',
    tos: false,
    pp: false

  })
    
};
</script>
