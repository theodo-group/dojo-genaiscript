/**
 * Exercise 3: Sub Prompt
 *
 * Create a new branch for your next ticket
 *
 * Hint :
 * - use (runPrompt)[https://microsoft.github.io/genaiscript/reference/scripts/inline-prompts/#_top]
 * - 2 options to retrieve branch name
 *  - from `text` but make sure the model only ouput branch name. Note it can degrade performance to output without reasoning
 *  - using `fences` to extract it from the response
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

const response = await runPrompt(
  (_) => {
    _.$`Generate a random player according to schema`;
  },
  {
    responseType: "json_schema",
    responseSchema: zodToJsonSchema(schema),
  }
);

const player = response.json as Player;
if (player.class === "warrior") {
  console.log(`🛡️ Warrior: ${player.name} ${player.lastName}`);
} else if (player.class === "mage") {
  console.log(`🪄 Mage: ${player.name} ${player.lastName}`);
} else if (player.class === "rogue") {
  console.log(`🗡️ Rogue: ${player.name} ${player.lastName}`);
}
