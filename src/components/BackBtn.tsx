import { useNavigate } from "react-router-dom";

function BackBtn() {
  const navigate = useNavigate();

  return(
    <>
      <button type="button" onClick={() => navigate(-1)}>
        voltar
      </button>
    </>
  );
}

export default BackBtn;
