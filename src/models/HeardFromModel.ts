import mongoose, { Schema, Document } from 'mongoose';

export interface IHeardFrom extends Document {
  heardFrom: string;
}

const HeardFromSchema: Schema = new Schema({
  heardFrom: {
    type: String,
    enum: [
      'Youtube',
      'Twitter',
      'Instagram',
      'Facebook',
      'Google',
      'Tiktok',
      'Others',
    ],
    required: true,
  },
}, { timestamps: true });

export default mongoose.model<IHeardFrom>('HeardFrom', HeardFromSchema);
