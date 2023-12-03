import { addDailyEntry } from "./_actions";
import { SleepScoreInput } from "./_components/SleepScopeInput";
import { SubmitButton } from "./_components/SubmitButton";
import { SingleOptionSelect } from "./_components/SingleOptionSelect";
import { MultiOptionSelect } from "./_components/MultiOptionSelect";

const HomePage = () => {
  return (
    <div className="max-w-xl m-auto">
      <form action={addDailyEntry}>
        <div className="mb-4">
          <SingleOptionSelect
            title="Username"
            formName="username"
            options={["Bob", "Alex"]}
          />
        </div>
        <div className="mb-4">
          <MultiOptionSelect
            title="Conditions"
            formName="events"
            options={[
              "No caffeine after 10am",
              "No food after 8pm",
              "Bed by 10pm",
              "No phone in bed",
            ]}
          />
        </div>
        <div className="mb-4">
          <SleepScoreInput />
        </div>
        <div className="mb-6">
          <SingleOptionSelect
            title="How do you feel?"
            formName="feeling"
            options={["Great", "Bad", "Okay", "Good"]}
          />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};

export default HomePage;
