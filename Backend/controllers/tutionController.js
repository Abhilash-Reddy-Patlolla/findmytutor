const tution = require('../models/tution');
const Tuition = require('../models/tution');


exports.getAllPosts = async (req, res) => {
  try {
    const tuitions = await Tuition.find().sort({ postedAt: -1 });
    res.json(tuitions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPost= async (req,res)=>{

    try {
        const {subject, location, schedule, description,postedAt,subscribers } = req.body;
        const posted = new Date(req.body.postedAt);
        const post = new tution({subject, location, schedule, description,posted,subscribers});
       await post.save();
       res.status(201).json(post);
    } catch (error) {
        res.status(400).json(error.message);
        
    }

}