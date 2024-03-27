<template>
  <v-container>
    <v-row>
      <v-col lg="6">
        <div class="language-switcher">
          <button @click="changeLanguage('en')">English</button>
          <button @click="changeLanguage('pt')">Portuguese</button>
        </div>
        <div class="about" v-for="field in fields" :key="field.id">
          <h2>{{ field.title }}</h2>
          <p>{{ field.text }}</p>
        </div>
      </v-col>
      <v-col lg="6">
        <div class="about" v-for="field in fields" :key="field.id">
          <img :src="field.image" alt="Image" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from '~/services/api';

export default {
  data() {
    return {
      fields: {},
      selectedLanguage: 'pt',
    };
  },
  methods: {
    async changeLanguage(lang) {
      try {
        const response = await api.fetchInformations(lang);
        this.fields = response;
        this.selectedLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    }
  },
  mounted() {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.selectedLanguage = storedLanguage;
    }

    this.changeLanguage(this.selectedLanguage);
  }
};
</script>