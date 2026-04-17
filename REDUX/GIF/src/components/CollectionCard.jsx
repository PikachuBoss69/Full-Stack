import { useDispatch} from "react-redux";
import { removeCollection, removeToast } from "../redux/features/collectionSlice";


function CollectionCard({item}) {
  const dispatch = useDispatch();

  const removeFromCollection = (item)=>{
    dispatch(removeCollection(item));
    dispatch(removeToast());
  }

  return (
    <div className='w-(200px) relative h-70 rounded-xl overflow-hidden'>

        {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
        {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video>:''
        }
        <div className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
        <h1 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h1>
        <button className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium' 
        onClick={()=>{
          removeFromCollection(item);
        }}>Remove</button>
        </div>
    </div>
  );
}

export default CollectionCard;
