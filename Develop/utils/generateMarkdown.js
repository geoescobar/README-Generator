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
  const fileData =  `# ${projectTitle}

  ${projectOverview}
  
  ## Languages Used
  
  * For this project I used the following languages/frameworks:
  
  > ${languagesUsed}
  
  ## About the project 
  
  * Why did you build this project?
  
  > ${whyBuild}
  
  * What problem does it solve?
  
  > ${problemSolves}
  
  * What challenges did you face?
  
  > ${challenges}
  
  * What did you learn?
  
  > ${learned}
  
  
  ## URL Links 
  
  * This is the link to my GitHub repo:
  > [Github Repo](${repo})
  
  * This is the link to my GitHub repo:
  > [Github Pages](${pages})
  
  ## Screenshots 
  
  * Repo Image 
  
  * Pages Image 
  
  * Browser Image 
  
  
`
console.log(fileData);
return fileData;


}

module.exports = generateMarkdown;
