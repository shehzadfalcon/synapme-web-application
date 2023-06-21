import React, { ReactNode } from 'react';
import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface GptFormModal {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
  className?: string;
}

const GptLayout: React.FC<GptFormModal> = ({ open, handleClose, className, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="gpt-modal"
    >
      <div
        className={`flex justify-center items-center bg-[#FFFFFF] rounded-lg w-11/12 h-4/5 p-7 max-w-[950px] relative lg-max:max-w-lg${
          className ? ` ${className}` : ''
        }`}
      >
        {children}
        <button
          onClick={handleClose}
          className="absolute right-2 top-2 w-9 h-9 rounded-full bg-[#eeeeee] cursor-pointer"
        >
          <CloseIcon className=" w-4/6 h-4/6" />
        </button>
      </div>
    </Modal>
  );
};

export default GptLayout;
