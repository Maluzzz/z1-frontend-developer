import styled from 'styled-components'

import backgroundImage from '../../assets/bg_photo.png'

export const Container = styled.div`
   {
    display: flex;
    flex-direction: column;
    background-color: rgba(20, 28, 38, 0.75);
    height: 100vh;
    align-items: center;
    justify-content: space-evenly;
  }
`
export const Background = styled.div`
   {
    background-image: url(${backgroundImage});
    background-size: cover;
  }
`
export default Container
