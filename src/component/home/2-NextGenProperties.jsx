const NextGenProperties = () => {
  const data = [
    {
      title: "Real Estate Development Portfolio",
      items: [
        { value: "08", label: "Total Projects" },
        { value: "$3.8M", label: "Market Value" },
        { value: "04", label: "Completed" },
        { value: "04", label: "Under Construction" },
      ],
    },
    {
      title: "Real Estate Investment Portfolio",
      items: [
        { value: "09", label: "Total Projects" },
        { value: "$4.0M", label: "Market Value" },
        { value: "09", label: "Funding Secured - In Progress" },
        { value: "50+", label: "Total Investors" },
      ],
    },
  ];
  return (
    <div className="bg-gray-100 ">
      <div className="p-16  container mx-auto">
        <h1 className="text-6xl font-bold text-center mb-10 text-gray-800">
          NextGen Properties At a Glance
        </h1>

        {data.map((section, index) => (
          <div key={index} className="mb-6 ">
            <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-6">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-xl h-36 w- rounded-lg p-6 text-center transition-transform transform hover:scale-105"
                >
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">
                    {item.value}
                  </h3>
                  <p className="text-gray-600  font-semibold text-md">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextGenProperties;
