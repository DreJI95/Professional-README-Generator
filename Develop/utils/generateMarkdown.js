// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license)
    { return '';}

    return ` badge `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license)
    { return '';}

    return `${license}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license)
    { return '';}

    return `# License`;
}

// TODO: Create a function that returns the email address to the README
// If there is no email, return an empty string
function emailEntered(email) {
  if (!email)
  { return '';}

  return `Email address: ${email}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  # Table of Contents
  * [Description](# Description)
  * [Installation](# Installation)
  * [Usage](# Usage)
  * [Contributing](# Contributing)
  * [License](# License)
  * [Tests](# Tests)
  * [Questions](# Questions?)

  # Description
     ${data.description}

  # Installation 
     ${data.installation}

  # Usage 
     ${data.usage}

  ${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}

  # Contributing
     ${data.contributing}

  # Tests
     ${data.tests}

  # Questions?
     ${data.contact}
     ${emailEntered(data.email)}

  # References
     ${data.references}
`;
}

module.exports = generateMarkdown;
