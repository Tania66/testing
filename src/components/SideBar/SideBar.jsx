import {
  ButtonEquipment,
  ButtonEquipmentInner,
  ButtonType,
  Equipment,
  Filter,
  IconButton,
  IconType,
  InputLocation,
  LocationIcon,
  LocationLabel,
  SearchButton,
  SideBarInner,
  VehicleTypeTitle,
} from "./SideBar.styled";

import atomat from "../../assets/icon/automatic.svg";
import ac from "../../assets/icon/ac.svg";
import kitch from "../../assets/icon/kitchen.svg";
import tv from "../../assets/icon/tv.svg";
import shower from "../../assets/icon/shower.svg";
import camper from '../../assets/icon/camper.svg';
import fulCamper from '../../assets/icon/camper2.svg';
import alCamper from '../../assets/icon/camper3.svg'

const SideBar = () => {
  const automatic = atomat;
  const aC = ac;
  const kitchen = kitch;
  const tV = tv;
  const showers = shower;
const campers = camper;
const fullCamper = fulCamper;
const alcove = alCamper;

  return (
    <SideBarInner>
      <form>
        <LocationLabel>
          Location
          <div>
            <LocationIcon />
            <InputLocation placeholder="City" />
          </div>
        </LocationLabel>

        <Filter>Filters</Filter>
        <Equipment>Vehicle equipment</Equipment>
        <ButtonEquipmentInner>
          <li>
            <ButtonEquipment>
              <IconButton src={aC} alt="AC" />
              AC
            </ButtonEquipment>
          </li>
          <li>
            <ButtonEquipment>
              {" "}
              <IconButton src={automatic} alt="Automatic" />
              Automatic
            </ButtonEquipment>
          </li>
          <li>
            <ButtonEquipment>
              {" "}
              <IconButton src={kitchen} alt="kitchen" />
              Kitchen
            </ButtonEquipment>
          </li>
          <li>
            <ButtonEquipment>
              <IconButton src={tV} alt="TV" />
              TV
            </ButtonEquipment>
          </li>
          <li>
            <ButtonEquipment>
              {" "}
              <IconButton src={showers} alt="Shower" />
              Shower/WC
            </ButtonEquipment>
          </li>
        </ButtonEquipmentInner>

<VehicleTypeTitle>Vehicle type</VehicleTypeTitle>
<ButtonEquipmentInner>
          <li>
            <ButtonType>
              <IconType src={campers} alt="Van" />
              Van
            </ButtonType>
          </li>
          <li>
            <ButtonType>
              {" "}
              <IconType src={fullCamper} alt="Fully Integrated" />
              Fully Integrated
            </ButtonType>
          </li>
          <li>
            <ButtonType>
              {" "}
              <IconType src={alcove} alt="Alcove" />
              Alcove
            </ButtonType>
          </li>
        </ButtonEquipmentInner>
        <SearchButton>Search</SearchButton>
      </form>
    </SideBarInner>
  );
};

export default SideBar;
