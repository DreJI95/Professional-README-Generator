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

  return `For further questions please contact me at:
  
  Email address: ${email}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const {title,description,installation,usage,collaborators,license,tests,contact,email} = data;

  console.log(`${title,description,installation,usage,collaborators,license,tests,contact,email}`);

  return `
  # ${title}

  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](# Usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions?)

  # Description
     ${description}

  # Installation 
     ${installation}

  # Usage 
     ${usage}

  ${renderLicenseSection(license)}

  ${renderLicenseBadge(license)} ${renderLicenseLink(license)}

  # Contributing
     ${collaborators}

  # Tests
     ${tests}

  # Questions?

    GitHub profile: https://github.com/${contact}
     
    ${emailEntered(email)}
`;
}

module.exports = generateMarkdown;
