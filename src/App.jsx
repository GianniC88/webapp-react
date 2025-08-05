import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from './assets/layout/DefaultLayout'
import HomePage from './assets/pages/HomePage'
import SingleMovies from './assets/pages/SingleMoviesPage'
import MoviesPage from './assets/pages/moviesPage'
import NotFound from './assets/components/NotFound'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/homepage' element={<HomePage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/movies/:id' element={<SingleMovies />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
