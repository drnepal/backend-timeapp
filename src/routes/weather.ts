// import express, { Request, Response } from 'express';
// import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

// const router = express.Router();

// // ✅ Separate handler to avoid overload issue
// const weatherHandler = async (req: Request, res: Response): Promise<void> => {
//   const lat = req.query.lat as string;
//   const lon = req.query.lon as string;
//   const units = req.query.units as string;

//   if (!lat || !lon || !units) {
//     res.status(400).json({ error: 'Missing lat, lon, or units' });
//     return;
//   }

//   try {
//     const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
//       params: {
//         lat,
//         lon,
//         units,
//         appid: process.env.WEATHER_API_KEY,
//       },
//     });

//     res.json(response.data);
//   } catch (error) {
//     console.error('Weather API error:', error);
//     res.status(500).json({ error: 'Failed to fetch weather data' });
//   }
// };

// // ✅ Register the handler separately (fixes TS overload issue)
// router.get('/weather', weatherHandler);

// export default router;
import express from 'express';
const router = express.Router();

router.get('/weather', (req, res) => {
  res.json({ message: 'Here is your weather!' });
});

export default router;
