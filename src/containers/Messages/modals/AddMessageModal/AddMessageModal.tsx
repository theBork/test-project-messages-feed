import React, { useRef } from "react";
import size from "lodash/size";
import { Formik, Form, Field, FormikProps, setNestedObjectValues } from "formik";
import Modal from "ui/Modal";
import * as Yup from "yup";
import { AddMessageForm } from "../../Messages.types";
import Input from "./components/InputField";

const AddMessageSchema = Yup.object().shape({
  text: Yup.string()
    .max(200, "Сообщение не должно быть длиньше 200 символов.")
    .required("Поле обязательно к заполнению."),
});

interface AddMessageModalProps {
  onClose: () => void;
  onSubmit: (formValues: AddMessageForm) => void;
}

const AddMessageModal: React.FC<AddMessageModalProps> = (props) => {
  const { onClose, onSubmit } = props;

  const formRef = useRef<FormikProps<AddMessageForm>>(null);

  const handleSubmit = async (values: AddMessageForm) => {
    onSubmit(values);
    onClose();
  };

  const handleClickSubmit = async () => {
    await formRef.current?.validateForm();
    formRef.current?.setTouched(setNestedObjectValues(formRef.current?.errors, true));

    if (!size(formRef.current?.errors)) {
      formRef.current?.submitForm();
    }
  };

  return (
    <Modal
      title="Добавить сообщение"
      actionButtons={[
        { title: "отмена", fill: "outline", onClick: onClose },
        { title: "добавить", onClick: handleClickSubmit },
      ]}
      {...{ onClose }}
    >
      <Formik
        innerRef={formRef}
        initialValues={{ text: "" }}
        validationSchema={AddMessageSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="text" placeholder="введите имя" component={Input} />
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddMessageModal;
