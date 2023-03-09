import mongoose, { Schema } from 'mongoose';

export interface User {
  name: string;
  surname: string;
  email: string;
  imgUrl: string;
  phone: string;
}

const userSchema = new Schema<User>({
  name: String,
  surname: String,
  email: String,
  imgUrl: String,
  phone: String,
});

export const UserModel = mongoose.model('User', userSchema, 'users');
