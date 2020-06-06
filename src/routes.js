const { Router } = require('express');
const api = require('./api')


const routes = Router();

routes.get('/locals', async (req, res) => {
    const resp = await api.get('datastore_search_sql?sql=SELECT%20distinct%20tipo_unidade%20from%20%22d05f6ffa-304b-4a28-bd03-1ffb26cbf866%22')
    return res.json(resp.data)
})


routes.get('/local/:local', async (req, res) => {
    const local = req.params.local;
   // console.log(`datastore_search_sql?sql=SELECT * from "d05f6ffa-304b-4a28-bd03-1ffb26cbf866" where tipo_unidade  like '${local}'`)
    const resp = await api.get(`datastore_search_sql?sql=SELECT * from "d05f6ffa-304b-4a28-bd03-1ffb26cbf866" where tipo_unidade  like '${local.split('|')[0]}%'`,
    {'Content-type': 'application/json;charset=latin1'})
    return res.json(resp.data);
})

module.exports =  routes;