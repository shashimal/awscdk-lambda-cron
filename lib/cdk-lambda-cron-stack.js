"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkLambdaCronStack = void 0;
const cdk = require("@aws-cdk/core");
const aws_lambda_1 = require("@aws-cdk/aws-lambda");
const path = require("path");
const aws_events_1 = require("@aws-cdk/aws-events");
const aws_events_targets_1 = require("@aws-cdk/aws-events-targets");
class CdkLambdaCronStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const schedulerFunction = new aws_lambda_1.Function(this, "SchedulerLambdaFunction", {
            runtime: aws_lambda_1.Runtime.NODEJS_14_X,
            memorySize: 512,
            handler: 'cron.handler',
            code: aws_lambda_1.Code.fromAsset(path.join(__dirname, '../lambda-function')),
        });
        const cronRule = new aws_events_1.Rule(this, 'CronRule', {
            schedule: aws_events_1.Schedule.expression('cron(0 1 * * ? *)')
        });
        cronRule.addTarget(new aws_events_targets_1.LambdaFunction(schedulerFunction));
    }
}
exports.CdkLambdaCronStack = CdkLambdaCronStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxhbWJkYS1jcm9uLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLWxhbWJkYS1jcm9uLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyxvREFBMkQ7QUFDM0QsNkJBQTZCO0FBQzdCLG9EQUFtRDtBQUNuRCxvRUFBMkQ7QUFFM0QsTUFBYSxrQkFBbUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUM3QyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2hFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxxQkFBUSxDQUFDLElBQUksRUFBRSx5QkFBeUIsRUFBRTtZQUNwRSxPQUFPLEVBQUUsb0JBQU8sQ0FBQyxXQUFXO1lBQzVCLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFLGNBQWM7WUFDdkIsSUFBSSxFQUFFLGlCQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLG9CQUFvQixDQUFDLENBQUM7U0FFbkUsQ0FBQyxDQUFBO1FBRUYsTUFBTSxRQUFRLEdBQUcsSUFBSSxpQkFBSSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDeEMsUUFBUSxFQUFFLHFCQUFRLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO1NBQ3JELENBQUMsQ0FBQTtRQUVGLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxtQ0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBQ0o7QUFsQkQsZ0RBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0IHtDb2RlLCBSdW50aW1lLEZ1bmN0aW9ufSBmcm9tIFwiQGF3cy1jZGsvYXdzLWxhbWJkYVwiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHtSdWxlLCBTY2hlZHVsZX0gZnJvbSBcIkBhd3MtY2RrL2F3cy1ldmVudHNcIjtcbmltcG9ydCB7TGFtYmRhRnVuY3Rpb259IGZyb20gXCJAYXdzLWNkay9hd3MtZXZlbnRzLXRhcmdldHNcIjtcblxuZXhwb3J0IGNsYXNzIENka0xhbWJkYUNyb25TdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAgICAgY29uc3Qgc2NoZWR1bGVyRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24odGhpcywgXCJTY2hlZHVsZXJMYW1iZGFGdW5jdGlvblwiLCB7XG4gICAgICAgICAgICBydW50aW1lOiBSdW50aW1lLk5PREVKU18xNF9YLFxuICAgICAgICAgICAgbWVtb3J5U2l6ZTogNTEyLFxuICAgICAgICAgICAgaGFuZGxlcjogJ2Nyb24uaGFuZGxlcicsXG4gICAgICAgICAgICBjb2RlOiBDb2RlLmZyb21Bc3NldChwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vbGFtYmRhLWZ1bmN0aW9uJykpLFxuICAgICAgICAgICAgLy90aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxMClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjcm9uUnVsZSA9IG5ldyBSdWxlKHRoaXMsICdDcm9uUnVsZScsIHtcbiAgICAgICAgICAgIHNjaGVkdWxlOiBTY2hlZHVsZS5leHByZXNzaW9uKCdjcm9uKDAgMSAqICogPyAqKScpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY3JvblJ1bGUuYWRkVGFyZ2V0KG5ldyBMYW1iZGFGdW5jdGlvbihzY2hlZHVsZXJGdW5jdGlvbikpO1xuICAgIH1cbn1cbiJdfQ==