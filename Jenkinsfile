pipeline {
  agent any
  tools {
    nodejs 'Node 18 LTS'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/jowill836/projet_groupe_utilisateur_front.git']]])
      }
    }
    
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    
    stage('Deploy') {
      steps {
        sh 'npm run deploy'
      }
    }
  }
}
