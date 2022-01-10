# ggcDeployment

# Apply sequence fresh cluster

##  Namespaces:
Kubectl apply -f Namespaces/namespace.yaml
(all context applied on plantr, to switch in kubectl get all> kubectl config set-context --current --camespace=plantr)

##  PVC and storageclass
Kubectl apply -f Storage/database-storage.yml
Kubectl apply -f Storage/kafka-storage.yml

##  MSSQL database 
Kubectl apply -f Database/mssql-deployment.yaml

##  Kafka and Zookeeper
Kubectl apply -f rabbitMQ/kafka.yml
Kubectl apply -f rabbitMQ/zookeeper.yml

##  Microservices service
Kubectl apply -f Services/Micro/auth-service.yaml
Kubectl apply -f Services/Micro/profile-service.yaml

##  Gateway
Kubectl apply -f Services/gateway-service.yml

##  Frontend 
Kubectl apply -f Services/plantr-frontend-service.yaml

##  Secrets
(!IMPORTANT!) Change the ip's within the yml to the ones assigned from the cluster, see slides (!IMPORTANT!)
Kubectl apply -f Secrets/Secrets.yml
After this step, delete the pods of the gateway, mssql, authservice and profileservice to apply these overrides

# Testing

## Auth service
Endpoint: Register
POST http://{IP of auth service}/api/User
Model:
{
  "FirstName": "test",
  "LastName ": "test",
  "Email": "test",
  "password": "test"
}
Expected result: 200OK

Endpoint: Login
POST http://{IP of auth service}/api/Authentication
Model:
{
  "FirstName": "test",
  "LastName ": "test",
  "Email": "test",
  "password": "test"
}
Expected result: 200OK + JWTtoken in body

## Gateway
Endpoint: Register
POST http://{IP of gateway}/register
Model:
{
  "FirstName": "test",
  "LastName ": "test",
  "Email": "test",
  "password": "test"
}
Expected result: 200OK

Endpoint: Login
POST http://{IP of gateway}/login
Model:
{
  "FirstName": "test",
  "LastName ": "test",
  "Email": "test",
  "password": "test"
}
Expected result: 200OK + JWTtoken in body


##  load testing pod autoscalers
using k6 CLI > k6Scripts/script.js > k6 run --vus 1000 --iterations 10000 script.js (do not forget to add the correct ip of the auth or gateway service)

# repositories used within the cluster

##  RTR 
https://github.com/Fontys-S6-maatwerk/RTRGateway
https://github.com/Fontys-S6-maatwerk/RTRApp

##  GGC 
https://github.com/Fontys-S6-maatwerk/GgcWebsite

https://github.com/Fontys-S6-maatwerk/GGCGateway

https://github.com/Fontys-S6-maatwerk/NotificationService
https://github.com/Fontys-S6-maatwerk/CommentService
https://github.com/Fontys-S6-maatwerk/FollowerService
https://github.com/Fontys-S6-maatwerk/AuthenticationService
https://github.com/Fontys-S6-maatwerk/UserService
https://github.com/Fontys-S6-maatwerk/GGCTranslationService
https://github.com/Fontys-S6-maatwerk/SolutionsService
https://github.com/Fontys-S6-maatwerk/AchievementService


##  twitter-bot 
https://github.com/Fontys-S6-maatwerk/GatewayPrototype
https://github.com/Fontys-S6-maatwerk/PythonAiService
https://github.com/Fontys-S6-maatwerk/TwitterbotService 
https://github.com/Fontys-S6-maatwerk/TwitterDataService
https://github.com/Fontys-S6-maatwerk/AchmeaDataService
https://github.com/Fontys-S6-maatwerk/ImpactCalcService
https://github.com/Fontys-S6-maatwerk/WeatherDataService
https://github.com/Fontys-S6-maatwerk/InfoDash-Project-Management 
https://github.com/Fontys-S6-maatwerk/MachineLearningTrainingService