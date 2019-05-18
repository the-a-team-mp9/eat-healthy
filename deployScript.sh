curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
yum -y install nodejs
npm install pm2 -g
npm install
pm2 start npm --name "p1" -- start
pm2 startup
pm2 save
yum -y install nginx

