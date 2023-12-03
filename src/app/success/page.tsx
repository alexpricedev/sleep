import { GradientText } from "../_components/GradientText";
import { LinkButton } from "../_components/LinkButton";

const SuccessPage = () => {
  return (
    <div className="max-w-xl m-auto">
      <h1 className="mb-4 font-extrabold text-5xl">
        <GradientText colorWay="green" text="Nice work!" />
      </h1>
      <p className="text-2xl font-normal mb-4 text-gray-500 dark:text-white">
        You've successfully entered your sleep data for last night.
      </p>
      <p className="text-md font-normal mb-6 text-gray-500 dark:text-gray-400">
        Make sure to come back tomorrow. The more data you collect, the better
        we can understand your sleep and the more we can tailor our
        recommendations and improve your sleep quality.
      </p>
      <LinkButton href="/" text="Go back home" />
    </div>
  );
};

export default SuccessPage;
