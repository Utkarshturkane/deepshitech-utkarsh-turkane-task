import Button from "../Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number")
    .required("Mobile number is required"),
  companyName: Yup.string().required("Company name is required"),
  currency: Yup.string().required("Currency is required"),
  budget: Yup.number()
    .typeError("Budget must be a number")
    .required("Budget is required"),
  project: Yup.string().required("Project description is required"),
});

function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    companyName: "",
    currency: "$",
    budget: "",
    project: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    // API call here

    resetForm();
  };

  return (
    <div className="lg:px-40 px-[30px] lg:pt-[120px] pt-[90px] lg:pb-[90px] pb-[60px]">
      <div className="contact-heading text-[42px] text-center mb-[120px]">
        <span>Let's</span> Talk
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="contact-form grid lg:grid-cols-2 grid-cols-1 gap-x-[20px] gap-y-[60px]">
            <div>
              <Field
                type="text"
                name="name"
                placeholder="YOUR NAME"
                className="border-b border-gray-300 w-full pb-[12px] ps-[15px] outline-none"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-sm mt-2"
              />
            </div>

            <div>
              <Field
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                className="border-b border-gray-300 w-full pb-[12px] ps-[15px] outline-none"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm mt-2"
              />
            </div>

            <div>
              <Field
                type="text"
                name="mobile"
                placeholder="YOUR NUMBER"
                className="border-b border-gray-300 w-full pb-[12px] ps-[15px] outline-none"
              />
              <ErrorMessage
                name="mobile"
                component="p"
                className="text-red-500 text-sm mt-2"
              />
            </div>

            <div>
              <Field
                type="text"
                name="companyName"
                placeholder="COMPANY NAME"
                className="border-b border-gray-300 w-full pb-[12px] ps-[15px] outline-none"
              />
              <ErrorMessage
                name="companyName"
                component="p"
                className="text-red-500 text-sm mt-2"
              />
            </div>

            <div className="lg:col-span-2 flex items-center">
              <Field
                as="select"
                name="currency"
                className="border-b border-gray-300 pb-[12px]"
              >
                <option value="$">$</option>
                <option value="₹">₹</option>
              </Field>

              <Field
                type="number"
                name="budget"
                placeholder="BUDGET RANGE"
                className="border-b border-gray-300 w-full pb-[12px] ps-[15px] outline-none"
              />
            </div>

            <div className="lg:col-span-2">
              <ErrorMessage
                name="budget"
                component="p"
                className="text-red-500 text-sm mb-2"
              />
            </div>

            <div className="lg:col-span-2">
              <Field
                as="textarea"
                name="project"
                rows="5"
                placeholder="TELL US ABOUT YOUR PROJECT"
                className="border-b border-gray-300 w-full pb-[12px] ps-[15px] outline-none"
              />
              <ErrorMessage
                name="project"
                component="p"
                className="text-red-500 text-sm mt-2"
              />
            </div>

            <div className="flex justify-between items-center gap-9 lg:flex-row flex-col lg:col-span-2">
              <div className="text-[#00000080]">
                <span className="text-[#C78C24]">*</span> We promise not to
                disclose your personal information to third parties.
              </div>

              <Button primary type="submit" disabled={isSubmitting}>
                SEND MESSAGE
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
