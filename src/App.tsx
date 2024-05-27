import { createContext, useEffect, useState } from 'react';
import HomPage from './pages/homePage/index';
import { IProduct } from './interface';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './pages/productPage';



const router = createBrowserRouter([


  {

    path: '/',
    element: <HomPage title={''} price={0} images={''} id={0} />
  },

  {
    path: '/Products',
    element: <Products />,
    children: [{
      path: '/Products/1'
    }]
  }


])

export const proContext = createContext<any>(null)



function App() {


  const [productList, setProductList] = useState<IProduct[]>([])
  useEffect(() => {

    fetch('https://602bf8bf30ba7200172227a8.mockapi.io/products')
      .then(res => res.json())
      .then(result => setProductList(result))
      .catch(err => console.log(err))

    

  }, [])








  return (
    <>
      <proContext.Provider value={{productList : productList , setProductList:setProductList} }>
        {/* <RouterProvider router={router} /> */}
      </proContext.Provider>
      {productList.map(item => <HomPage title={item.title} images={item.images} price={item.price} id={0} />)}











    </>
  );
}

export default App;
