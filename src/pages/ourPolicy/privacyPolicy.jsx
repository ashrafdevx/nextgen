const PrivacyPolicy = () => {
  return (
    <>
      <div className="md:mb-10 bg-gray-100">
        <div className="container mx-auto md:mb-10 lg:pt-6">
          <div className="sm:px-8 lg:px-16">
            <h1 className="flex text-2xl font-medium md:justify-start justify-center sm:text-4xl pt-4  sm:pt-7">
              Privacy Policy
            </h1>
            <div className="flex text-justify sm:text-lg flex-col md:pt-6 lg:pt-4">
              <p className="py-3 md:py-2 px-6 sm:px-1 lg:py-6">
                Text message communications. We use text messaging to
                communicate with you about your service. Normal data and
                messaging rates apply, and the messaging frequency may vary.
                Mobile Carriers are not liable for delayed or undelivered
                messages.
              </p>

              <p className="py-3 sm:py-6 md:py-2 lg:py-6 px-6 sm:px-1 ">
                No mobile information will be shared with third
                parties/affiliates for marketing/promotional purposes. All other
                categories exclude text messaging originator opt-in data and
                consent; this information will not be shared with or obtained by
                any third parties.
              </p>

              <p className="py-3 sm:py-6 md:py-2 lg:py-6 px-6 sm:px-1 ">
                Opt-out of text message communications. You may opt out of text
                messaging at any time by replying to any message with STOP or
                contacting us at{" "}
                <a href="#" className="underline text-blue-700 font-medium">
                  {" "}
                  support@nextgenproperties.us.
                </a>{" "}
                This will end the communications from that particular phone
                number. You may continue to receive service-related and other
                non-marketing text messages from other phone numbers managed by
                Company, and you may opt out of those in a similar fashion.
              </p>

              <p className="py-3 sm:py-6 md:py-2 lg:py-6 px-6 sm:px-1 ">
                {` Your messaging policy can be part of the privacy policy or a
                separate web page/document on your website`}
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
