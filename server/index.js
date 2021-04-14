const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/representatives', (req, res) => {
      axios({
        method: 'get',
        url: `http://whoismyrepresentative.com/getall_reps_bystate.php?state=${req.query.state}&output=json`,
        headers: { 
            'Access-Control-Allow-Origin' : '*',
            'Content-Type': 'application/json'
          }
    })
    .then( ({ data }) => {
        res.status(200).json(data);
    })
    .catch( (err) => {
        console.log('get req axios error for reps', err);
        res.status(404).json(`Failed to get your state representatives' information`);
    })
  });

  app.get('/senators', (req, res) => {
      axios({
          method: 'get',
          url: `http://whoismyrepresentative.com/getall_sens_bystate.php?state=${req.query.state}&output=json`,
          headers: { 
            'Access-Control-Allow-Origin' : '*',
            'Content-Type': 'application/json'
          }
      })
      .then(({data}) => {
          res.status(200).json(data);
      })
      .catch((err) => {
        console.log('get req axios error for reps', err);
        res.status(404).json(`Failed to get your state senators' information`);
      })
  })

app.listen(3055, ()=> console.log('Server is listening on 3055'));