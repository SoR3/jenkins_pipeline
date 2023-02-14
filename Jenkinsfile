pipeline {
    agent any

    stages {
        stage("Cloning Git") {
            steps {
                git 'https://github.com/SoR3/jenkins_pipeline.git'
            }

        }

        stage('Install dependencies') { 
            steps {
                sh 'npm install' 
            }
        }

        stage('Test') {
            steps {
                sh 'node test'
            }
        }
    }
}