// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
//
// import routing from '../../config/routing';
// import { authSelectors } from '../../modules/auth/authSelectors';
// import { REQUEST } from '../../config/constants';
//
//
// export default function(OriginalComponent) {
//   const AuthGuardHOC = (props) => {
//     const classes = useStyles();
//     const isAuth = useSelector(authSelectors.isAuth);
//     const { status } = useSelector(authSelectors.getLogin);
//
//     if (isAuth) {
//       return <OriginalComponent {...props} />;
//     }
//
//     if (status === REQUEST) {
//       return (
//         <Backdrop className={classes.backdrop} open={true}>
//           <CircularProgress color="inherit" />
//         </Backdrop>
//       );
//     }
//
//     return <Redirect to={routing().root} />;
//   };
//
//   return AuthGuardHOC;
// }
