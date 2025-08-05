import React, { ReactNode } from "react";
import Modal from 'react-modal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  modalHeader?: boolean;
  className?: string;
  overlayStyle?: React.CSSProperties;
};

const GlobalModal = ({
  isOpen,
  onClose,
  title,
  children,
  modalHeader = true,
  className,
  overlayStyle
}: Props) => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      padding: '0px',
      transform: 'translate(-50%, -50%)',
      border: '1px solid lightgray',
      borderRadius: '10px',
      zIndex: 2000,
      overflow: 'visible', 
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.70)',
      zIndex: 1900,
      ...overlayStyle,
    },
  };


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={customStyles}
      ariaHideApp={false}
    >
      {modalHeader && (
        <div className="p-3 bg-white flex items-center gap-4 justify-between rounded-t-[8px]">
          <div className="flex items-center gap-4 1sm:gap-2">
            <h3 className="text-[#1a1d26] text-[20px] max-[900px]:text-[18px] max-[500px]:text-[16px] font-[700] tracking-normal">
              {title}
            </h3>
          </div>
          <div onClick={onClose} className="border border-[#1a1d26] w-[28px] h-[28px] rounded-md flex items-center justify-center cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9062 1.8335L1.53125 14.8654M1.53125 1.8335L12.9062 14.8654" stroke="#1a1d26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      )}
      <div className={`p-4 bg-white rounded-b-[8px] ${className}`}>
        {children}
      </div>
    </Modal>
  );
};

export default GlobalModal;
