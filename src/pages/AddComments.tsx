import React, { useEffect, useState } from "react";
import { addCommentProps } from "../types/types";
import { Button, TextInput } from "../components/shared";
import { useForm, Controller } from "react-hook-form";
import { addCommentsFormTypes } from "../form/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { addCommentsValidationSchema } from "../form/validation";
import { useAddComments } from "../api/services/comments";
import { useCommentsStore } from "../store";

export const AddComments: React.FC<addCommentProps> = ({
  isShow,
  onCloseModal,
}) => {
  const { addComments, addingComments } = useAddComments();
  const { commentsData } = useCommentsStore();
  const [nameField, setNameField] = useState<string>("Onboarding new...");
  const {
    reset,
    setValue,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<addCommentsFormTypes>({
    mode: "onChange",
    resolver: yupResolver(addCommentsValidationSchema),
  });

  const onSubmit = async (data: addCommentsFormTypes) => {
    if (data) {
      await addComments({
        postId: commentsData?.length + 1,
        id: commentsData?.length + 1,
        name: data?.name,
        email: data?.email,
        body: data?.body,
      });
    }
    if (!addingComments) {
      reset({
        name: "",
        email: "",
        body: "",
      });
      onCloseModal();
    }
  };

  useEffect(() => {
    setValue("name", "Onboarding new...");
  }, []);

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
            <p className='font-semibold text-lg text-center'>New Entry</p>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  label='Name'
                  placeHolder=''
                  value={nameField}
                  onChange={(text) => {
                    field.onChange(text.target.value);
                    setNameField(text.target.value);
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
              title='Add Entry'
              className='bg-[#8158F3] hover:bg-[#7547f2] duration-700 text-xs text-white font-light w-full py-[11px] mt-5'
              onPress={handleSubmit(onSubmit)}
              isLoading={addingComments}
            />
          </div>
        </div>
      )}
    </>
  );
};
