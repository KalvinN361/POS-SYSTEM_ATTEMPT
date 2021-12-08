// import React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import ButtonBase from '@mui/material/ButtonBase';
// import Typography from '@mui/material/Typography';

// const images = [
//   {
//     url: './images/navtaco.jpg',
//     title: 'Entrees',
//     width: '33%',
//   },
//   {
//     url: './images/milktea.jpg',
//     title: 'Drinks',
//     width: '33%',
//   },
//   {
//     url: './images/churro.jpg',
//     title: 'Desserts',
//     width: '33%',
//   }
// ];

// const ImageButton = styled(ButtonBase)(({ theme }) => ({
//   position: 'relative',
//   height: 200,
//   [theme.breakpoints.down('sm')]: {
//     width: '100% !important', // Overrides inline-style
//     height: 100,
//   },
//   '&:hover, &.Mui-focusVisible': {
//     zIndex: 1,
//     '& .MuiImageBackdrop-root': {
//       opacity: 0.15,
//     },
//     '& .MuiImageMarked-root': {
//       opacity: 0,
//     },
//     '& .MuiTypography-root': {
//       border: '4px solid currentColor',
//     },
//   },
// }));

// const ImageSrc = styled('span')({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center 40%',
// });

// const Image = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: theme.palette.common.white,
// }));

// const ImageBackdrop = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundColor: theme.palette.common.black,
//   opacity: 0.4,
//   transition: theme.transitions.create('opacity'),
// }));

// const ImageMarked = styled('span')(({ theme }) => ({
//   height: 3,
//   width: 18,
//   backgroundColor: theme.palette.common.white,
//   position: 'absolute',
//   bottom: -2,
//   left: 'calc(50% - 9px)',
//   transition: theme.transitions.create('opacity'),
// }));

// export default function ButtonBases() {
//   return (
//     <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
//       {images.map((image) => (
//         <ImageButton
//           focusRipple
//           key={image.title}
//           style={{
//             width: image.width,
//           }}
//         >
//           <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
//           <ImageBackdrop className="MuiImageBackdrop-root" />
//           <Image>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               sx={{
//                 position: 'relative',
//                 p: 4,
//                 pt: 2,
//                 pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
//               }}
//             >
//               {image.title}
//               <ImageMarked className="MuiImageMarked-root" />
//             </Typography>
//           </Image>
//         </ImageButton>
//       ))}
//     </Box>
//   );
// }

// import React from "react";
// // import { Link } from "react-router-dom";
// // imports from material
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import Paper from "@mui/material/Paper";
// import navTaco from '../images/navtaco.jpg';
// import milkTea from '../images/milktea.jpg'
// import churro from '../images/Churro.jpg';
// import { styled } from '@mui/material/styles';
// const Img = styled("Img")({
//   display: "block",
//   maxWidth: "33%",
//   maxHeight: "250px",
// });
// // import './navbar.css'

// export default function Navbar() {
//   const [value, setValue] = React.useState(0);
//   const ref = React.useRef(null);

//   const [dimensions, setDimensions] = React.useState({ 
//     width: window.innerWidth
//   })
//   React.useEffect(() => {
//     function handleResize() {
//       setDimensions({
//         width: window.innerWidth
//       })
//   }
//     window.addEventListener('resize', handleResize)
//   }, [])


//   return (
//     <Box sx={{ pb: 7 }} ref={ref}>
//       {dimensions.width < 1200 ? 
//       (
//       <div>
//       <CssBaseline />

//       <Paper
//         className='bottomNavbarContainer'
//         elevation={3}
//       >
//         <BottomNavigation
//           showlabels="true"
//           value={value}
//           sx={{alignItems:'center'}}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//         >
//           <a href="/Entrees">
//             <BottomNavigationAction
//               label="Entrees"
//               icon={<Img src="../images/navtaco.jpg" alt="Entrees" />}
//             />
//           </a>
//           <a href="/Drinks">
//             <BottomNavigationAction
//               label="Drinks"
//               icon={<Img src="./" alt="Drinks"/>}
//             />
//           </a>
//           <a href="/Desserts">
//             <BottomNavigationAction
//               label="Desserts"
//               icon={<Img src="" alt="Desserts"/>}
//             />
//           </a>
//         </BottomNavigation>
//       </Paper>
//       </div>)

//     :

//     (<div className='topNavContainer'>
//     <nav role="navigation">
//         <ul className='topNavUl'>
//             <li className='topNavLi'>
//                 <a href='/Entrees' className='topNavLink'>
//                     <Img src={navTaco} alt='Entrees'></Img>
//                 </a>
//             </li>
//             <li className='topNavLi'>
//                 <a href='/Drinks' className='topNavLink'>
//                     <Img src={milkTea} alt='Drinks'></Img>
//                 </a>
//             </li>
//             <li className='topNavLi'>
//                 <a href='/Desserts' className='topNavLink'>
//                     <Img src={churro} alt='Desserts'></Img>
//                 </a>
//             </li>
//             {/* <li className='topNavLi'>
//                 <a href='/Sides' className='topNavLink'>
//                     <Img src='./images/settingsblank.png' alt='sides'></Img>
//                 </a>
//             </li> */}
//         </ul>
//     </nav>
//     </div>
//     )
//     }
//     </Box>
//   );
// }




// ---------------------------------------------------------------------------------------------------
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import image1 from '../images/navtaco.jpg'
import image2 from '../images/milktea.jpg'
import image3 from '../images/strawberryCake.jpg'
import { Link } from "react-router-dom"

const images = [
  {
    url: image1,
    title: 'Entrees',
    width: '33%',
    href: "/Entrees"
  },
  {
    url: image2,
    title: 'Drinks',
    width: '33%',
    href: "/Drinks",
  },
  {
    url: image3,
    title: 'Desserts',
    width: '33%',
    href: "/Desserts"
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        
        <ImageButton
        key={image.title}
          focusRipple
          onClick={() => {
            ;
          }}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})`}} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Link to = {`${image.href}`}> 
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
          </Link>
        </ImageButton>

      ))}
    </Box>
  );
}