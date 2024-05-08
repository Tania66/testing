import { IconCategory, ItemCategory } from "../AdvertsList/AdvertsList.styled";
import use from "../../assets/icon/users.svg";
import automat from "../../assets/icon/automatic.svg";
import petr from "../../assets/icon/petrol.svg";
import kitch from "../../assets/icon/kitchen.svg";
import bed from "../../assets/icon/beds.svg";
import ac from "../../assets/icon/ac.svg";
import condit from '../../assets/icon/airConditioner.svg';
import cd from '../../assets/icon/cd.svg';
import radio from '../../assets/icon/radio.svg';
import hob from '../../assets/icon/hob.svg';
import AdvertForm from "../AdvertForm/AdvertForm";
import { ContainerInfo, FeatureContainer, ListFeature, VehicleDetInner, VehicleInnerWrap, VehicleText, VehicleTitle } from "./Features.styled";

const Features = ({advert}) => {

  const user = use;
  const automatic = automat;
  const petrol = petr;
  const kitchen = kitch;
  const beds = bed;
  const aC = ac;
const conditioner = condit;
const CD = cd;
const radiO = radio;
const hoB = hob;

  return (
    <ContainerInfo>
      <FeatureContainer>
         <ListFeature>
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
                      <IconCategory src={aC} alt="AC" />
                      AC
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
                      <IconCategory src={conditioner} alt="air conditioner" />
                      {advert.details.airConditioner}air conditioner
                    </ItemCategory>
                  </li>
                  <li>
                    <ItemCategory>
                      <IconCategory src={CD} alt="CD" />
                      {advert.details.CD}CD
                    </ItemCategory>
                  </li>
                  <li>
                    <ItemCategory>
                      <IconCategory src={radiO} alt="radio" />
                      {advert.details.radio}Radio
                    </ItemCategory>
                  </li>
                  <li>
                    <ItemCategory>
                      <IconCategory src={hoB} alt="hob" />
                      {advert.details.hob}hob
                    </ItemCategory>
                  </li>
                </ListFeature>

                <div>
                  <VehicleTitle>Vehicle details</VehicleTitle>
                 <VehicleDetInner>
                  <VehicleInnerWrap>
                    <VehicleText>Form</VehicleText>
                    <VehicleText>Length</VehicleText>
                    <VehicleText>Width</VehicleText>
                    <VehicleText>Height</VehicleText>
                    <VehicleText>Tank</VehicleText>
                    <VehicleText>Consumption</VehicleText>
                  </VehicleInnerWrap>
                  <VehicleInnerWrap>
                    <VehicleText>{advert.form}</VehicleText>
                    <VehicleText>{advert.length}</VehicleText>
                    <VehicleText>{advert.width}</VehicleText>
                    <VehicleText>{advert.height}</VehicleText>
                    <VehicleText>{advert.tank}</VehicleText>
                    <VehicleText>{advert.consumption}</VehicleText>
                  </VehicleInnerWrap>
                 </VehicleDetInner>
                </div>
      </FeatureContainer>
      <AdvertForm/>
    </ContainerInfo>
  )
}

export default Features
