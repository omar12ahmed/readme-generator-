// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Process

  ### Technologies Used:
  
  ${licenseBadge}
  
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

function generateLicenseBadge(license) {
  const badgeURL = `https://img.shields.io/badge/license-${encodeURIComponent(license)}-green`;
  return `![License Badge](${badgeURL})`;
}

module.exports = generateMarkdown;
