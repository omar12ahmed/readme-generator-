// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  
  ${data.description}

  ## Table of Content 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#question)

  ## Installation

  ${data.installation}

## Usage 

${data.usage}

## License

This project is licensed under ${data.license} license

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, you can reach me on ${data.email} or visit my [Github profile](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
