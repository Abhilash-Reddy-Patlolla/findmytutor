const axios = require('axios');
const Tuition = require('../models/tution');

 const api = 'https://api.postalpincode.in/pincode/';

exports.getTutionsByPincode = async (req, res) => {
  const { pincode } = req.params;

  if (!/^[0-9]{6}$/.test(pincode)) {
    return res.status(400).json({ error: 'Invalid pincode' });
  }

  try {
    // Step 1: Call postal API
    const postalRes = await axios.get(`${api}${pincode}`);
    const data = postalRes.data;

    if (data[0].Status !== 'Success' || !data[0].PostOffice || data[0].PostOffice.length === 0) {
      return res.status(404).json({ error: 'Pincode not found' });
    }

    const { District, State, } = data[0].PostOffice[0];

    // Step 2: Query tuition collection
    const tuitions = await Tuition.find({
      location: { $regex: new RegExp(District, 'i') }, // partial match, case-insensitive
    });

    return res.json({ district: District, state: State, tuitions });
  } catch (err) {
    console.error('Postal lookup failed:', err.message);
    res.status(500).json({ error: 'Server error while fetching tuitions by pincode' });
  }
};

