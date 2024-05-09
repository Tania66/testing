import { useSelector } from "react-redux"
import { selectFavoriteAdverts, selectFavoriteLoad } from "../../redux/adverts/advertsSelectors"
import Loader from "../../components/Loader/Loader";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import NotFound from "../../components/NotFound/NotFound";

const Favorites = () => {
const favorite = useSelector(selectFavoriteAdverts);
const loading = useSelector( selectFavoriteLoad);
  return (
    <div>
 <div>
              {loading && <Loader />}
      {favorite.length > 0 ? <FavoriteList /> : <NotFound/>}


      </div> 
  </div>
)
  
}

export default Favorites
