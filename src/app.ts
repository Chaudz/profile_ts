import express from 'express';
import path from 'path';
import indexRouters from './routers/index';
import introduceRouters from './routers/introduce';
import skillRouters from './routers/skill';
import { connect } from './config/connectDB';
//Init
const app = express();
const port = 3000;
//config views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/'));
//config routerss
app.use('/', indexRouters);
app.use('/', introduceRouters);
app.use('/', skillRouters);
// config static file
app.use(express.static(path.join(__dirname, 'public')));
//connect db
connect();

app.listen(port, () => {
  console.log(`server is runing http://localhost:3000`);
});
