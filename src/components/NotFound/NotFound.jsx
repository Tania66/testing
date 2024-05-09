import React from 'react'

import {  Image, NotFoundContainer, Span, Text } from './NotFound.styled';
import van from "../../assets/van.png"

const NotFound = () => {
const camper = van;
  return (
    <NotFoundContainer>
        <Image src={camper} alt="camper" />
      <Text>You haven't added any <Span>favorite campers</Span>  yet</Text>
    </NotFoundContainer>
  )
}

export default NotFound
