import * as express from 'express';
import * as mongoose from 'mongoose';
import { getEnvironmentVariables } from './environments/env';

let app: express.Application = express();

app.listen(5000, ()=>{
    console.log('server is running at port 2611')
});

mongoose.connect(getEnvironmentVariables().db_url,{ useNewUrlParser: true , useUnifiedTopology: true})


      .then(()=> {
          console.log('Mongodb is connected');
      }) 

app.get('api/user/login', (req: any,res,next) => {
    const data = [{name:'testUserName'}];
    res.status (200).send(data);
});

app.get('api/user/signup', (req,res)=>{
    const data = [{name:'testUserName'}]; 
    res.status (200).send(data);
});

