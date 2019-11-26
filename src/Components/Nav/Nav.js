import React from 'react';
// import FontIcon from 'react-native-vector-icons/FontAwesome';
// import { Alert, Image, Dimensions, View, TouchableHighlight, } from 'react-native';
//
// import { withRouter } from 'react-router';
//
// import type, { height, width, isIphoneX } from '../device';
//
// import { Query, Mutation, } from 'react-apollo';
// import { ME, CLEAR_CAPTURE, } from 'queries';
//
// import Avatar from '../Avatar';
// import FadeIn from '../FadeIn';
// import ChooseName from '../ChooseName';
// import Trending from '../Trending';
// import Typography from '../Typography';
// import ForaLogo from '../ForaLogo';
// import Icon from '../Icon';
// import Record from '../Record';
// import ProfileAvatar from '../ProfileAvatar';
//
// import {
//   background2Opaque,
//   canvas1,
//   foraGold,
//   foraPurple,
//   unit,
//   SUBNAV_HEIGHT,
//   borderColor,
//   primaryTextColor,
// } from 'themes';
//
// const nav = {
//   position: 'absolute',
//   // height: SUBNAV_HEIGHT,
//   width: '100%',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   flexDirection: 'row',
//   // opacity: 0.5,
//   top: isIphoneX ? 30 : 20,
//   zIndex: 10,
//   backgroundColor: background2Opaque,
// };
//
// const Nav = (props) => {
//   if (props.location.pathname.toLowerCase() === '/capture') {
//     return null;
//   }
//
//   const value = props.match.isExact ? (
//     <Mutation mutation={CLEAR_CAPTURE}>
//       {(clearCapture) => (
//         <TouchableHighlight onPress={() => {
//             clearCapture();
//         }}>
//             <ForaLogo />
//         </TouchableHighlight>
//       )}
//     </Mutation>
//   ) : (
//     <Typography variant='h6'>
//       {`${props.location.pathname.slice(1,2).toUpperCase()}${props.location.pathname.slice(2)}`}
//     </Typography>
//   );
//
// return (
//   <Query query={ME}>
//     {({ error, loading, data, }) => {
//       return (
//         <React.Fragment>
//           <View style={{ height: isIphoneX ? 30 : 20, backgroundColor: background2Opaque, }} />
//
//           <View style={nav}>
//             {props.match.isExact ? (
//               <View style={{ height: 40, width: 40,}} />
//             ) : (
//               <TouchableHighlight onPress={() => props.history.push('/')}>
//                 <View style={{ padding: unit, }}>
//                   <Icon size={32} source={require('../../public/chevron-left.png')} />
//                 </View>
//               </TouchableHighlight>
//             )}
//
//             {value}
//
//             {data && data.me && data.me.handle ? (
//               <ProfileAvatar />
//             ) : (
//               <TouchableHighlight
//                 style={{ padding: unit, alignItems: 'center', justifyContent: 'center' }}
//                 onPress={() => props.history.push('/auth')}
//               >
//                 <FontIcon name="user-circle" size={30} color={primaryTextColor} />
//               </TouchableHighlight>
//             )}
//           </View>
//         </React.Fragment>
//       );
//     }}
//   </Query>
//   )
// };

export default null;
