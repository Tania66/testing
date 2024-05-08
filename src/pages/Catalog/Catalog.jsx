import { useDispatch, useSelector } from "react-redux";
import {
  selectAdverts,
  selectIsLoading,
} from "../../redux/adverts/advertsSelectors";
import { useEffect, useState } from "react";
import { fetchAdverts } from "../../redux/adverts/advertsOperation";
import Loader from "../../components/Loader/Loader";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import { LoadMore } from "./Catalog.styled";
import SideBar from "../../components/SideBar/SideBar";



const Catalog = () => {
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);


  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);

  const onLoadMore = () => {
    setPage((prevState) => prevState + 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
      <div>
          <div>
         <SideBar/>
      </div>
      <div>
              {isLoading && <Loader />}
      {adverts.length > 0 ? <AdvertsList /> : <>Not found</>}

      {adverts.length > 1 && (
        <LoadMore onClick={onLoadMore}>Load more</LoadMore>
      )}
      </div> 
      </div>
  );
};

export default Catalog;
