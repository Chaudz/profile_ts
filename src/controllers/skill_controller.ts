import { Request, Response } from 'express';
import Skill from '../models/skills';

class SkillController {
  async index(req: Request, res: Response) {
    const skill = await Skill.find();
    console.log(skill[0]);
    res.render('skill', {
      title: 'kinang',
      javascript: skill[0],
      html: skill[1],
      css: skill[2],
      csharp: skill[3],
    });
  }
}
export default new SkillController();
