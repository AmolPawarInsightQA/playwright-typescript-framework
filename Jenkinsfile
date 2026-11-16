pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'npm ci'
        sh 'npx playwright install --with-deps'
      }
    }
    stage('Test') {
      steps { sh 'npm test' }
    }
  }
  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**,test-results/**,allure-results/**', allowEmptyArchive: true
    }
  }
}
