# About this repo

This repository is meant to bring all the microservices of the Global Goals Community, Race To Resilience and TwitterBob microservices together, and to supply the configuration files for the production Kubernetes cluster. This is served in two diffrent ways: Azure for cloud development and docker commpose for the dev enviroment.

# Deployment

Follow the instructions below to deploy the microservices to the cluster, or to change the deployment. This configuration is served for both Azure and docker compose, both with CLI instructions for an optimal setup

## Docker-compose

### Assumptions: 

- have a local installation of docker running
- have a local MSSQL database setup ? (might be in compose, check?)


TODO: Info

## Azure

### Assumptions: 

- have an Azure account with credits, configured with a kubernetes cluster and resource group
- have an CLI connection set up in the local command line using AZ login
- 

TODO: Info












================================================

//=====================
// DEPRICATED information for K3D cluster in linux server, might still be usefull for testing the cluster locally in k8s
//=====================
# About this repo

This repository is meant to bring all the microservices of the Global Goals Community, Race To Resilience and TwitterBob microservices together, and to supply the configuration files for the production Kubernetes cluster.

# Deployment

Follow the instructions below to deploy the microservices to the cluster, or to change the deployment.

## Assumptions: 
- Cluster runs on private server with linux server 20.04
- K3D cluster installed with https://k3d.io/v5.0.3/ 
              
**IMPORTANT:** to create the cluster: `sudo k3d cluster create devcluster --api-port 127.0.0.1:6443 -p 80:80@loadbalancer -p 443:443@loadbalancer`
              
**YOU NEED THE PORT MAPPING FOR IT TO WORK**

## UP

Run the following to get all services running, using the config file in this repo:

```
sudo kubectl apply \
-f https://raw.githubusercontent.com/Fontys-S6-maatwerk/Deployment/master/service_frontend.yml \
-f https://raw.githubusercontent.com/Fontys-S6-maatwerk/Deployment/master/deployment_frontend.yml \
-f https://raw.githubusercontent.com/Fontys-S6-maatwerk/Deployment/master/ingress_frontend.yml
```

## DOWN

Run the following to stop all services, using the config file in this repo:

```
sudo kubectl delete \
-f https://raw.githubusercontent.com/Fontys-S6-maatwerk/Deployment/master/deployment_frontend.yml \
-f https://raw.githubusercontent.com/Fontys-S6-maatwerk/Deployment/master/ingress_frontend.yml \
-f https://raw.githubusercontent.com/Fontys-S6-maatwerk/Deployment/master/service_frontend.yml
```
