import { Request, Response } from 'express';
import Introduce from '../models/introduce';

class IntroduceController {
  async index(req: Request, res: Response) {
    const introduce = await Introduce.find();
    res.render('introduce', {
      title: 'Giới Thiệu',
      name: introduce[0].name,
      job: introduce[0].job,
      email: introduce[0].email,
      phone: introduce[0].phone,
      web: introduce[0].web,
      address: introduce[0].address,
    });
  }
}
export default new IntroduceController();
