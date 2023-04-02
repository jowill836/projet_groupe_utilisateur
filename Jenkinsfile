pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/jowill836/projet_groupe_utilisateur_front.git']]])
      }
    }
    
    stage('Build') {
      steps {
        'npm install'
      }
    }
    
    stage('Test') {
      steps {
        'npm run test'
      }
    }
  }
}
