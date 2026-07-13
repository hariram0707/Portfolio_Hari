STEP BY STEP PROCESS FOR LAUCHING AN INSTANCE:

Go to AWS Console → EC2 → Launch Instance
AMI: Amazon Linux (Free Tier)
Instance Type: t2.micro
Key Pair: Create (HARI.PEM)
Security Group: Allow SSH (22) & HTTP (80)
Launch the instance and copy the Public IPv4 address.
2.CONNECT TO EC2: chmod 400 HARI.PEM ssh -i "HARI.PEM" ec2-user@ EX:192.15.21.16

3.INSTALL HTTPD: sudo yum update -y sudo yum install httpd -y sudo systemctl start httpd sudo systemctl enable httpd

4.DEPLOY MY WEBSITE cd /var/www/html sudo rm -rf * sudo nano index.html ADDED MY PROTOFOLIO WEBSITE CODE

5.RESTART HTTPD: sudo systemctl restart httpd

6.VIEW MY WEBSITE: Visit http:// EX:192.15.21.16
