pipeline {
    agent { dockerfile true }


    stages {
        stage('Install dependencies') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}