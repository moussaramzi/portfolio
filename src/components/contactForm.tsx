import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.min.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [disabled, setDisabled] = useState(false);

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data: FormData) => {
    const { name, email, message } = data;
    try {
      setDisabled(true);

      const templateParams = {
        name,
        email,
        message,
      };

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_USER_ID
      );

      reset();
      toastifySuccess();
      setDisabled(false);
    } catch (e) {
      console.log(e);
      setDisabled(false);
    }
  };

  return (
    <div className="flex justify-center items-center my-20">
      <div className="w-full max-w-lg  p-8 rounded shadow">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Form</h2>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Name & Email */}
          <div className="flex flex-col gap-6 mb-8">
            <div>
              <input
                type="text"
                {...register("name", {
                  required: "Please enter your name",
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
                className="w-full px-6 py-5 border-2 border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-red-500 text-lg">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="email"
                {...register("email", {
                  required: "Please enter your email",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className="w-full px-6 py-5 border-2 border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
                placeholder="Email address"
              />
              {errors.email && (
                <span className="text-red-500 text-lg">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          {/* Message */}
          <div className="mb-8">
            <textarea
              rows={5}
              {...register("message", {
                required: "Please enter your message",
              })}
              className="w-full px-6 py-5 border-2 border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
              placeholder="Your message"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-lg">
                {errors.message.message}
              </span>
            )}
          </div>
          <button
            className="w-full bg-blue-600 text-white py-4 rounded text-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            disabled={disabled}
            type="submit"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactForm;
