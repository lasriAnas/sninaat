import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  firstName: yup.string().max(15).required("Required"),
  lastName: yup.string().max(15).required("Required"),
  email: yup.string().email("entrer un email valid").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  phone: yup.number().positive().required("Required"),
});

/* password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "entrer un meilleur mot de passe" })
    .required("Required"), */
