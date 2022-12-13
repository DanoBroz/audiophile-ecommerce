import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
    Checkout,
    DetailPage,
    Earphones,
    Headphones,
    Home,
    NotFound,
    Speakers,
} from './pages'
import { PageContainer } from './containers'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { CartContextProvider } from './context'

const client = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <CartContextProvider>
                <Router>
                    <Routes>
                        <Route element={<PageContainer />}>
                            <Route
                                path='/'
                                element={<Home />}
                            />
                            <Route
                                path='/headphones'
                                element={<Headphones />}
                            />
                            <Route
                                path='/speakers'
                                element={<Speakers />}
                            />
                            <Route
                                path='/earphones'
                                element={<Earphones />}
                            />
                            <Route
                                path='/products/:slug'
                                element={<DetailPage />}
                            />
                            <Route
                                path='*'
                                element={<NotFound />}
                            />
                        </Route>
                        <Route element={<PageContainer hasBlueBackground />}>
                            <Route
                                path='/checkout'
                                element={<Checkout />}
                            />
                        </Route>
                    </Routes>
                </Router>
            </CartContextProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
