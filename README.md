code of the deployment of the frontend
Assumptions: Private server with linux server 20.04
             K3D cluster installed with https://k3d.io/v5.0.3/ 
              IMPORTANT: to create the cluster: sudo k3d cluster create devcluster --api-port 127.0.0.1:6443 -p 80:80@loadbalancer -p 443:443@loadbalancer
              YOU NEED THE PORT MAPPING FOR IT TO WORK

UP
sudo kubectl apply \
-f https://raw.githubusercontent.com/Fontys-S6-maatwerk/Deployment/master/service_frontend.yml \
-f https://raw.githubusercontent.com/Fontys-S6-maatwerk/Deployment/master/deployment_frontend.yml \
-f https://raw.githubusercontent.com/Fontys-S6-maatwerk/Deployment/master/ingress_frontend.yml 

DOWN
sudo kubectl delete \
-f https://raw.githubusercontent.com/Fontys-S6-maatwerk/Deployment/master/deployment_frontend.yml \
-f https://raw.githubusercontent.com/Fontys-S6-maatwerk/Deployment/master/ingress_frontend.yml \
-f https://raw.githubusercontent.com/Fontys-S6-maatwerk/Deployment/master/service_frontend.yml
