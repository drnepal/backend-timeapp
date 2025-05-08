import { Request, Response } from 'express';
import HeardFrom from '../models/HeardFromModel';

export const submitAwareness = async (req: Request, res: Response) => {
  const { heardFrom } = req.body;

  if (!heardFrom) {
    return res.status(400).json({ message: 'heardFrom is required.' });
  }

  try {
    const newEntry = await HeardFrom.create({ heardFrom });
    console.log('✅ Saved heardFrom:', newEntry);
    return res.status(201).json({ message: 'Success', data: newEntry });
  } catch (error) {
    console.error('❌ Failed to save heardFrom:', error);
    return res.status(500).json({ message: 'Server error', error });
  }
};
