import { Router } from 'express';
import passport from 'passport';
import routing from '../../../../../src/config/routing';


export default Router()
  .get('/',
    passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  }))
  .get('/callback', passport.authenticate('google', ),
    (req, res) => {
      return res
        .status(200)
        // .cookie('mock_jwt', 'success', {
        //   httpOnly: true
        // })
        .redirect(routing().weather);
    }
  )
