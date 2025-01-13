import './styles/App.css';
import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Root from './components/root';
import Home from './components/home';

import Math from './components/math/main';
import Biology from './components/biology/main';
import Cs from './components/cs/main';

const RedirectPage = () => {
  // const location = useLocation();
  // const param = new URLSearchParams(location.search);
  // const unit = param.get("unit");
  // const action = param.get("action");
  // const lesson = param.get("lesson");
  // const subject = location.pathname.split("/")[1];
  // const phpLink = "http://localhost:8000/redirect.php";
  // let link = "../assets";
  // link += unit !== null ? `/${unit}` : "";
  // link += action !== null ? `/${action}` : "";
  // link += lesson !== null ? `/${lesson}` : "";
  // link += ".md";
  // console.log(link);

  // fetch(phpLink, {
  //   "method": "POST",
  //   "body": JSON.stringify({
  //     "link": link
  //   }),
  //   "headers": {
  //     "Content-Type": "application/json"
  //   }
  // })
  //   .then(response => response.text())
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(err => {
  //     console.error("Error:", err.message);
  //   });

  // if (unit !== null) {
  //   switch (subject) {
  //     case "math":
  //       break;

  //     case "biology":
  //       break;

  //     case "cs":
  //       break;

  //     default:
  //       break;
  //   }
  // }

  // return (
  //   <div>

  //   </div>
  // )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/math",
        element: <Math />,
        children: [
          {
            path: "/math",
            element: <RedirectPage />,
          }
        ]
      },
      {
        path: "/biology",
        element: <Biology />,
        children: [
          {
            path: "/biology",
            element: <RedirectPage />,
          }
        ]
      },
      {
        path: "/cs",
        element: <Cs />,
        children: [
          {
            path: "/cs",
            element: <RedirectPage />,
          }
        ]
      }
    ]
  },
]);

function App() {
  useEffect(() => {

  });
  
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
