import { Schema, model } from 'mongoose';

interface ISkill {
  nameSkill: string;
  percentSkill: string;
}

const userSchema = new Schema<ISkill>({
  nameSkill: { type: String },
  percentSkill: { type: String },
});

const Skill = model<ISkill>('skill', userSchema);

export default Skill;
