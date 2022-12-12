import { useEffect } from "react";

interface IProps {
  children: React.ReactNode;
  open?: boolean;
  onClose: any;
}

const Modal = ({ children, open, onClose }: IProps) => {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm"
      ></div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  bg-white shadow-md rounded-md overflow-hidden overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Modal;
