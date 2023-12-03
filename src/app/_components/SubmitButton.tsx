"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./Button";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  const text = pending ? "Loading..." : "Submit";

  return <Button text={text} disabled={pending} type="submit" />;
};
