import { useContext } from "react";
import ToastContext from "./toastContext";

function useToast() {
  const context = useContext(ToastContext);

  return { add: context.add, remove: context.remove };
}

export default useToast;
