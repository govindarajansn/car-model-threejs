import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './BottomSheet.css';

interface BottomSheetProps {
  children: ReactNode;
  show: boolean;
}

function BottomSheet({ children, show }: BottomSheetProps): JSX.Element {
  return createPortal(
    <div className={`bottom-sheet-container ${show ? 'open' : 'close'}`}>{children}</div>,
    document.getElementById('bottom-sheet') as Element,
  );
}

export default BottomSheet;
