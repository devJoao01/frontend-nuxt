// ~/services/api.js
import axios from 'axios';

export default {
  async fetchInformations(lang) {
    try {
      const response = await axios.get(`http://localhost/wordpress/wp-json/myportfolio/v1/informations?lang=${lang}`);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao obter dados da API');
    }
  }
};
