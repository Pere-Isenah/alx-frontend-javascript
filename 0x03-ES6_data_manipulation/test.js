const axios = require("axios");

axios
  .get("https://animepahe.ru/api?m=new&id=5289")
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Error:", error));
