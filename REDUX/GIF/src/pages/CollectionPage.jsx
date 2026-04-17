import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

function CollectionPage() {
  const collection = useSelector(state => state.collection.item);
  const dispatch = useDispatch();
  const clearAllCollection = ()=>{
    dispatch(clearCollection(collection));
  }

  return (
    <div className=' h-screen w-full bg-gray-900 overflow-auto '>
      <div className='flex gap-10 p-5 bg-gray-900'>
                     
                  <button className={'rounded-xl p-2    active:scale-95 cursor-pointer border-2  : bg-green-400'
                        } onClick={()=>{
                        clearAllCollection();
                    }}>
              Clear
                  </button>
          </div>
          <div className='grid grid-cols-4 gap-6 px-10 h-screen w-full bg-gray-900 overflow-auto p-6 '>

        {
          collection.map((item, idx)=>{
            return <div key={idx}>
                    <CollectionCard item={item} />
                </div>

      })
  }
</div>
    </div>
  );
}

export default CollectionPage;
