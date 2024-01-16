pipeline {
  agent any
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npm install 
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test
        '''
      }
      
    }
  }
}