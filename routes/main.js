const express = require('express')
const router = express.Router()
const Ajv = require('ajv')

router.get('/', (req, res) => {
   res.render('index')
})

const arrInfo = []

router.post('/ajax', (req, res) => {

   const ajv = new Ajv();
   const schema = {
      type: "object",
      properties: {
         inpname: { type: "string" },
         inptext: {
            type: "string",
            pattern: "^[0-9]{2,21}$"
         },
      },
      additionalProperties: false,
      required: ["inpname", "inptext"],
   };
   const validate = ajv.compile(schema)
   const valid = validate(req.body)
   if (!valid) {
      res.json({ status: 'validate error', error: validate.errors })
      console.log('ERROR!!!!')
   }
   else if (valid) {
      arrInfo.push(req.body)
      console.log(arrInfo)
      res.json(arrInfo)
      console.log('CONFIRMED!!!')
   }
})

module.exports = router