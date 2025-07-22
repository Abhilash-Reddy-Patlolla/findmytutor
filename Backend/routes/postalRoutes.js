const express = require("express");
const { getTutionsByPincode } = require("../controllers/postalController");

const router= express.Router();




 router.get('/by-pincode/:pincode',getTutionsByPincode);


 module.exports = router;


 