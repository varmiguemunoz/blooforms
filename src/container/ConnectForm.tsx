import { FaCopy } from "react-icons/fa";
import { handleCopy } from "@/utils/handleCopy";

interface ConnectForm {
  url: string;
}

function ConnectForm({ url }: ConnectForm) {
  return (
    <div className="bg-gray-200 rounded-md px-10 py-6 text-gray-600 gap-4 flex flex-col">
      <p className="text-start font-medium text-gray-700">
        Conectate para enviar información:
      </p>
      <div className="bg-white px-5 py-5 gap-3 rounded-md flex justify-center w-full items-center">
        <h2 className="font-bold text-gray-700">{url}</h2>
        <div className="cursor-pointer">
          <FaCopy size={23} onClick={() => handleCopy(url)} />
        </div>
      </div>
    </div>
  );
}

export default ConnectForm;
