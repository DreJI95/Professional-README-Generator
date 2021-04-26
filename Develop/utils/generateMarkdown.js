// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license)
    { return '';}

    if (license.includes('Apache v2'))
    {
      return '![GitHub](https://img.shields.io/badge/license-Apache_V2-blue)'
    }

    if (license.includes('GNU GPLv3'))
    {
      return '![GitHub](https://img.shields.io/badge/license-GNU_GPL_v3-blueGnu-)'
    }

    if (license.includes('GNU GPLv2'))
    {
      return '![GitHub](https://img.shields.io/badge/license-GNU_GPL_v2-blueGnu-)'
    }

    if (license.includes('MIT'))
    {
      return '![GitHub](https://img.shields.io/badge/license-MIT-blue)'
    }

    if (license.includes('ISC'))
    {
      return '![GitHub](https://img.shields.io/badge/license-ISC-blue)'
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license)
    { return '';}

  if (license.includes('Apache v2'))
  {
    return 'Apache v2: https://choosealicense.com/licenses/apache-2.0/'
  }
  if (license.includes('GNU GPLv3'))
  {
    return 'GNU GPLv3: https://choosealicense.com/licenses/gpl-3.0/'
  }
  if (license.includes('GNU GPLv2'))
  {
    return 'GNU GPLv2: https://choosealicense.com/licenses/gpl-2.0/'
  }
  if (license.includes('MIT'))
  {
    return 'MIT: https://choosealicense.com/licenses/mit/'
  }
  if (license.includes('ISC'))
  {
    return 'ISC: https://choosealicense.com/licenses/isc/'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license[0])
  { return ''}

  else {
  return '# License';
  }
}

// TODO: Create a function that returns the email address to the README
// If there is no email, return an empty string
function emailEntered(email) {
  if (!email)
  { return ''}

  return `For further questions please contact me at:

  Email address: ${email}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const {title,description,installation,usage,collaborators,license,tests,contact,email} = data;

  return `
  ${license.map(results => renderLicenseBadge(results))}

  # ${title}

  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
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
     ${license.map(results => renderLicenseLink(results))}

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
