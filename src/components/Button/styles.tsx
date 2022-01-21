import styled from 'styled-components'
import { Link } from 'react-router-dom'

/**
 * The only reason to have secondary as string type is because
 * created a conflict with Link component from react-router
 */

export const Button = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 160px;
  border: 0;
  box-shadow: ${({ secondary }: { secondary?: string }) => (secondary === 'true' ? 0 : '0 10px 20px -5px rgba(47,0,121,0.3);')};
  color: #ffffff;
  border-radius: 24px;
  background-color: ${({ secondary }: { secondary?: string }) => (secondary === 'true' ? 'transparent' : '#2F0079')};
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.35px;
  line-height: 24px;
`
export default Button
