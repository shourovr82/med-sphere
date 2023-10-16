import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Button, Modal } from "antd";

type ModalFormProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title: string;
  isLoading: boolean;
};

const ModalForm = ({
  open,
  setOpen,
  children,
  title,
  isLoading,
}: ModalFormProps) => {
  return (
    <Modal
      title={`Edit ${title}`}
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={1000}
      confirmLoading={isLoading}
      okText={`Update ${title}`}
      closable={false}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default ModalForm;
