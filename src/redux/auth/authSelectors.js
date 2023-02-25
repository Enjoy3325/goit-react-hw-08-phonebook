export const selectToken = state => state.auth.token;
export const selectIsAuth = state => state.auth.isAuth;
export const selectIsFetchingCurrentUser = state =>
  state.auth.isFethchingCurrentUser;
export const selectName = state => state.auth.user;
