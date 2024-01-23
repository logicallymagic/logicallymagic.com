#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { StaticSite } from '../lib/static-site';

const siteEnv = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1',
  };


const app = new cdk.App();

new StaticSite(app, "www-logicallymagic-com", {
    env: siteEnv,
    domainName: process.env.DOMAIN as string,
    siteSubDomain: process.env.SUBDOMAIN as string,
});

