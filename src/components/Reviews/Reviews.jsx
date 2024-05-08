import { ContainerInfo } from "../Features/Features.styled"
import AdvertForm from "../AdvertForm/AdvertForm";
import { Coment, FirstLetter, FirstLetterInner, ReviewContainer, UserInfo, UserName, UserWrapp } from "./Reviews.styled";
import shortid from "shortid";
import StarRaring from "../StarRaring/StarRaring";


const Reviews = ({advert}) => {

  return (
    <ContainerInfo>
  <ReviewContainer>
     {advert.reviews.map(({reviewer_name, reviewer_rating, comment}) =>(
      <div key={shortid.generate()}>
    <UserWrapp>
        <FirstLetterInner>
          <FirstLetter>
             {reviewer_name[0]}  
          </FirstLetter>
       
          </FirstLetterInner>
    <UserInfo>
      <UserName>{reviewer_name}</UserName>
      <StarRaring rating={reviewer_rating}/>
    </UserInfo>
     </UserWrapp>
    <div>
      <Coment>{comment}</Coment>
    </div>  
   </div>
  ))}
  </ReviewContainer>

    
   <AdvertForm/>
    </ContainerInfo>
  )
}

export default Reviews

