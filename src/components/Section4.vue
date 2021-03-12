<template>
  <v-container fluid class="mb-16">
    <v-row class="text-center">
    

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mt-16 mb-3">
          CONTACT US
        </h1>
        <p class="title font-weight-regular grey--text">
         Our mail: contact@name.com
        </p>

        <v-icon dark class="mt-15 mb-15">arrow_downward</v-icon>


        <v-sheet
          class="mx-auto transparent"
          elevation="8"
          max-width="800"
        >
        <v-form
          ref="form"
          class="pt-8 pl-8 pr-8 pb-8"
          lazy-validation
        >
          <v-text-field
            dark
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
          dark
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            dark
            :counter="50"
            :rules="messageRules"
            label="Message"
            required
          ></v-text-field>


          <v-btn
            color="primary"
            class="mr-4"
          >
            SEND MESSAGE
            <v-icon right dark class="mt-15 mb-15">send</v-icon>
          </v-btn>

        </v-form>
        </v-sheet>


      </v-col>
     
    
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Section4",

  data: () => ({
      
  })
};
</script>
