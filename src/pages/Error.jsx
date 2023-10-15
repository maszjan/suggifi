import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div className="flex flex-col mt-96 space-y-20 items-center">
        <h2>Error 404</h2>
        <p> This site doesn't exists</p>
        <Link to="/" className='text-yellowMotive border-2 p-5 border-yellowMotive '>Go back to Home site</Link>
        </div>
    );
}