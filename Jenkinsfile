pipeline {
    agent {
        docker {
            image 'node:16.4.1'
            args '-v ./:/var/repo'
        }
    }
    stages {
        stage('Build') {
            steps {
                cd /var/repo/Tonomy-ID-Demo
                npm i
            }
        }
        stage('Lint') {
            steps {
                CI=true npm run lint
            }
        }
        stage('Test') {
            steps {
                npm test
            }
        }
    }
}