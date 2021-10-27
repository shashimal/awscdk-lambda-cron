import * as cdk from '@aws-cdk/core';
import {Code, Runtime, Function} from "@aws-cdk/aws-lambda";
import {Rule, Schedule} from "@aws-cdk/aws-events";
import {LambdaFunction} from "@aws-cdk/aws-events-targets";
import * as path from "path";
import {Vpc} from "@aws-cdk/aws-ec2";

export class CdkLambdaCronStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const vpc = Vpc.fromLookup(this, "vpcId", {
            vpcId: "vpicidd"
        })

        //Lambda function to run the scheduled task
        const schedulerFunction = new Function(this, "SchedulerLambdaFunction", {
            runtime: Runtime.NODEJS_14_X,
            memorySize: 512,
            handler: 'cron.handler',
            code: Code.fromAsset(path.join(__dirname, '../handlers')),
        })

        //Event rule which runs the job every five minutes
        const cronRule = new Rule(this, 'CronRule', {
            schedule: Schedule.expression('cron(0/5 * * * ? *)')
        })

        //Trigger the lambda function
        cronRule.addTarget(new LambdaFunction(schedulerFunction));


        const schedulerFunction2 = new Function(this, "SchedulerLambdaFunction2", {
            runtime: Runtime.NODEJS_14_X,
            memorySize: 512,
            handler: 'cron.handler',
            code: Code.fromAsset(path.join(__dirname, '../handlers2.zip')),
           // vpc,
            // 👇 place lambda in Private Subnets
            // vpcSubnets: {
            //     subnetType: ec2.SubnetType.PRIVATE,
            // },
        })
    }
}
