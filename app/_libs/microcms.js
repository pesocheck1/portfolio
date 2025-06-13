import { createClient } from "microcms-js-sdk";

// Подключение к microCMS
export const client = createClient({
  serviceDomain: "myportfoliosas", // <-- сюда вставь свой service ID
  apiKey: "dy2T893ROKAX5Yn481OkKlGNs9TaQu6aim8y", // <-- сюда вставь свой API key
});

// Получение иконок
export async function getIcons() {
  const data = await client.get({ endpoint: "skillsicons" });
  return data.contents ?? []; // если contents нет, возвращаем пустой массив
}
