import passport from 'passport';
import passportGoogle from 'passport-google-oauth';
import { APP_HOSTNAME, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from './index';

const GoogleStrategy = passportGoogle.OAuth2Strategy;

export function configureAuth(app) {
  const strategyOptions = {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${APP_HOSTNAME}/api/auth/google/callback`
  };

  app.use(passport.initialize())
  app.use(passport.session())

  passport.use(new GoogleStrategy(strategyOptions, async (accessToken, refreshToken, profile, done) => {
    done(null, profile); // passes the profile data to serializeUser
  }));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
}
