"use server";

import { redirect } from "next/navigation";
import { submitRows } from "@/lib/sheets";

export const addDailyEntries = async (formData: FormData) => {
  const username = formData.get("username");
  const events = formData.getAll("events");
  const sleepScore = formData.get("sleep_score");
  const feeling = formData.get("feeling");
  const notes = formData.get("notes");

  if (!username || !Array.isArray(events) || !sleepScore || !feeling) {
    redirect("/error");
  }

  // If they've not selected any "events" but still want to
  // submit their sleep score we need to add an "empty" event
  const _events = events.length > 0 ? events : ["None"];

  const { success } = await submitRows(
    _events.map((event) => ({
      username: username.toString(),
      event: event.toString(),
      sleep_score: sleepScore.toString(),
      feeling: feeling.toString(),
      notes: notes?.toString() || "",
    })),
  );

  redirect(success ? "/success" : "/error");
};
