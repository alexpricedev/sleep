const sheetURL = process.env.SHEETDB_URL;

if (!sheetURL) throw new Error("Missing SHEETDB_URL env var");

type SheetRowSchema = {
  id: string;
  username: string;
  event: string;
  date: string;
  sleep_score: string;
  feeling: string;
};

type SheetRowCreateData = Omit<SheetRowSchema, "id" | "date">;

type SheetDBResponse = {
  created: number; // Number of rows created
};

const prepareData = (data: SheetRowCreateData[]): SheetRowSchema[] =>
  data.map((d) => ({
    id: "INCREMENT",
    date: "DATETIME",
    ...d,
  }));

export const submitRows = async (
  data: SheetRowCreateData[],
): Promise<{ success: boolean }> => {
  return fetch(sheetURL, {
    method: "POST",
    body: JSON.stringify({ data: prepareData(data) }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(({ created }: SheetDBResponse) => ({ success: created > 0 }));
};
