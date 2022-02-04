const express = require('express');
const app = express();
const router = express.Router()

let formSchema = require('../models/form');


router.route('/request').post((req, res) => {
    formSchema.create(req.body, (error, data) => {
      if (error) {
        //return next(error)
        console.error
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });

  module.exports = router;