import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function BackBtn() {
  const navigate = useNavigate();
  const BackBtn = styled.button`
    position: absolute;
    top: 1rem;
    left: 1rem;
    padding: 0.5rem 1rem;
    color: #9da5d1;
    background-color: #2b3566;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    opacity: 0.9;

  &hover {
    opacity: 1;
  }
  `;
  return (
    <>
      <BackBtn type="button" onClick={() => navigate(-1)}>
        voltar
      </BackBtn>
    </>
  );
}

export default BackBtn;
