#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { SocketEventbridgeStack } from '../lib/socket-eventbridge-stack';

const app = new cdk.App();
new SocketEventbridgeStack(app, 'SocketEventbridgeStack');
