PROFILE=lm

DOMAIN=logicallymagic.com
SUBDOMAIN=www

export

.EXPORT_ALL_VARIABLES:
DOCKER_BUILDKIT = 1

STACK = --all
# STACK = prod-MagiCare 

bootstrap:
	cdk bootstrap --profile $(PROFILE) $(STACK) -c DOMAIN=$(DOMAIN) -c SUBDOMAIN=$(SUBDOMAIN)

diff:
	cdk diff --profile $(PROFILE) $(STACK) -c DOMAIN=$(DOMAIN) -c SUBDOMAIN=$(SUBDOMAIN) 
 
deploy:
	cdk deploy --profile $(PROFILE) $(STACK) -c DOMAIN=$(DOMAIN) -c SUBDOMAIN=$(SUBDOMAIN) 

destroy:
	cdk destroy --profile $(PROFILE) $(STACK) -c DOMAIN=$(DOMAIN) -c SUBDOMAIN=$(SUBDOMAIN) 
