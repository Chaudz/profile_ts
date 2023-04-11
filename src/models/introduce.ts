import { Schema, model } from 'mongoose';

interface IIntroduce {
  img: string;
  name: string;
  job: string;
  address: string;
  email: string;
  phone: number;
  web: string;
}

const userSchema = new Schema<IIntroduce>({
  img: { type: String },
  name: { type: String },
  job: { type: String },
  address: { type: String },
  email: { type: String },
  phone: { type: Number },
  web: { type: String },
});

const Introduce = model<IIntroduce>('profile', userSchema);

export default Introduce;
