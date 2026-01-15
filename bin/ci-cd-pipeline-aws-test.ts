#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { CiCdPipelineAwsTestStack } from '../lib/ci-cd-pipeline-aws-test-stack';

const app = new cdk.App();
new CiCdPipelineAwsTestStack(app, 'CiCdPipelineAwsTestStack', {
   env: {
    account: '755314965794',
    region: 'us-east-1',
  }
});


app.synth();
