import { submitRows } from "@/lib/sheets";

export const addDailyEntry = async (formData: FormData) => {
  "use server";

  const username = formData.get("username");
  const events = formData.getAll("events");
  const sleepScore = formData.get("sleep_score");
  const feeling = formData.get("feeling");

  if (!username || !Array.isArray(events) || !feeling) return;

  return submitRows(
    events.map((event) => ({
      username: username.toString(),
      event: event.toString(),
      sleep_score: sleepScore ? sleepScore.toString() : "None",
      feeling: feeling.toString(),
    })),
  );
};
