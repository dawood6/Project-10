import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@material-ui/core";

interface Props {
    handleNext: () => void;
}

const ContactData: React.FC<Props> = ({ handleNext }) => {
    return (
        <Formik
            initialValues={{ email: "", phone: "" }}
            validationSchema={Yup.object({
                email: Yup.string().email("Email is invalid").required("Required"),
                phone: Yup.string()
                    .min(10, "Phone number is invalid")
                    .max(11, "Phone number is valid"),
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    // setSubmitting(false);
                    handleNext();
                }, 400);
            }}
        >
            {({ errors, touched, dirty, isValid }) => (
                <Form>
                    <Field
                        as={TextField}
                        label="Email"

                        name="email"
                        type="email"
                        error={errors.email}
                        helperText={touched.email && errors.email}
                    />
                    <br />
                    <br />
                    <Field
                        as={TextField}
                        label="Phone"

                        name="phone"
                        type="phone"
                        error={errors.phone && touched.phone}
                        helperText={(touched.phone && errors.phone) || "optional"}
                    />
                    <br />
                    <br />
                    <Button
                        disabled={!isValid || !dirty}
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Next
          </Button>
                </Form>
            )}
        </Formik>
    );
};

export default ContactData;
