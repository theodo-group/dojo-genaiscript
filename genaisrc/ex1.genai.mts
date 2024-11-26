/**
 * Exercise 1: Read a file
 *
 * Use this script to evaluate variable naming quality
 *
 * Hint : Read it from here (https://microsoft.github.io/genaiscript/getting-started/)
 * There are multiple options
 *  - env.files : to get files when using VSCode Extension
 *  - workspace.findFiles : to pass files programmatically
 *  - tool like fs_read_file or agent agent_fs : to let Claude choose
 */
script({
  model: "anthropic:claude-3-5-sonnet-20240620",
});

// TODO : Pass file to analyze here using `def`

$`You are a code quality analyst specializing in variable naming conventions.
Your task is to analyze a given code snippet and suggest better naming on established best practices. 

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

After analyzing all variables, provide an overall assessment of the variable naming quality in the code snippet. Consider the following:
- The proportion of well-named vs. poorly-named variables
- The severity of any naming issues found
- The overall readability and maintainability of the code based on variable names

Finally, assign a quality score from 1 to 10, where 1 is extremely poor and 10 is excellent.

Present your analysis in the following format:

<analysis>
<variable_analysis>
[Your detailed analysis of each variable, following the steps outlined above]
</variable_analysis>

<quality_score>
[Your quality score from 1 to 10, with a brief justification]
</quality_score>
</analysis>`;
