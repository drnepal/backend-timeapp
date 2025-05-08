// // import { Request, Response, NextFunction } from 'express';
// // import jwt from 'jsonwebtoken';

// // const JWT_SECRET = process.env.JWT_SECRET!;
// // if (!JWT_SECRET) throw new Error('JWT_SECRET not set');

// // export interface AuthRequest extends Request {
// //   user?: { id: string };
// // }

// // export const protect = (req: AuthRequest, res: Response, next: NextFunction): void => {
// //   const authHeader = req.headers.authorization;

// //   if (!authHeader || !authHeader.startsWith('Bearer ')) {
// //     res.status(401).json({ msg: 'Not authorized, token missing' });
// //     return; // ✅ must return void
// //   }

// //   const token = authHeader.split(' ')[1];

// //   try {
// //     const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
// //     req.user = { id: decoded.id };
// //     next(); // ✅ okay
// //   } catch (err) {
// //     res.status(401).json({ msg: 'Token invalid or expired' });
// //     return; // ✅ this must return too
// //   }
// // };
// // src/routes/auth.ts
// import express from 'express';

// const router = express.Router();

// // Temporary placeholder route (you can remove it once auth is ready)
// router.get('/placeholder', (req, res) => {
//   res.json({ message: 'Auth route disabled for now' });
// });

// export default router;
