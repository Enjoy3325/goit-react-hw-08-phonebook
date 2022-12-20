import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  /* margin-right: -0.25em;
  gap: 20px; */
`;
export const LinkHeader = styled(NavLink)`
  display: flex;
  text-align: center;
  font: inherit;
  line-height: 1;
  max-width: 150px;

  justify-content: center;
  margin: 0.5em;
  margin-top: 40px;
  padding: 1em 2em;
  background: none;
  border: 2px solid;
  border-radius: 8px;
  border-color: #183666;
  color: #ff9000;
  transition: 0.25s;
  text-decoration: none;
  cursor: pointer;
  :hover,
  :focus {
    box-shadow: 0 0.5em 0.5em -0.4em, #ffa260;
    transform: translateY(-0.25em);
    border-color: #ffa260;
    color: #44ff82;
  }
`;
