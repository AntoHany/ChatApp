const express = require('express');
const message = require('../model/messageSchema');

const router = express.Router();
router.use(express.json());



router.get('/message', async (req, res) => {
  try{ 
    const allMessage = await message.find();
    res.status(200).json(allMessage);
  } catch (err) {
    res.status(500).send(`Internal Server Error ${err}`);
  }
});

router.post('/message', async (req, res) => {
  // console.log(req.body);
  
  try{
    const newMessage = new message(req.body);
    await newMessage.save();
    res.status(200).json({message: 'add message', newMessage});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
})
module.exports = router;