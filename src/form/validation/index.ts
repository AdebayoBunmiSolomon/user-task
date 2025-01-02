import * as yup from "yup";
import {
  addCommentsFormTypes,
  addUsersFormTypes,
  editCommentsFormTypes,
  editUsersFormTypes,
} from "../schema";

export const addCommentsValidationSchema = yup
  .object<addCommentsFormTypes>()
  .shape({
    email: yup.string().email().required("email is required"),
    name: yup.string().required("name is required"),
    body: yup.string().required("ticket details is required"),
  });

export const editCommentsValidationSchema = yup
  .object<editCommentsFormTypes>()
  .shape({
    email: yup.string().email().required("email is required"),
    name: yup.string().required("name is required"),
    body: yup.string().required("ticket details is required"),
  });

export const addUsersValidationSchema = yup.object<addUsersFormTypes>().shape({
  name: yup.string().required("name is required"),
  username: yup.string().required("username is required"),
  email: yup.string().email().required("email is required"),
  street: yup.string().required("street is required"),
  suite: yup.string().required("suite is required"),
  city: yup.string().required("city is required"),
  zipCode: yup.string().required("zip code is required"),
  latitude: yup.string().required("latitude is required"),
  longitude: yup.string().required("longitude is required"),
  phone: yup.string().required("phone is required"),
  website: yup.string().required("URL is required"),
  companyName: yup.string().required("company name is required"),
  catchPhrase: yup.string().required("catch phrase is required"),
  Bs: yup.string().required("title is required"),
});

export const editUsersValidationSchema = yup
  .object<editUsersFormTypes>()
  .shape({
    name: yup.string().required("name is required"),
    username: yup.string().required("username is required"),
    email: yup.string().email().required("email is required"),
    street: yup.string().required("street is required"),
    suite: yup.string().required("suite is required"),
    city: yup.string().required("city is required"),
    zipCode: yup.string().required("zip code is required"),
    latitude: yup.string().required("latitude is required"),
    longitude: yup.string().required("longitude is required"),
    phone: yup.string().required("phone is required"),
    website: yup.string().required("URL is required"),
    companyName: yup.string().required("company name is required"),
    catchPhrase: yup.string().required("catch phrase is required"),
    Bs: yup.string().required("title is required"),
  });
