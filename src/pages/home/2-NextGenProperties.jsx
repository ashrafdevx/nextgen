import { useState, useEffect } from "react";

const NextGenProperties = () => {
  const data = [
    {
      title: "Our Portfolio",
      items: [
        { value: "09", label: "Total Projects", numericValue: 9 },
        { value: "$5M", label: "Market Value", numericValue: 5 },
        { value: "04", label: "Completed", numericValue: 4 },
        { value: "03", label: "In Progress", numericValue: 3 },
        { value: "$3.0M", label: "Funding In Progress", numericValue: 3 },
        { value: "55+", label: "Total Investors", numericValue: 55 },
      ],
    },
    {
      // title: "Real Estate Investment Portfolio",
      items: [
        // {
        //   value: "07",
        //   label: "Funding Secured - In Progress",
        //   numericValue: 7,
        // },
      ],
    },
  ];

  const AnimatedCounter = ({ endValue, value }) => {
    const [count, setCount] = useState(0);
    const duration = 2000; // Animation duration in milliseconds

    useEffect(() => {
      let startTime = null;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        if (typeof endValue === "number") {
          setCount(Math.floor(endValue * progress));
        }

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [endValue]);

    // Format the display value based on the original format
    const formatValue = () => {
      if (value.startsWith("$")) {
        return `$${count.toFixed(1)}M`;
      } else if (value.endsWith("+")) {
        return `${count}+`;
      } else {
        return count.toString().padStart(2, "0");
      }
    };

    return formatValue();
  };

  return (
    <div className="bg-gray-100">
      <div className=" p-6 sm:p-16 container mx-auto">
        <h1 className="text-lg sm:text-5xl font-bold font-rubik text-center mb-2 sm:mb-10 text-gray-800">
          NextGen Properties At a Glance
        </h1>

        {data.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-sm sm:text-3xl  font-quicksand font-semibold text-gray-700 mb-6 text-center">
              {section.title}
            </h2>
            <div className="grid grid-cols-2 font-rubik sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-xl sm:h-36 rounded-lg p-6 text-center transition-transform transform hover:scale-105"
                >
                  <h3 className=" text-xl sm:text-3xl font-bold text-blue-600 mb-2">
                    <AnimatedCounter
                      endValue={item.numericValue}
                      value={item.value}
                    />
                  </h3>
                  <p className="text-gray-600 font-semibold text-sm sm:text-md">
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
