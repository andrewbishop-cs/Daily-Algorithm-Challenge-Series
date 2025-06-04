/*

Today's challenge is to design a system to schedule deployments in a farm of servers.

Given a list of server states and a current deployment task, your scheduler should determine if the deployment can go ahead without 
impacting server stability. A deployment is allowed if there are no remaining tasks running or pending on the server. When a deployment 
is finished, the server should be left in an idle state.

Here are some assumptions for the problem:

- Each deployment task takes 60 seconds to complete. To simplify, we do not care about the actual timestamp. We just care about conflicts between tasks.
- Each server can only process a deployment task one at a time.
- Your deployment task will be a string, lets say 'task-x'. You will get this task assigned, but only if no other pending tasks are present.

You need to implement two methods: addTask() and scheduleDeployment()

- addTask(serverName: string, taskName: string): void - Adds a task to the server's queue.
- scheduleDeployment(serverName: string, deploymentTask: string): string - Tries to schedule a deployment and returns a message with the status.

Leetcode warmups
- 706. Design HashMap
- 621. Task Scheduler

*/
export class DeploymentScheduler {

    servers: Map<string, string[]>

    constructor () {
        this.servers = new Map()
    }

    addTask(serverName: string, taskName: string): void {

        if ( !this.servers.get(serverName) ) this.servers.set(serverName, [])
        this.servers.get(serverName)!.push(taskName)
  
    };
    scheduleDeployment(serverName: string, deploymentTask: string): string {
        if ( !serverName ) return "No server name provided"
        if ( !this.servers.has(serverName) ) this.servers.set(serverName, []);
        
        if ( this.servers.get(serverName)!.length > 0) {
            const tasks = this.servers.get(serverName)!
            return "Server " + serverName + " is busy. Current task: " + tasks[tasks.length -1]
        }
        
        this.servers.get(serverName)!.push(deploymentTask)

        this.servers.set(serverName, [])

        return "Deployment " + deploymentTask +  " scheduled on server " + serverName;
    };
  }
  