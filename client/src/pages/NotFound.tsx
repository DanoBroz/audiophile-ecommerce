import { Link } from 'react-router-dom'
import { About, CategoryHeader, CategoryItems } from '../components'

export const NotFound = () => {
    return (
        <>
            <CategoryHeader headingText='404 Not Found' />
            <div className='container pb-40'>
                <h6 className='text-center'>
                    Sorry, but the page you're trying to find doesn't exist 🤷‍♂️.
                    You may find more luck{' '}
                    <Link
                        className='text-Orange-dark hover:underline'
                        to={'/'}
                    >
                        here
                    </Link>
                    .
                </h6>
            </div>
            <CategoryItems className='pb-40' />
            <About className='pb-40' />
        </>
    )
}
