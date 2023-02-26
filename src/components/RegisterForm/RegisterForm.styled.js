import styled from 'styled-components';

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonDelate = styled.button`
  display: flex;
  text-align: center;
  font: inherit;
  line-height: 1;
  max-width: 150px;

  justify-content: center;
  margin: 0.5em;
  margin-top: 40px;
  margin-bottom: 40px;
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
