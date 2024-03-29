import { Dialog as UIDialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const DialogTitle = UIDialog.Title;
export const DialogPanel = UIDialog.Panel;

const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <UIDialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {children}
              </Transition.Child>
            </div>
          </div>
        </UIDialog>
      </Transition>
    </>
  );
};

export default Dialog;
