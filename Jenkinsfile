pipeline {
    agent{
         docker {
            image 'node:14' 
            args '-p 3000:3000' 
        }
    }

    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
