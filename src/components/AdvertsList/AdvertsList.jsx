import { useDispatch, useSelector } from "react-redux";
import { selectAdverts, selectFavoriteAdverts } from "../../redux/adverts/advertsSelectors";
import { FaRegHeart } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import {
  AdvertContent,
  AdvertItem,
  AdvertItemContent,
  AdvertList,
  AdvertName,
  AdvertsInner,
  Button,
  Description,
  FavoriteButton,
  IconCategory,
  Img,
  ItemCategory,
  List,
  LocationText,
  Price,
  PriceInner,
  RatingInner,
  Review,
  ShowMoreButton,
  Stars,
  TopAdvertContent,
} from "./AdvertsList.styled";
import { useContext, useState } from "react";
import use from "../../assets/icon/users.svg";
import automat from "../../assets/icon/automatic.svg";
import petr from "../../assets/icon/petrol.svg";
import kitch from "../../assets/icon/kitchen.svg";
import bed from "../../assets/icon/beds.svg";
import ac from "../../assets/icon/ac.svg";
import { ModalContext } from "../../context/ModalContext/ModalContext";
import AdvertsDetails from "../../pages/AdvertsDetails/AdvertsDetails";
import {fetchAdvertsById } from "../../redux/adverts/advertsOperation";


const AdvertsList = () => {
  const user = use;
  const automatic = automat;
  const petrol = petr;
  const kitchen = kitch;
  const beds = bed;
  const aC = ac;

  const adverts = useSelector(selectAdverts);
  const favorite = useSelector(selectFavoriteAdverts);
  const dispatch = useDispatch();
  const { openModal } = useContext(ModalContext);
  const [isFavorite, setFavorite] = useState(false);

const handleClickFavorite = (id) =>{
  const data = favorite.find(item => item.id === id);
  if(data){
    alert ("Alreade add to favorite");
    return
  }
  dispatch(fetchAdvertsById(id));
  setFavorite(true)
}


  const handleClickButton = (id) => {
    const details =  adverts.find(item => item.id === id);
    openModal(
      <>
       <AdvertsDetails advert={details}/> 
      </>
    )
  }

  return (
    <AdvertsInner>
      <AdvertList>
        {adverts.map((advert) => (
          <AdvertItem key={advert.id}>
            <AdvertItemContent>
              <Img src={advert.gallery[0]} alt="camper" />
              <AdvertContent>
                <TopAdvertContent>
                  <AdvertName> {advert.name}</AdvertName>
                  <PriceInner>
                    <Price>€{advert.price}</Price>
                    <Button  onClick={() => handleClickFavorite(advert.id)}>
              
          {favorite.some((item) => item.id === advert.id) ? (<FavoriteButton id={advert.id}/>) : ( <FaRegHeart size={24} />)}        
         
                
                    </Button>
                  </PriceInner>
                </TopAdvertContent>
                <RatingInner>
                  <Review>
                    <Stars />
                    {advert.rating}({advert.reviews.length} Reviews)
                  </Review>
                  <LocationText>
                    <CiLocationOn size={16} /> {advert.location}
                  </LocationText>
                </RatingInner>
                <Description>{advert.description}</Description>
                <List>
                  <li>
                    <ItemCategory>
                      <IconCategory src={user} alt="user" />
                      {advert.adults} adults
                    </ItemCategory>
                  </li>
                  <li>
                    <ItemCategory>
                      <IconCategory src={automatic} alt="Automatic" />
                      Automatic
                    </ItemCategory>
                  </li>
                  <li>
                    <ItemCategory>
                      <IconCategory src={petrol} alt="Petrol" />
                      Petrol
                    </ItemCategory>
                  </li>
                  <li>
                    <ItemCategory>
                      <IconCategory src={kitchen} alt="kitchen" />
                      {advert.details.kitchen} Kitchen
                    </ItemCategory>
                  </li>
                  <li>
                    <ItemCategory>
                      <IconCategory src={beds} alt="beds" />
                      {advert.details.beds}beds
                    </ItemCategory>
                  </li>
                  <li>
                    <ItemCategory>
                      <IconCategory src={aC} alt="AC" />
                      AC
                    </ItemCategory>
                  </li>
                </List>
                <ShowMoreButton onClick={() => handleClickButton(advert.id)}>Show more</ShowMoreButton>
              </AdvertContent>
            </AdvertItemContent>
          </AdvertItem>
        ))}
      </AdvertList>
    </AdvertsInner>
  );
};

export default AdvertsList;
