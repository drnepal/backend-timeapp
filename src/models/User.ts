import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  password: { type: String },
  dateOfBirth: { type: String },
  sex: { type: String, enum: ['Male', 'Female', 'Other'] },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
