import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"

function BackBtn() {
  const navigate = useNavigate();

  return (
    <>
      <Button variant={"secondary"} type="button" onClick={() => navigate(-1)}>
        voltar
      </Button>
    </>
  );
}

export default BackBtn;
