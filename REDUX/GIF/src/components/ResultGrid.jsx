import { getPhotos, getVideos } from "../api/mediaApi";
import { useSelector, useDispatch } from "react-redux";
import { setLoading, setError, setResults } from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

function ResultGrid() {
    const dispatch = useDispatch();
    const {query, activeTab, results, loading, error} = useSelector((store)=>store.search);
    useEffect(()=>{
        if (!query){
            return
        }
        let data;
        const getData = async () =>{
            try{
            dispatch(setLoading())
            if(activeTab=='photos'){
                let response = await getPhotos(query);
               data = response.results.map((item) => ({
                    id: item.id,
                    type: 'photo',
                    title: item.alt_description || 'photo',
                    thumbnail: item.urls?.thumb,
                    src: item.urls?.regular,
                    url: item.links?.html
                }))
            }
            if(activeTab=='videos'){
                let response = await getVideos(query);
                data = response.videos.map((item)=>({
                    id: item.id,
                    type: 'video',
                    title: item.user.name || 'video',
                    thumbnail: item.image,
                    src: item.video_files[0].link,
                    url: item.url
                }))
            }
            if(activeTab=='gif'){
                let response = await getVideos(query);
                data = response.videos.map((item)=>({
                    id: item.id,
                    type: 'video',
                    title: item.user.name || 'video',
                    thumbnail: item.image,
                    src: item.video_files[0].link,
                    url: item.url
                }))
            }
        
            dispatch(setResults(data));
        }
        catch(err){
            dispatch(setError(err.message));
        } 
    }   
        getData();
    },[query, activeTab, dispatch]);

    if(loading){
        return(
            <h1>Loading......</h1>
        )
    }
    if(error){
        return(
            <h1>Error</h1>
        )
    }

  return (
    <div className='grid grid-cols-4 gap-6 px-10 bg-gray-900 overflow-auto'>
        {
        results.map((item, idx)=>{
            return <div key={idx}>
                    <ResultCard item={item} />
                </div>

        })
        }

    </div>
  );
}

export default ResultGrid;
