/**
 * Exercise 4: Structured Output
 *
 * Use the model to output a valid JSON object according to the schema
 *
 * Hint :
 * - https://platform.openai.com/docs/guides/structured-outputs
 * - https://microsoft.github.io/genaiscript/reference/scripts/structured-output/
 * - Use zod and zod-to-json-schema to generate the schema
 */
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

script({
  model: "openai:gpt-4o",
});

const schema = z.object({
  name: z.string(),
  lastName: z.string(),
  class: z.enum(["warrior", "mage", "rogue"]),
  birthDate: z.string().describe("ISO 8601 date YYYY-MM-DD"),
});

type Player = z.infer<typeof schema>;

const response = undefined; // TODO

const player = response.json as Player;
if (player.class === "warrior") {
  console.log(`🛡️ Warrior: ${player.name} ${player.lastName}`);
} else if (player.class === "mage") {
  console.log(`🪄 Mage: ${player.name} ${player.lastName}`);
} else if (player.class === "rogue") {
  console.log(`🗡️ Rogue: ${player.name} ${player.lastName}`);
}
