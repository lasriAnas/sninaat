import * as yup from "yup";

export const basicSchema = yup.object().shape({
  firstName: yup.string().max(15).required("Required"),
  lastName: yup.string().max(15).required("Required"),
  email: yup.string().email("entrer un email valid").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  phone: yup
    .string()
    .matches(/^0[5-7][0-9]{8}$/, "Please enter a valid Moroccan phone number")
    .required("Required"),
  dateTime: yup.date().required("Required"),
});

/* password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "entrer un meilleur mot de passe" })
    .required("Required"), */
