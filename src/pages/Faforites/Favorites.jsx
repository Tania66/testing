import { useSelector } from "react-redux"
import { selectFavoriteAdverts, selectFavoriteLoad } from "../../redux/adverts/advertsSelectors"
import Loader from "../../components/Loader/Loader";
import FavoriteList from "../../components/FavoriteList/FavoriteList";

const Favorites = () => {
const favorite = useSelector(selectFavoriteAdverts);
const loading = useSelector( selectFavoriteLoad);
  return (
    <div>
 <div>
              {loading && <Loader />}
      {favorite.length > 0 ? <FavoriteList /> : <>Not found</>}


      </div> 
  </div>
)
  
}

export default Favorites
