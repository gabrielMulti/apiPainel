import express from 'express'
const cors=require("cors");


import { Router, Request, Response } from 'express';

import routes from './routes/Routes';

const app = express();

const route = Router()

const corsOptions ={
   origin:'*',
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(express.json())
app.use(cors(corsOptions));

app.use('/', route)

route.use('/', routes)

app.listen(3333, () => 'server running on port 3333')