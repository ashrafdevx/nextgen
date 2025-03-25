import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-medium mb-6 text-start">
        SMS Terms & Conditions
      </h1>

      <div className="space-y-4 text-sm sm:text-base leading-relaxed">
        <p>
          <strong>1. Program description:</strong> When opted-in, you will
          receive text messages (SMS/MMS) to your mobile number. These kinds of
          messages may include a response to an inquiry, real-time texts to ask
          and answer questions about our services and pricing, and appointment
          confirmations.
        </p>

        <p>
          <strong>2. Program frequency:</strong> Message frequency will vary
          depending on the conversation.
        </p>

        <p>
          <strong>3. Opt out:</strong> You can opt-out of this service at any
          time. Just text “STOP” to the phone number. After you text “STOP” to
          us, we will send you an SMS reply to confirm that you have been
          unsubscribed. After this, you will no longer receive SMS messages from
          us. If you want to join again, just sign up as you did the first time
          or text “START,” and we will start sending SMS messages to you again.
        </p>

        <p>
          <strong>4. Help:</strong> If you are experiencing any issues, you can
          reply with the keyword HELP. Or, you can get help directly from us at{" "}
          <Link to="/contact-us" className="text-blue-600 underline">
            our contact page
          </Link>
          .
        </p>

        <p>
          <strong>5. Interruption:</strong> Carriers, such as AT&T, are not
          liable for delayed or undelivered messages.
        </p>

        <p>
          <strong>6. Costs:</strong> Message and data rates may apply for any
          messages sent to you from us and to us from you. If you have any
          questions about your text plan or data plan, please contact your
          wireless provider.
        </p>

        <p>
          <strong>7. Privacy:</strong> If you have any questions regarding
          privacy, please read our
          <Link to="/our-policy" className="text-blue-600 underline ml-1">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsAndCondition;
