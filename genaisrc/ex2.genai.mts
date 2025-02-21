/**
 * Exercise 2: Write a file
 *
 * Use this script to enhance variable naming quality
 *
 * Hint : There is multiple ways to let GenAIScript edit files
 * - Check documentation of (system.files)[https://microsoft.github.io/genaiscript/reference/scripts/system/#systemfiles]
 *    and (system.changelog)[https://microsoft.github.io/genaiscript/reference/scripts/system/#systemchangelog]
 * - Do not forget (defFileOuput)[https://microsoft.github.io/genaiscript/reference/scripts/file-output/#declaring-file-outputs]
 *    to define which files GenAIScript can edit with
 */
script({
  model: "anthropic:claude-3-5-sonnet-20240620",
});

const file = env.files;

def("CODE_SNIPPET", file);

$`You are a code quality analyst specializing in variable naming conventions.
Your task is to analyze a given code snippet and update code to assure better naming on established best practices. 

Here are the key control points for variable naming that you should consider:

1. Designates what it contains: Variables should clearly indicate their purpose and content.
2. Uses team vocabulary: Names should align with the team's agreed-upon terminology.
3. Correct English: Variable names should use proper English spelling and grammar.
4. Whole words: Avoid abbreviations that could lead to ambiguity.
5. Consistent conventions: The same naming style should be used throughout the code.

Analyze the following code snippet:

<code_snippet>
CODE_SNIPPET
</code_snippet>

For each variable in the code snippet:
1. Identify the variable name
2. Evaluate it against each of the five control points
3. Provide specific feedback on what's good or needs improvement
4. Suggest better alternatives if applicable

After analyzing all variables, provide if applicable a fixed snippet and write file given as CODE_SNIPPET`;
