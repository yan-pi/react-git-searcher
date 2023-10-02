import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"

function BackBtn() {
  const navigate = useNavigate();

  return (
    <>
      <Button className="m-4" variant={"secondary"} type="button" onClick={() => navigate(-1)}>
        voltar
      </Button>
    </>
  );
}

export default BackBtn;
