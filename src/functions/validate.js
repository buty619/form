export default function validate(input) {
  const output = {};
  if (input.name === "") {
    output.name = "Error: Required value";
  }
  if (input.text === "") {
    output.text = "Error: Required value";
  }
  if (Object.keys(output).length !== 0) {
    return output;
  }
  return null;
}
