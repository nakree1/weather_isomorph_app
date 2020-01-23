const isAuth = (state) => state.auth.isAuth;
const getProfile = (state) => state.auth.profile;
const getStatus = (state) => state.auth.status;

export const authSelectors = {
  getProfile,
  getStatus,
  isAuth
};
