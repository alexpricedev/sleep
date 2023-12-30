import { MultiOptionSelect } from "./_components/MultiOptionSelect";
import { SingleOptionSelect } from "./_components/SingleOptionSelect";
import { SleepScoreInput } from "./_components/SleepScopeInput";
import { SubmitButton } from "./_components/SubmitButton";
import { Today } from "./_components/Today";
import { Textarea } from "./_components/Textarea";
import { addDailyEntries } from "./_actions";
import {
  activityOptions,
  alarmOptions,
  caffeineOptions,
  feelingOptions,
  napOptions,
  otherEventOptions,
  sleepAidOptions,
  timingOptions,
  userOptions,
  windDownOptions,
  workOptions,
} from "./_options";

const HomePage = () => {
  return (
    <div className="max-w-xl m-auto">
      <Today />
      <form action={addDailyEntries}>
        <div className="mb-8">
          <SingleOptionSelect
            formName="username"
            options={userOptions}
            title="User"
          />
        </div>

        <h2 className="mb-4 text-white font-bold text-2xl">
          {"Yesterday's conditions"}
        </h2>

        <div className="mb-4">
          <MultiOptionSelect
            formName="events"
            options={workOptions}
            title="Work"
          />
        </div>

        <div className="mb-4">
          <MultiOptionSelect
            formName="events"
            options={activityOptions}
            title="Activity"
          />
        </div>

        <div className="mb-4">
          <MultiOptionSelect
            formName="events"
            options={caffeineOptions}
            title="Caffeine"
          />
        </div>

        <div className="mb-4">
          <MultiOptionSelect
            formName="events"
            options={timingOptions}
            title="Timing"
          />
        </div>

        <div className="mb-4">
          <MultiOptionSelect
            formName="events"
            options={napOptions}
            title="Naps"
          />
        </div>

        <div className="mb-4">
          <MultiOptionSelect
            formName="events"
            options={windDownOptions}
            title="Pre-bed wind down"
          />
        </div>

        <div className="mb-4">
          <MultiOptionSelect
            formName="events"
            options={sleepAidOptions}
            title="Sleep aids"
          />
        </div>

        <div className="mb-4">
          <MultiOptionSelect
            formName="events"
            options={alarmOptions}
            title="Wake up strategy"
          />
        </div>

        <div className="mb-4">
          <MultiOptionSelect
            formName="events"
            options={otherEventOptions}
            title="Other factors"
          />
          <p className="text-sm italic font-normal pt-2 text-gray-500 dark:text-white opacity-70">
            Tip: You can select multiple options here
          </p>
        </div>

        <div className="mb-4">
          <SleepScoreInput />
        </div>

        <div className="mb-4">
          <SingleOptionSelect
            formName="feeling"
            options={feelingOptions}
            title="How do you feel?"
          />
        </div>

        <div className="mb-6">
          <Textarea
            formName="notes"
            title="Notes"
            placeholder="Write any notes you have here..."
          />
        </div>

        <SubmitButton />
      </form>
    </div>
  );
};

export default HomePage;
