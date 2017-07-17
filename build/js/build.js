window.jQuery = require("jquery");
window.bootstrap = require("bootstrap");
window.$ = jQuery;
window.axios = require("axios");
window.apiConfig = require("./vue/config");

axios.defaults.baseURL = apiConfig.apiURL;
axios.defaults.params = {
  client_id: apiConfig.client.id,
  client_secret: apiConfig.client.secret,
  v: apiConfig.date
}
