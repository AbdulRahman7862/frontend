import React from 'react'
import Logo from "./Logo"
import NavLinks from './NavLinks'

const Header = () => {
  return (
    <div className='flex justify-around mx-auto w-full'>
        <Logo></Logo>
        <NavLinks></NavLinks>
    </div>
  )
}

export default Header


















// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// const Header = () => {
//   const [selectedItem, setSelectedItem] = useState('Home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const images = ['images/LOGO .png'];

//   const clickHandler = (item) => {
//     setSelectedItem(item);
//     closeMenu();
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   const selectedStyle = {
//     background: 'linear-gradient(89deg, #0048FF 12.75%, #FF6D43 74.83%)',
//     backgroundClip: 'text',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   };

//   return (
//     <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
//       <div className="flex items-center">
//         <img
//           src={images[0]}
//           alt="TechEdge Software Company Logo"
//           className="w-20 h-20 bg-black rounded-full"
//         />
//       </div>

//       <div className="hidden md:flex flex-grow justify-end">
//         <ul className="flex gap-7">
//           <li
//             className={`py-[0.2rem] font-bold not-italic ${
//               selectedItem === 'Home' ? 'border-b-2' : 'text-black'
//             }`}
//             onClick={() => clickHandler('Home')}
//             style={selectedItem === 'Home' ? selectedStyle : {}}
//           >
//             <Link to="/">Home</Link>
//           </li>
//           <li
//             className={`py-[0.2rem] font-bold not-italic ${
//               selectedItem === 'Services' ? 'border-b-2' : 'text-black'
//             }`}
//             onClick={() => clickHandler('Services')}
//             style={selectedItem === 'Services' ? selectedStyle : {}}
//           >
//             <Link to="/services">Services</Link>
//           </li>
//           {/* Add other navigation items similarly */}
//           <li className="h-[2rem] px-[3rem] py-[0.2rem] flex justify-center align-center gap-[10px] rounded-xl bg-gradient-to-r from-[#0048FF] via-[#0048FF] to-[#FF6D43] text-white font-bold not-italic">
//             <Link to="/hire-us">Hire Us</Link>
//           </li>
//         </ul>
//       </div>

//       <div className="block md:hidden" onClick={toggleMenu}>
//         {isMenuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       <ul
//         className={`${
//           isMenuOpen ? 'fixed' : 'hidden'
//         } md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500`}
//       >
//         <li
//           className={`p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600`}
//           onClick={() => clickHandler('Home')}
//           style={selectedItem === 'Home' ? selectedStyle : {}}
//         >
//           <Link to="/">Home</Link>
//         </li>
//         <li
//           className={`p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600`}
//           onClick={() => clickHandler('Services')}
//           style={selectedItem === 'Services' ? selectedStyle : {}}
//         >
//           <Link to="/services">Services</Link>
//         </li>
//         {/* Add other navigation items similarly */}
//         <li className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600">
//           <Link to="/hire-us">Hire Us</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Header;

