import { Link } from 'react-router-dom'
import { About, CategoryHeader, CategoryItems } from '../components'

export const NotFound = () => {
    return (
        <>
            <CategoryHeader headingText='404 Not Found' />
            <div className='container'>
                <p>
                    Sorry, but the page you're trying to find doesn't exist. You
                    may find more luck <Link to={'/'}>here</Link>
                </p>
            </div>
            <CategoryItems className='pb-40' />
            <About className='pb-40' />
        </>
    )
}
