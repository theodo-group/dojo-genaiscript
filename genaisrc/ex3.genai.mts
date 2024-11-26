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
script({
  model: "anthropic:claude-3-5-sonnet-20240620",
});

const userStoryTitle = `As a user, when I click on a Pokemon card in my Home, I am redirected to a dedicated page for my Pokemon`;

// ...

const branchName = "";

const branch = await git.exec(["checkout", "-b", branchName]);
console.log(`Branch ${branch} created !`);
