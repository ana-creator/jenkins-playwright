
pipeline {
 agent any
 stages {
   stage('Install npm packages') {
     steps {
       bat 'npm install'
     }
   }
   stage('Install Playwright') {
     steps {
       bat 'npx playwright install'
     }
   }
   stage('Help') {
     steps {
       bat 'npx playwright test --help'
     }
   }
   stage('Test') {
     steps {
       bat '''
         npx playwright test --list
         npx playwright test
       '''
     }
    } 
    //not good practice to attach screenshots here, it's just an example
     stage('Archive Artifacts') {
     steps {
       archiveArtifacts artifacts: 'tests/*.png', allowEmptyArchive: true
     }
   }
   
 }
}