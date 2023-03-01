import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const Homepage = () => {
  const homeData = [
    {
      icon: <SunIcon className="h-8 w-8" />,
      title: "Examples",
      text1: "Explain Something to me",
      text2: "What is the difference between a dog and a cat?",
      text3: "What is the color of the sun?",
    },
    {
      icon: <BoltIcon className="h-8 w-8" />,
      title: "Capabilities",
      text1: "Remembers what user said earlier in the conversation",
      text2: "Allows user to provide follow-up corrections",
      text3: "Trained to decline inappropriate requests",
    },
    {
      icon: <ExclamationTriangleIcon className="h-8 w-8" />,
      title: "Limitations",
      text1: "May occasionally generate incorrect information",
      text2: "May occasionally produce harmful instructions or biased content",
      text3: "Limited knowledge of world and events after 2021",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        {homeData.map((data) => (
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              {data.icon}
              <h2>{data.title}</h2>
            </div>

            <div className="space-y-2 ">
              <p className="infoText">{data.text1}</p>
              <p className="infoText">{data.text2}</p>
              <p className="infoText">{data.text3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
