// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
// import Login from "./pages/Login";
// import Topbar from "./components/Topbar";
// import Navtabs from "./components/Navtabs";
// import Entrees from "./pages/Entrees";
// // import Sides from "./pages/Sides";
// import Desserts from "./pages/Desserts";
// import Drinks from "./pages/Drinks.js";
// // import Auth from './utils/auth'
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import Login from "./pages/Login";
import Navtabs from "./components/Navtabs";
import Entrees from "./pages/Entrees";
// import Sides from "./pages/Sides";
import Desserts from "./pages/Desserts";
import Drinks from "./pages/Drinks.js";
import {ThemeProvider, createTheme} from '@mui/material/styles'
import Topbar from "./components/Topbar";



const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const theme = createTheme (theme => ({
  palette: {
    type: 'light',
    primary: {
      main: '#fafafa',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Pacifico',
    },
    fontFamily: 'Oxygen',
    h2: {
      fontFamily: 'Source Sans Pro',
    },
  },
}));

function App() {
  return (
    <ThemeProvider theme = {theme}>
        <ApolloProvider client={client}>
        <Topbar />
        <Router>
          <div> 
          <Navtabs />
            <div className="flex-column justify-center align-center min-100-vh bg-primary">
              <Switch> 
              <Route exact path = '/'>
                <Login/>
              </Route>
              <Route exact path = '/Entrees'>
                <Entrees/>
              </Route>
              <Route exact path = '/Drinks'>
              <Drinks/>
              </Route>
              <Route exact path = '/Desserts'>
                <Desserts/>
              </Route>
              </Switch>
          </div>
          </div>
          </Router> 
        </ApolloProvider>
    </ThemeProvider>
  );
}
export default App;



// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Topbar />
//       <Navtabs />
//       <Router>
//         <div className="flex-column justify-center align-center min-100-vh bg-primary">
//           <Switch>
//             <Route exact path="/">
//               <Login />
//             </Route>
//             <Route exact path="/entrees">
//               <Entrees />
//             </Route>
//             {/* <Route exact path="/sides">
//               <Sides />
//             </Route> */}
//             <Route exact path="/desserts">
//               <Desserts />
//             </Route>
//             <Route exact path="/drinks">
//               <Drinks />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }


