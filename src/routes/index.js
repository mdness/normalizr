import { Router } from 'express';
import { random, normalizar, denormalizar } from '../controllers/controller.js'
import { sign, log, home, logOut } from '../controllers/log.js'
import passport from 'passport';
import { loggedIn } from '../middlewares/user.js';

const passportOp = { badRequestMessage: 'Error,' };

const router = Router();

router.get('/productos-random', random);

router.get('/normalizados', normalizar);

router.get('/denormalizados', denormalizar);

router.post('/signedUp', sign);

router.post('/loggedIn', passport.authenticate( 'logIn', passportOp), log);

router.get('/home', loggedIn, home);

router.get('/loggedOut', logOut);


export default router;