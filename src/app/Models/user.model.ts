import { Schema, model } from 'mongoose';
import IUser from '../interfaces/user.interface';

const userSchema = new Schema<IUser>({
  name: {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
    },
    middleName: String,
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
    },
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  photo: {
    type: String,
    required: [true, 'Photo is required'],
  },
  userRole: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  userStatus: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
});

// query middleware before finding data
userSchema.pre('find', function (next) {
  this.find({ userStatus: { $ne: 'inactive' } });
  next();
});
// query middleware before finding data
userSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { userStatus: { $ne: 'inactive' } } });
  next();
});
// query middleware before finding data
userSchema.pre('findOne', function (next) {
  this.findOne({ userStatus: { $ne: 'inactive' } });
  next();
});

const User = model<IUser>('User', userSchema);
export default User;
