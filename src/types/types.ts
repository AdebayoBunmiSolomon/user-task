export type buttonProps = {
  className: string;
  disabled?: boolean;
  onPress: () => void;
  rightIcon?: any;
  leftIcon?: any;
  title: string;
  isLoading?: boolean;
};

export type addCommentProps = {
  isShow: boolean;
  onCloseModal: () => void;
};

export type addUsersProps = {
  isShow: boolean;
  onCloseModal: () => void;
};

export type selectedActionBarType = "Comments" | "Users" | "";

export interface inputProps {
  textArea?: boolean;
  type?: React.HTMLInputTypeAttribute;
  placeHolder: string;
  label?: string;
  error?: string;
  value?: string;
  disabled?: boolean;
  min?: string | number;
  max?: string | number;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}
