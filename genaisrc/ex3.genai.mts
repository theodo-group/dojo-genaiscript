/**
 * Exercise 3: Sub Prompt
 *
 * Create a new branch for your next ticket
 *
 * Hint :
 * - use runPrompt
 */
script({
  model: "anthropic:claude-3-5-sonnet-20240620",
});

const userStoryTitle = `As a user, when I click on a Pokemon card in my Home, I am redirected to a dedicated page for my Pokemon`;

// ...

const branchName = "";

const branch = await git.exec(["checkout", "-b", branchName]);
console.log(`Branch ${branch} created !`);
cancel();
