import { GrLocation } from "react-icons/gr";
import { LocationText, Price, Review, Stars } from "../../components/AdvertsList/AdvertsList.styled"
import { InnerDetailRating, TitleCamper, TopInnerDetails,GalleryList, GallreImg, DetailsDescription, ConteinerDetaliesFR, LictContainer, ButtonStyled } from "./AdvertsDetails.styled"
import {useState } from "react";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
import shortid from "shortid";



const AdvertsDetails = ({advert}) => {
const [modal, setModal] = useState('');
const [selectButton, setSelectButton] = useState('');
const handleChangeButton = (btn) =>{
  setSelectButton(btn)
  if (btn === 'feature') {
    setModal(<Features advert={advert}/>)
  }else if(btn === 'review'){
    setModal(<Reviews advert={advert}/>)
  }
}
  return (
    <div>
      <TopInnerDetails>
           <TitleCamper>{advert.name}</TitleCamper>
           <InnerDetailRating>
                  <Review>
                    <Stars />
                    {advert.rating}( Reviews)
                  </Review>
                  <LocationText>
                    <GrLocation size={16} /> 
                    {advert.location}
                  </LocationText>
                     
                </InnerDetailRating>
             <Price>€{advert.price}</Price>
   
      </TopInnerDetails>
     
     <GalleryList>
      {advert.gallery.map(item =>(
         <li key={shortid.generate()}>
        <GallreImg src={item} alt="name" />
      </li>
      ))}
     </GalleryList>
        <DetailsDescription>
          {advert.description}
        </DetailsDescription>
        <LictContainer>
        <ConteinerDetaliesFR>
  <li><ButtonStyled onClick={()=>handleChangeButton('feature')} active ={selectButton === 'feature' ? 'true' : 'false'}>Features </ButtonStyled></li>
  <li><ButtonStyled  onClick={()=>handleChangeButton('review')} active ={selectButton === 'review' ? 'true' : 'false'}> Reviews</ButtonStyled></li>
</ConteinerDetaliesFR>  
        </LictContainer>
{modal}
    </div>
  )
}

export default AdvertsDetails
