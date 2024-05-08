import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteAdverts } from '../../redux/adverts/advertsSelectors';
import { AdvertContent, AdvertItem, AdvertItemContent, AdvertList, AdvertName, Button, Description, Img, LocationText, Price, PriceInner, RatingInner, Review,  Stars, TopAdvertContent } from '../AdvertsList/AdvertsList.styled';
import { CiLocationOn } from 'react-icons/ci';
import { BsTrash } from "react-icons/bs";
import { deleteAdvertsById } from '../../redux/adverts/advertsOperation';

const FavoriteList = () => {
    const favorite = useSelector(selectFavoriteAdverts);
    const dispatch = useDispatch()
    const handleClickdelete= (id) =>{
          dispatch(deleteAdvertsById(id))
        }
      
  return (
    <div>
         <AdvertList>
        {favorite.map((advert) => (
          <AdvertItem key={advert.id}>
            <AdvertItemContent>
              <Img src={advert.gallery[0]} alt="camper" />
              <AdvertContent>
                <TopAdvertContent>
                  <AdvertName> {advert.name}</AdvertName>
                  <PriceInner>
                    <Price>€{advert.price}</Price>
                    <Button onClick={() => handleClickdelete(advert.id)}>
                    <BsTrash size={24}/>
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
                {/* <ShowMoreButton onClick={() => handleClickButton(advert.id)}>Show more</ShowMoreButton> */}
              </AdvertContent>
            </AdvertItemContent>
          </AdvertItem>
        ))}
      </AdvertList>
    </div>
  )
}

export default FavoriteList
