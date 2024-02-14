import { Button } from "../components/button ";
import { useNavigate } from "react-router-dom";
import { SubHeading } from "../components/subHeading";

export function ConnectPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 p-2 h-max px-4">
          <SubHeading label="Facebook page Integration" />
          <div className="pt-4">
            <Button label={"Connect page"} />
          </div>
        </div>
      </div>
    </div>
  );
}
