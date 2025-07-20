const express = require('express');
const { getAllPosts, createPost } = require('../controllers/tutionController');
const router = express.Router();

// routes/tution.js (add below existing routes)
// router.post('/subscribe/:id', async (req, res) => {
//   const userId = req.body.userId; // sent from frontend

//   try {
//     const tuition = await Tuition.findById(req.params.id);
//     if (!tuition) return res.status(404).json({ error: 'Tuition not found' });

//     // Prevent duplicate subscriptions
//     if (!tuition.subscribers.includes(userId)) {
//       tuition.subscribers.push(userId);
//       await tuition.save();
//     }

//     res.status(200).json({ message: 'Subscribed successfully', tuition });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// GET all tuitions
router.get('/', getAllPosts);
router.post('/', createPost);


module.exports = router;
