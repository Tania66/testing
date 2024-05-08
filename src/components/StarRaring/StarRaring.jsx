import { StarContainer, StarsDis } from "./StarRaring.styled";
import shortid from "shortid";



const StarRaring = ({rating}) => {
    const stars = Array(rating).fill(0);

  return (
    <StarContainer>
      {stars.map((item)=>(
       <div key={shortid.generate()}>
 <StarsDis/>
  </div>   
      )
      
      )}
    </StarContainer>
  )
}

export default StarRaring
