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
                  outlined
                >
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="headline primary--text"
                        v-text="item.title"
                      ></v-card-title>

                      <v-card-subtitle class="text-left grey--text" v-text="item.artist"></v-card-subtitle>

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
          color: '#23273B',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#23273B',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#23273B',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#23273B',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#23273B',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#23273B',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#23273B',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#23273B',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#23273B',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#23273B',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#23273B',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#23273B',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
      ]
  })
};
</script>
