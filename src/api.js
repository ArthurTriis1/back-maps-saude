const axios = require('axios');

const api = axios.create({
    baseURL: 'http://dados.recife.pe.gov.br/api/3/action'
})

module.exports = api;