export type buttonProps = {
  className: string;
  disabled?: boolean;
  onPress: () => void;
  rightIcon?: any;
  leftIcon?: any;
  title: string;
  isLoading?: boolean;
};

export interface addCommentProps {
  isShow: boolean;
  onCloseModal: () => void;
}

export interface editCommentProps {
  isShow: boolean;
  onCloseModal: () => void;
  data: any;
}

export interface addUsersProps {
  isShow: boolean;
  onCloseModal: () => void;
}

export interface editUsersProps {
  isShow: boolean;
  onCloseModal: () => void;
  data: any;
}

export type selectedActionBarType =
  | "Comments"
  | "Users"
  | "Edit-Comments"
  | "Edit-Users"
  | "";

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

export type customPaginationType = {
  rowsPerPage: any;
  totalRows: any;
  currentPage: any;
  onPageChange: any;
  onRowsPerPageChange: any;
};

export interface commentListProps {
  onClickItem: (data: any) => void;
}

export interface userListProps {
  onClickItem: (data: any) => void;
}

export interface customTableProps {
  tableHeaders: string[];
  data: any[];
  onClickRowItem: (data: any) => void;
  renderRow: (item: any) => React.ReactNode;
}
