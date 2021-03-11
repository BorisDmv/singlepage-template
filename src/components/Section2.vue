<template>
  <v-container fluid>
    <v-row class="text-center">
    

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mt-16 mb-3">
          WHAT WE OFFER
        </h1>

        <v-icon dark class="mt-15 mb-15">arrow_downward</v-icon>
        

        <v-item-group>
          <v-container>
            <v-row>

              <v-col
                v-for="(item, i) in items"
                :key="i"
                cols="12"
                md="4"
              >
                <v-card
                  :color="item.color"
                  dark
                >
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="headline"
                        v-text="item.title"
                      ></v-card-title>

                      <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                      <v-card-actions>
                        <v-btn
                          v-if="item.artist === 'Ellie Goulding'"
                          class="ml-2 mt-3"
                          fab
                          icon
                          height="40px"
                          right
                          width="40px"
                        >
                          <v-icon>mdi-play</v-icon>
                        </v-btn>

                        <v-btn
                          v-else
                          class="ml-2 mt-5"
                          outlined
                          rounded
                          small
                        >
                          START RADIO
                        </v-btn>
                      </v-card-actions>
                    </div>

                    <v-avatar
                      class="ma-3"
                      size="125"
                      tile
                    >
                      <v-img :src="item.src"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>

            </v-row>
          </v-container>
        </v-item-group>
        
      </v-col>

      

     
    
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Section2",

  data: () => ({
    items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ]
  })
};
</script>
