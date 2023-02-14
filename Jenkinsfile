pipeline {
    agent any

    tools { nodejs "node" }
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