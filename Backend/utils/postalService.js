// utils/postalService.js
const axios = require('axios');

exports.getDistrictByPincode = async (pincode) => {
  const res = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
  if (res.data[0].Status === 'Success' && res.data[0].PostOffice.length > 0) {
    return res.data[0].PostOffice[0];
  } else {
    throw new Error('Invalid Pincode');
  }
};
