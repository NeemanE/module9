// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === 'CC--0') {
    return `https://creativecommons.org/licenses/by-nd/4.0` 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project
  ${data.title}
  ${data.license}

  # Description
  ${data.description}

  # Table of Contents
  * [Description](#-Description)
  * [Installation](#-Installation)
  * [Usage](#-Usage)
  * [License](#-License)
  * [Contribution](#-Contribution)
  * [Tests](#-Tests)
  * [Contact](#-Contact)

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # License
 ${data.license}

  # Contribution
  ${data.contribution}

  # Tests
   ${data.tests}

  # Contact
  ${data.userName}
  ${data.Email}

`;
}

module.exports = generateMarkdown;
