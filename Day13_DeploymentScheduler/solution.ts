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
  