import { MultiOptionSelect } from "./_components/MultiOptionSelect";
import { SingleOptionSelect } from "./_components/SingleOptionSelect";
import { SleepScoreInput } from "./_components/SleepScopeInput";
import { SubmitButton } from "./_components/SubmitButton";
import { addDailyEntries } from "./_actions";
import { eventsOptions, feelingOptions, userOptions } from "./_options";

const HomePage = () => {
  return (
    <div className="max-w-xl m-auto">
      <form action={addDailyEntries}>
        <div className="mb-4">
          <SingleOptionSelect
            formName="username"
            options={userOptions}
            title="User"
          />
        </div>
        <div className="mb-4">
          <MultiOptionSelect
            formName="events"
            options={eventsOptions}
            title="Conditions"
          />
        </div>
        <div className="mb-4">
          <SleepScoreInput />
        </div>
        <div className="mb-6">
          <SingleOptionSelect
            formName="feeling"
            options={feelingOptions}
            title="How do you feel?"
          />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};

export default HomePage;
