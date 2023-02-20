// 1
// if (true) const a = 1;

// scene 2
// const FOO;

// 3
// const MY_OBJECT = { key: "value" };
// MY_OBJECT = { OTHER_KEY: "value" };


//4
// However, object keys are not protected, so the following statement is executed without problem.

// MY_OBJECT.key = "otherValue";
// Copy to Clipboard
// You would need to use Object.freeze() to make an object immutable.

