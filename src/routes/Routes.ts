import express from 'express'
import { Controller } from '../controllers/index'
import authMiddleware from '../middlewares/auth';

const routes = express.Router()

routes.post('/createAction',authMiddleware , Controller.createAction);
routes.get('/readActions',authMiddleware , Controller.readActions);
routes.put('/updateActions',authMiddleware , Controller.updateActions);
routes.delete('/deleteActions',authMiddleware , Controller.deleteActions);

routes.post('/createUser', Controller.createUser);
routes.post('/userAuthenticate', Controller.authenticate);
routes.post('/sendEmail', Controller.sendEmailConfirmation);
routes.post('/resetPassWord', Controller.resetPassword);
routes.get('/activeUser', Controller.activeUser);
routes.get('/formReset', Controller.renderResetPassword);
routes.get('/getUser', Controller.getUser);


export default routes