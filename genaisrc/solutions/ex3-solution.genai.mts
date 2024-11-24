/**
 * Exercise 3: Sub Prompt
 *
 * Note : to go further, can you take a URL as parameters and fetch the corresponding user story ?
 */
script({
  model: "anthropic:claude-3-5-sonnet-20240620",
});

const userStoryTitle = `As a user, when I click on a Pokemon card in my Home, I am redirected to a dedicated page for my Pokemon`;

const response = await runPrompt((_) => {
  _.def("USER_STORY", userStoryTitle);

  _.$`You are tasked with creating a branch name for the given user story:

  <user_story>
  USER_STORY
  </user_story>

  The branch name must follow these rules:
  - Start with 'feat/' for feature
  - Start with 'fix/' for bug fix
  - Feature part must be in kebab-case
  - Feature part must be maximum 20 characters
  - Feature part should be descriptive but concise
  - No special characters except underscores
  - No uppercase letters

  Examples of good branch names:
  - feat/add-navigation
  - fix/date-format

  Only output the branch name, nothing else.`;
});

const branchName = response.text;

const branch = await git.exec(["checkout", "-b", branchName]);
console.log(`Branch ${branch} created !`);
cancel();
