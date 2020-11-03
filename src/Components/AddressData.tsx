import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@material-ui/core";

interface Props {
    handleNext: () => void;
}

const AddressData: React.FC<Props> = ({ handleNext }) => {
    return (
        <Formik
            initialValues={{ country: "", state: "", city: "" }}
            validationSchema={Yup.object({
                country: Yup.string().required("Required").min(4, "Invalid"),
                state: Yup.string().required("Required").min(4, "Invalid"),
                city: Yup.string().required("Required").min(4, "Invalid"),
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    handleNext();
                }, 400);
            }}
        >
            {({ errors, touched, dirty, isValid }) => (
                <Form>
                    <Field
                        as={TextField}
                        label="Country"
                        name="country"
                        type="text"
                        error={touched.country && errors.country}
                        helperText={touched.country && errors.country}
                    />
                    <br />
                    <br />
                    <Field
                        as={TextField}
                        label="State"
                        name="state"
                        type="text"
                        error={touched.state && errors.state}
                        helperText={touched.state && errors.state}
                    />
                    <br />
                    <br />
                    <Field
                        as={TextField}
                        label="City"
                        name="city"
                        type="text"
                        error={touched.city && errors.city}
                        helperText={touched.city && errors.city}
                    />
                    <br />
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={!isValid || !dirty}
                        type="submit"
                    >
                        Submit
          </Button>
                </Form>
            )}
        </Formik>
    );
};

export default AddressData;
