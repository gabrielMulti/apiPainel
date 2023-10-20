import express from 'express'
import { Controller } from '../controllers/index'

const routes = express.Router()

routes.post('/createAction', Controller.createAction);
routes.get('/readActions', Controller.readActions);
routes.put('/updateActions', Controller.updateActions);
routes.delete('/deleteActions', Controller.deleteActions);


export default routes