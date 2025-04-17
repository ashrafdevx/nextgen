import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-medium mb-6 text-start">
        SMS Terms & Conditions
      </h1>

      <div className="space-y-4 text-sm sm:text-base leading-relaxed">
        <p>
          <strong>1- SMS Consent Communication:</strong>
          The information (Phone Numbers) obtained as part of the SMS consent
          process will not be shared with third parties for marketing purposes.
        </p>
        <p>
          <strong>2- Types of SMS Communications:</strong> If you have consented
          to receive text messages from NextGen Properties LLC, you may receive
          messages related to the following: Sales Agreements, Project Plans &
          Construction Details, reminders, Follow-up messages Billing inquiries
        </p>
        <p>
          <strong>3- Message Frequency:</strong>Message frequency may vary
          depending on the type of communication. For example, you may receive
          up to 3 SMS messages per week related to the services we offer.
        </p>
        <p>
          <strong>4- Potential Fees for SMS Messaging:</strong> Please note that
          standard message and data rates may apply, depending on your carrier’s
          pricing plan. These fees may vary if the message is sent domestically
          or internationally. .
        </p>
        <p>
          <strong>5- Opt-In Method:</strong> You may opt-in to receive SMS
          messages from NextGen Properties LLC in the following ways: Verbally,
          during a conversation, By submitting an online form, By filling out a
          paper form.
        </p>
        <p>
          <strong>6- Opt-Out Method:</strong>{" "}
          {`You can opt out of receiving SMS
          messages at any time. To do so, simply reply "STOP" to any SMS message
          you receive. Alternatively, you can contact us directly to request
          removal from our messaging list.`}
        </p>
        <p>
          <strong>7. Help:</strong>If you are experiencing any issues, you can
          reply with the keyword HELP. Or, you can get help directly from us at
          <Link to="/" className="text-blue-600 underline ml-1">
            nextgenproperties.us
          </Link>
          .
        </p>
        <p>
          <strong>Additional Options:</strong>If you do not wish to receive SMS
          messages, you can choose not to check the SMS consent box on our
          forms.
        </p>{" "}
        <p>
          <strong>8- Standard Messaging Disclosures:</strong> Message and data
          rates may apply. You can opt out at any time by texting {` "STOP" `}.
          For assistance, text {`"HELP"`} or visit our
          <Link to="/our-policy" className="text-blue-600 underline ml-1">
            Privacy Policy
          </Link>
          and
          <Link
            to="/terms-and-conditions"
            className="text-blue-600 underline ml-1"
          >
            Terms and Conditions
          </Link>
          pages. Message frequency may vary.
        </p>
      </div>
    </div>
  );
};

export default TermsAndCondition;
