import styled from 'styled-components';
export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputStyled = styled.input`
  display: flex;
  justify-content: center;
  padding: 15px;

  color: #fff;
  border-color: #444c5c;
  background-color: #c29545;
  font-size: 20px;
  font-weight: 700;
  width: 220px;
  height: 40px;
  padding: 20px 20px;
  border-radius: 40px;
  border-color: none;
  &:focus,
  &:hover {
    border-color: #c29545;
    background-color: #444c5c;
    transform: translateY(+0.25em);
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.6);
    transition: 0.3s linear;
    transform: scale(1.15);
  }
`;
