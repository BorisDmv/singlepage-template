import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from 'vuetify/lib/util/colors';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);


export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
    theme: {
      themes: {
        light: {
          primary: colors.purple.base, 
          grey: colors.grey.lighten2, 
          dark: colors.grey.darken4, 
        },
      },
    },
  })