import './styles/App.css';
import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Root from './components/root';
import Home from './components/home';

import Math from './components/math/main';
import Algebra from './components/math/algebra/main';
import AlgebraLearn from './components/math/algebra/learn/main';
import AlgebraPractice from './components/math/algebra/practice/main';
import Trigonomety from './components/math/trigonometry/main';
import TrigonometryLearn from './components/math/algebra/learn/main';
import TrigonometryPractice from './components/math/algebra/practice/main';
import Geometry from './components/math/geometry/main';
import GeometryLearn from './components/math/algebra/learn/main';
import GeometryPractice from './components/math/algebra/practice/main';

import Biology from './components/biology/main';

import Cs from './components/cs/main';

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
            path: "/math/algebra",
            element: <Algebra />,
            children: [
              {
                path: "/math/algebra/learn",
                element: <AlgebraLearn />,
                children: [
                  {
                    path: "/math/algebra/learn/lesson-1",
                    element: <div>Lesson 1</div>
                  },
                  {
                    path: "/math/algebra/learn/lesson-2",
                    element: <div>Lesson 2</div>
                  }
                ]
              },
              {
                path: "/math/algebra/practice",
                element: <AlgebraPractice />,
                children: [
                  {
                    path: "/math/algebra/practice/lesson-1",
                    element: <div>Lesson 1</div>
                  },
                  {
                    path: "/math/algebra/practice/lesson-2",
                    element: <div>Lesson 2</div>
                  }
                ]
              }
            ]
          },
          {
            path: "/math/trigonometry",
            element: <Trigonomety />,
            children: [
              {
                path: "/math/trigonometry/learn",
                element: <TrigonometryLearn />,
                children: [
                  {
                    path: "/math/trigonometry/learn/lesson-1",
                    element: <div>Lesson 1</div>
                  },
                  {
                    path: "/math/trigonometry/learn/lesson-2",
                    element: <div>Lesson 2</div>
                  }
                ],
              },
              {
                path: "/math/trigonometry/practice",
                element: <TrigonometryPractice />,
                children: [
                  {
                    path: "/math/trigonometry/practice/lesson-1",
                    element: <div>Lesson 1</div>
                  },
                  {
                    path: "/math/trigonometry/practice/lesson-2",
                    element: <div>Lesson 2</div>
                  }
                ]
              }
            ]
          },
          {
            path: "/math/geometry",
            element: <Geometry />,
            children: [
              {
                path: "/math/geometry/learn",
                element: <GeometryLearn />,
                children: [
                  {
                    path: "/math/geometry/learn/lesson-1",
                    element: <div>Lesson 1</div>
                  },
                  {
                    path: "/math/geometry/learn/lesson-2",
                    element: <div>Lesson 2</div>
                  },
                ],
              },
              {
                path: "/math/geometry/practice",
                element: <GeometryPractice />,
                children: [
                  {
                    path: "/math/geometry/practice/lesson-1",
                    element: <div>Lesson 1</div>
                  },
                  {
                    path: "/math/geometry/practice/lesson-2",
                    element: <div>Lesson 2</div>
                  }
                ]
              }
            ]
          },
        ]
      },
      {
        path: "/biology",
        element: <Biology />,
      },
      {
        path: "/cs",
        element: <Cs />,
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
