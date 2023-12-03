const sheetURL = "https://sheetdb.io/api/v1/2s6pe0xg7yxde";

type SheetRowSchema = {
  id: string;
  username: string;
  event: string;
  date: string;
  sleep_score: string;
  feeling: string;
};

type SheetRowCreateData = Omit<SheetRowSchema, "id" | "date">;

type SheetResponse = {
  created: number;
};

const prepareData = (data: SheetRowCreateData[]): SheetRowSchema[] =>
  data.map((d) => ({
    id: "INCREMENT",
    date: "DATETIME",
    ...d,
  }));

export const submitRows = async (
  data: SheetRowCreateData[],
): Promise<SheetResponse> => {
  return fetch(sheetURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: prepareData(data) }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};
