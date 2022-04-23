// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const fileData =  `# ${data.projectTitle}

  ${data.projectOverview}

  ---
## Table of Contents:

- [Description](#whyBuild)
- [URL Links](#repo)
- [Installation](#install)
- [Questions](#github)


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
