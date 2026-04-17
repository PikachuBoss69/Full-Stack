import ResultGrid from '../components/ResultGrid';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';
import { useSelector } from 'react-redux';

function Home() {
   const { query } = useSelector((store) => store.search)
    return (
        <div>
            <SearchBar />
            {query != '' ? <div className=''>
                <Tabs />
                <ResultGrid />
                </div> : ''}
        </div>
    )
}

export default Home;
