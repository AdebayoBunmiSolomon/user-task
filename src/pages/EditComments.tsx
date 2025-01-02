import React, { useEffect } from "react";
import { editCommentProps } from "../types/types";
import { Button, TextInput } from "../components/shared";
import { useForm, Controller } from "react-hook-form";
import { addCommentsFormTypes, editCommentsFormTypes } from "../form/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { editCommentsValidationSchema } from "../form/validation";
import { useEditComments } from "../api/services/comments";

type selectedDataType = {
  email: string;
  body: string;
  id: number;
  name: string;
  postId: number;
};

export const EditComments: React.FC<editCommentProps> = ({
  isShow,
  onCloseModal,
  data,
}) => {
  const { editComments, editingComment } = useEditComments();
  const {
    setValue,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<addCommentsFormTypes>({
    mode: "onChange",
    resolver: yupResolver(editCommentsValidationSchema),
  });
  const selectedData: selectedDataType = data;

  const onSubmit = async (data: editCommentsFormTypes) => {
    if (data) {
      await editComments({
        id: selectedData?.id,
        postId: selectedData?.postId,
        name: data?.name,
        email: data?.email,
        body: data?.body,
      });
    }
    if (!editingComment) {
      onCloseModal();
    }
  };

  useEffect(() => {
    setValue("email", selectedData?.email);
    setValue("name", selectedData?.name);
    setValue("body", selectedData?.body);
  }, [selectedData]);

  return (
    <>
      {isShow && (
        <div
          className='bg-[#00000042] w-[100%] h-[100%] z-50 fixed left-0 right-0 bottom-0 top-0 justify-center items-center flex'
          onClick={() => onCloseModal()}>
          <div
            className='bg-[#ffffff] px-5 py-5 rounded-3xl w-[400px]'
            onClick={(e) => e.stopPropagation()} // Prevent event bubbling
          >
            <p className='font-semibold text-lg text-center'>Edit Entry</p>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  label='Name'
                  placeHolder=''
                  value={field.value}
                  onChange={(text) => {
                    field.onChange(text.target.value);
                  }}
                  error={errors?.name?.message}
                />
              )}
              defaultValue=''
              name='name'
            />
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  label='Email'
                  placeHolder='Email'
                  value={field.value}
                  onChange={(text) => field.onChange(text.target.value)}
                  error={errors?.email?.message}
                />
              )}
              defaultValue=''
              name='email'
            />
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  textArea
                  label='Body'
                  placeHolder='Enter ticket details'
                  value={field.value}
                  onChange={(text) => field.onChange(text.target.value)}
                  error={errors?.body?.message}
                />
              )}
              defaultValue=''
              name='body'
            />
            <Button
              title='Edit Entry'
              className='bg-[#8158F3] hover:bg-[#7547f2] duration-700 text-xs text-white font-light w-full py-[11px] mt-5'
              onPress={handleSubmit(onSubmit)}
              isLoading={editingComment}
            />
          </div>
        </div>
      )}
    </>
  );
};
