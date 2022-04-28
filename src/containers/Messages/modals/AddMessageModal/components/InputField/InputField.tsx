import React from "react";
import get from "lodash/get";
import { useFormikContext, FieldInputProps } from "formik";
import * as Styled from "./InputField.styled";

interface InputFieldProps {
  field: FieldInputProps<string>;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { field } = props;

  const { errors } = useFormikContext();

  const error = get(errors, field.name);

  return (
    <Styled.InputWrapper>
      <Styled.Input {...field} />
      <Styled.ErrorBlock hasError={!!error}>{error}</Styled.ErrorBlock>
    </Styled.InputWrapper>
  );
};

export default InputField;
