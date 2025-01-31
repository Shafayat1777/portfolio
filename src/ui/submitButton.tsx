import { IoIosSend } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LoaderCircle } from "lucide-react";
export default function SubmitButton({
  text,
  pending,
}: {
  text?: string;
  pending?: boolean;
}) {
  return (
    <button
      disabled={pending}
      className="group bg-secondary-dark text-white flex gap-2 px-3 py-3 items-center justify-center outline-none transition-all hover:bg-secondary-dark/70 focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
    >
      {pending ? (
        <LoaderCircle className="w-6 h-6 animate-spin text-white" />
      ) : (
        <>
          {text}{" "}
          <IoIosSend
            size={20}
            className="transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </>
      )}
    </button>
  );
}
