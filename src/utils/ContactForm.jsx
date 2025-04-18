import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = () => {
    alert("OnSubmit Clicked!!!!");
  };

  return (
    <>
      <div className="container mx-auto flex-col md:px-16 md:pt-6 justify-between flex">
        <div className="flex justify-center flex-col md:flex-row md:justify-between">
          <h1 className="text-3xl md:text-4xl text-center mb-4">
            Ready to Build or Invest?
          </h1>
        </div>
        <div className="flex items-start text-justify md:py-6">
          <p className="text-center mb-4 md:mb-8 text-gray-600">
            Start building your dream home or secure your financial future
            today. Contact us to bring your vision to life!
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-2 sm:mb-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">First Name</label>
              <input
                {...register("firstName", { required: false })}
                className="input input-bordered w-full"
                placeholder="Enter Name"
              />
            </div>

            <div>
              <label className="block mb-2">Last Name</label>
              <input
                {...register("lastName", { required: false })}
                className="input input-bordered w-full"
                placeholder="Enter Name"
              />
            </div>

            <div>
              <label className="block mb-2">Email</label>
              <input
                {...register("email", {
                  required: false,
                  pattern: /^\S+@\S+$/i,
                })}
                className="input input-bordered w-full"
                placeholder="Enter Email Address"
              />
            </div>

            <div>
              <label className="block mb-2">Phone</label>
              <input
                {...register("phone", {
                  required: false,
                  pattern: /^[0-9-+()]*$/,
                })}
                className="input input-bordered w-full"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2">Subject</label>
            <input
              {...register("subject", { required: false })}
              className="input input-bordered w-full"
              placeholder="Enter Subject"
            />
          </div>

          <div>
            <label className="block mb-2">Description</label>
            <textarea
              {...register("description", { required: false })}
              className="textarea textarea-bordered w-full h-32"
              placeholder="Type Here"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              {...register("smsConsent")}
              className="checkbox mt-1"
            />
            <label className="text-sm text-justify text-gray-600">
              By checking this box, you agree to receive recurring automated
              promotional and personalized marketing text messages from NextGen
              Properties LLC at the mobile number provided. Consent is not a
              condition of any purchase. Message & data rates may apply. Text
              HELP for help. Text STOP to cancel. For any additional help,
              please reach out to our email at
              <a
                href="mailto:support@NextGenProperties.us"
                className="text-blue-600"
              >
                support@NextGenProperties.us
              </a>
              . For more information, view our
              <Link to="/our-policy" className="pl-1 text-blue-600">
                Privacy Policy
              </Link>
              and
              <Link to="/terms-and-conditions" className="pl-1 text-blue-600">
                SMS Terms of Service
              </Link>
              .
            </label>

            {/* <label className="text-sm text-justify text-gray-600">
              By checking this box, I agree to receive SMS updates, promotions,
              and offers from Nextgenproperties at the phone number provided.
              Msg & data rates may apply. Msg frequency varies. Reply STOP to
              unsubscribe.
              <Link to="/terms-and-conditions" className="text-blue-600">
                SMS Terms & Conditions
              </Link>
            </label> */}
          </div>

          <div className="flex justify-start">
            <button
              type="submit"
              className=" border text-center transition bg-blue-600  py-2 text-white border-blue-600 hover:text-blue-600 duration-300 px-12  rounded-full shadow-md hover:bg-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
