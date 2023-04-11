import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

router.get('/about', (req, res) => {
  res.send('about Page');
});

export default router;
