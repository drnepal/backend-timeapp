import express from 'express';
import User from '../models/User';

const router = express.Router();

router.post('/info', async (req, res) => {
  const { dateOfBirth, sex } = req.body;

  if (!dateOfBirth || !sex) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    const user = new User({ dateOfBirth, sex });
    await user.save();
    res.status(201).json({ message: 'User info saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
