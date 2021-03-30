// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const Ul = styled.ul`
//   list-style: none;
//   display: flex;
//   flex-flow: row nowrap;
//   position: relative;
//   bottom: 14px;
//   right: 10px;
//   TE li {
//     padding: 18px 10px;
//     text-decoration: none;
//   }
//   @media (max-width: 1200px) {
//     flex-flow: column nowrap;
//     background-color: #3d3d3d;
//     position: fixed;
//     transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
//     top: 90px;
//     right: 0;
//     transition: transform 0.25s;
//     z-index: 1;

//     li {
//       color: #fff;
//     }
//   }
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: #ccc;
//   font-size: 25px;
//   padding: 15px 0 5px 15px;

//   &:focus,
//   &:hover,
//   &:visited,
//   &:link,
//   &:active {
//     text-decoration: none;
//   }
// `;

// const RightNav = ({ open }) => {
//   return (
//     <Ul open={open}>
//       <StyledLink to='/'>Home</StyledLink>
//       <StyledLink to='/'>Home</StyledLink>
//       <StyledLink to='/'>Home</StyledLink>
//       <StyledLink to='/'>Home</StyledLink>
//     </Ul>
//   );
// };

// export default RightNav;
