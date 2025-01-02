import React, { useEffect } from "react";
import { editUsersProps } from "../types/types";
import { Button, TextInput } from "../components/shared";
import { useForm, Controller } from "react-hook-form";
import { editUsersFormTypes } from "../form/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUsersValidationSchema } from "../form/validation";
import { useEditUsers } from "../api/services/users";

type selectedDataType = {
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export const EditUsers: React.FC<editUsersProps> = ({
  isShow,
  onCloseModal,
  data,
}) => {
  const { editUsers, editingUser } = useEditUsers();
  const {
    reset,
    setValue,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<editUsersFormTypes>({
    mode: "onChange",
    resolver: yupResolver(editUsersValidationSchema),
  });

  const selectedData: selectedDataType = data;

  const onSubmit = async (data: editUsersFormTypes) => {
    if (data) {
      await editUsers({
        address: {
          city: data?.city,
          geo: {
            lat: data?.latitude,
            lng: data?.longitude,
          },
          street: data?.street,
          suite: data?.suite,
          zipcode: data?.zipCode,
        },
        company: {
          bs: data?.Bs,
          catchPhrase: data?.catchPhrase,
          name: data?.companyName,
        },
        email: data?.email,
        id: selectedData?.id,
        name: data?.name,
        phone: data?.phone,
        username: data?.username,
        website: data?.website,
      });
    }
    if (!editingUser) {
      onCloseModal();
    }
  };

  useEffect(() => {
    setValue("Bs", selectedData?.company?.bs);
    setValue("catchPhrase", selectedData?.company?.catchPhrase);
    setValue("city", selectedData?.address?.city);
    setValue("companyName", selectedData?.company?.name);
    setValue("email", selectedData?.email);
    setValue("latitude", selectedData?.address?.geo?.lat);
    setValue("longitude", selectedData?.address?.geo?.lng);
    setValue("name", selectedData?.name);
    setValue("phone", selectedData?.phone);
    setValue("street", selectedData?.address?.street);
    setValue("suite", selectedData?.address?.suite);
    setValue("username", selectedData?.username);
    setValue("website", selectedData?.website);
    setValue("zipCode", selectedData?.address?.zipcode);
  }, [selectedData]);

  return (
    <>
      {isShow && (
        <div
          className='bg-[#00000042] w-full h-full z-50 fixed left-0 top-0 flex justify-center items-start overflow-auto scrollbar-hide py-5'
          onClick={() => {
            onCloseModal();
          }}>
          <div
            className='bg-[#ffffff] px-5 py-5 rounded-3xl w-[400px]'
            onClick={(e) => e.stopPropagation()} // Prevent event bubbling
          >
            <p className='font-semibold text-lg text-center'>Edit Entry</p>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  label='Name*'
                  placeHolder='Enter name'
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
                  label='Username*'
                  placeHolder='Enter username'
                  value={field.value}
                  onChange={(text) => {
                    field.onChange(text.target.value);
                  }}
                  error={errors?.username?.message}
                />
              )}
              defaultValue=''
              name='username'
            />
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  label='Email*'
                  placeHolder='Enter email'
                  value={field.value}
                  onChange={(text) => field.onChange(text.target.value)}
                  error={errors?.email?.message}
                />
              )}
              defaultValue=''
              name='email'
            />
            <p className='text-[#121212] text-sm pt-4 pb-2 font-semibold'>
              Address
            </p>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  label='Street*'
                  placeHolder='Enter street'
                  value={field.value}
                  onChange={(text) => field.onChange(text.target.value)}
                  error={errors?.street?.message}
                />
              )}
              defaultValue=''
              name='street'
            />
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  label='Suite*'
                  placeHolder='Enter suite'
                  value={field.value}
                  onChange={(text) => field.onChange(text.target.value)}
                  error={errors?.suite?.message}
                />
              )}
              defaultValue=''
              name='suite'
            />
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  label='City*'
                  placeHolder='Enter city'
                  value={field.value}
                  onChange={(text) => field.onChange(text.target.value)}
                  error={errors?.city?.message}
                />
              )}
              defaultValue=''
              name='city'
            />
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  label='Zip Code'
                  placeHolder='Enter zip code'
                  value={field.value}
                  onChange={(text) => field.onChange(text.target.value)}
                  error={errors?.zipCode?.message}
                />
              )}
              defaultValue=''
              name='zipCode'
            />
            <p className='text-[#121212] text-sm pt-4 pb-2 font-normal'>Geo</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label=''
                    placeHolder='Latitude'
                    value={field.value}
                    onChange={(text) => field.onChange(text.target.value)}
                    error={errors?.latitude?.message}
                  />
                )}
                defaultValue=''
                name='latitude'
              />
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label=''
                    placeHolder='Longitude'
                    value={field.value}
                    onChange={(text) => field.onChange(text.target.value)}
                    error={errors?.longitude?.message}
                  />
                )}
                defaultValue=''
                name='longitude'
              />
            </div>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  label='Phone*'
                  type={"number"}
                  placeHolder='Enter phone'
                  value={field.value}
                  onChange={(text) => field.onChange(String(text.target.value))}
                  error={errors?.phone?.message}
                />
              )}
              defaultValue=''
              name='phone'
            />
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  label='Website*'
                  placeHolder='Enter website'
                  value={field.value}
                  onChange={(text) => field.onChange(text.target.value)}
                  error={errors?.website?.message}
                />
              )}
              defaultValue=''
              name='website'
            />
            <p className='text-[#121212] text-sm pt-4 pb-2 font-semibold'>
              Company
            </p>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  label='Name*'
                  placeHolder='Enter name'
                  value={field.value}
                  onChange={(text) => field.onChange(text.target.value)}
                  error={errors?.companyName?.message}
                />
              )}
              defaultValue=''
              name='companyName'
            />

            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  label='Catchphrase'
                  placeHolder='Enter catchphrase'
                  value={field.value}
                  onChange={(text) => field.onChange(text.target.value)}
                  error={errors?.catchPhrase?.message}
                />
              )}
              defaultValue=''
              name='catchPhrase'
            />

            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  textArea
                  label='BS'
                  placeHolder='Enter title'
                  value={field.value}
                  onChange={(text) => field.onChange(text.target.value)}
                  error={errors?.Bs?.message}
                />
              )}
              defaultValue=''
              name='Bs'
            />
            <Button
              title='Add Entry'
              className='bg-[#8158F3] hover:bg-[#7547f2] duration-700 text-xs text-white font-light w-full py-[11px] mt-5'
              onPress={handleSubmit(onSubmit)}
              isLoading={editingUser}
            />
          </div>
        </div>
      )}
    </>
  );
};
