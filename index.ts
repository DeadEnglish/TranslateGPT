import openAI from "openai";
import en from "./en.json";

const openai = new openAI();

const languages = [
  { value: "Hungarian", label: "hu" },
  { value: "Romanian", label: "ro" },
  { value: "Russian", label: "ru" },
  { value: "Polish", label: "pl" },
  { value: "Portugese", label: "pt" },
  { value: "Ukrainian", label: "uk" },
  { value: "spanish", label: "es" },
  { value: "Turkish", label: "tr" },
  { value: "Chinese (Mandarin)", label: "zh" },
];

const getTranslations = async () => {
  languages.forEach(async (language) => {
    const prompt = `Respond to this chat with nothing but JSON \n Please translate the following json file from English to ${language.value} \n ${JSON.stringify(en)}`;
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4o",
    });

    const message = chatCompletion.choices[0].message.content?.replace(
      /```json\n(.*?)\n```/g,
      "$1",
    );

    Bun.write(
      `translations/${language.label}.json`,
      message || "ERROR COULD NOT GET TRANSLATION RESPONSE",
    );
  });
};

getTranslations();
