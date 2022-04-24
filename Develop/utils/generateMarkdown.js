// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT License') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else if (license === 'Apache License v2.0') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  } else if (license === 'IBM Public License Version 1.0') {
    badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]'
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ''
  if (license === 'MIT License'){
    licenseLink = '(https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache License v2.0') {
    licenseLink = '(https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'IBM Public License Version 1.0') {
    licenseLink = '(https://opensource.org/licenses/IPL-1.0)'
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSelection = '';
  if (license === 'none') {
    licenseSelection = ''
  } else {
    licenseSelection = `${license}`
  }
  return licenseSelection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const fileData =  `# ${data.projectTitle}

  ${data.projectOverview}
  ---
  ## License

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}


  ---
## Table of Contents:

- [License](#license)
- [Description](#description)
- [Links](#links)
- [Installation](#installation)
- [Questions](#questions)


  ---
  ## Description

  #### Languages Used
  
  ${data.languagesUsed.map(lang => `\t* ${lang}\n`).join('')}
  
  #### Why did you build this project?
  
  * ${data.whyBuild}
  
  #### What problem does it solve?
  
  * ${data.problemSolves}
  
  #### What challenges did you face?
  
  * ${data.challenges}
  
  #### What did you learn?
  
  * ${data.learned}
  
  ---
  ## Links 
  
  #### This is the link to my GitHub repo:
  * [Github Repo](${data.repo})
  ---

  ## Installation
  * ${data.install}

  ---
  ## Questions 

  #### If you have questions regarding this repository? Below is my contact info:

  * ${data.github}
  * ${data.email}

`
// console.log(fileData);
return fileData;


}

module.exports = generateMarkdown;
