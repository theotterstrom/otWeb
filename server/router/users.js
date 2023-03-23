const express = require('express');
const router = express.Router();
const { Users } = require('../models')

router.get('/:username', async (req, res) => {
    const { username } = req.params;
  
    await Users.findOne({ where: { username }})
      .then(user => {
        if (!user) {
          res.status(200).json({ message: `User not found.` });
        } else {
          res.status(200).json(user);
        }
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while processing your request.' });
      });
  });

router.post('/', async (req, res)=>{
    const post = req.body;
    const un = req.body.data?.userName;
    await Users.create(post);
    res.json(post);
});

module.exports = router;