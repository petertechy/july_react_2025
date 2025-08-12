import React from "react";
import { useFormik } from "formik";
import * as yup from "yup"

const Formik = () => {
  let formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values)=>{
        console.log(values)
    },
    // validate:(values)=>{
    //     let errors = {}
    //     if(values.firstname == ""){
    //         errors.firstname = "This field is required"
    //     }else if(values.firstname.length < 5){
    //         errors.firstname = "minimum of 5 Characters"
    //     }

    //     if(values.lastname == ""){
    //         errors.lastname = "This field is required"
    //     }
    //     if(values.email == ""){
    //         errors.email = "This field is required"
    //     }
    //     if(values.password == ""){
    //         errors.password = "This field is required"
    //     }


    //     return errors
    // },
    validationSchema: yup.object({
        firstname: yup.string().required("This field is required").min(5, "Min of 5 Characters").max(10, "max of 10 characters"),
        lastname: yup.string().required("This field is required"),
        email: yup.string().required("This field is required").email("Invaild Email"),
        password: yup.string().required("This field is required"),

    })
  });
  console.log(formik.touched);
  return (
    <>
      <div className="col-7 border shadow rounded-4 my-4 p-3 mx-auto">
        <h1>Formik and Yup Form</h1>
        <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="first name"
          className={formik.touched.firstname && formik.errors.firstname ? "form-control mb-3 is-invalid" : "form-control mb-3"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="firstname"
        />
        {formik.touched.firstname ? <small className="text-danger">{formik.errors.firstname}</small> : ""}
        <input
          type="text"
          placeholder="last name"
          className={formik.touched.lastname && formik.errors.lastname ? "form-control mb-3 is-invalid" : "form-control mb-3"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="lastname"
        />
         {formik.touched.lastname ? <small className="text-danger">{formik.errors.lastname}</small> : ""}
        <input
          type="text"
          placeholder="email"
          className={formik.touched.email && formik.errors.email ? "form-control mb-3 is-invalid" : "form-control mb-3"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
        />
         {formik.touched.email ? <small className="text-danger">{formik.errors.email}</small> : ""}
        <input
          type="text"
          placeholder="password"
          className={formik.touched.password && formik.errors.password ? "form-control mb-3 is-invalid" : "form-control mb-3"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="password"
        />
         {formik.touched.password ? <small className="text-danger">{formik.errors.password}</small> : ""}
        <button type="submit" className="btn btn-success w-100 my-2">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Formik;
