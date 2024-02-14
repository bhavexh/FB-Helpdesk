import { Button, RedButton } from "../components/button ";
import { useNavigate } from "react-router-dom";
import { SubHeading } from "../components/subHeading";

export function DisconnectPage() {

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 p-2 h-max px-4">
          <SubHeading label="Facebook page Integration" /> <br />{" "}
          <SubHeading label="Integrated page : Amazon Bussiness" />
          <div className="pt-4">
            <RedButton label={"delete integration"} />
          </div>
          <div className="pt-4">
            <Button label={"Reply to messages"} />
          </div>
        </div>
      </div>
    </div>
  );
}
