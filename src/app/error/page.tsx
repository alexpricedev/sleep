import { GradientText } from "../_components/GradientText";
import { LinkButton } from "../_components/LinkButton";

const ErrorPage = () => {
  return (
    <div className="max-w-xl m-auto">
      <h1 className="mb-4 font-extrabold text-5xl">
        <GradientText colorWay="red" text="There was an error" />
      </h1>
      <p className="text-2xl font-normal mb-4 text-gray-500 dark:text-white">
        {`Something went wrong so we've not been able to save
        your sleep data for last night.`}
      </p>
      <p className="text-md font-normal mb-6 text-gray-500 dark:text-gray-400">
        Please go back and try again.
      </p>
      <LinkButton href="/" text="Go back" />
    </div>
  );
};

export default ErrorPage;
