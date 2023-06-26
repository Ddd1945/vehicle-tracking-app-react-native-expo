/**
 * Logging class to provide feedback to developer
 */

/* User can pass message and namespace. Namespace allow to fugire out where messages are coming out from.
 Also developer can pass in any object type for the message and the function will figure out how to log 
 them properply based on whether or not it's a string.
 */
class Logging {
    private namespace = 'Client';

    constructor(namespace?: string) { if (namespace) this.namespace = namespace; }

    public info = (message: any) => {
        if (typeof message === 'string') 
            console.log(`[${this.getDate()}] [${this.namespace}] [INFO] ${message}`);
        else 
            console.log(`[${this.getDate()}] [${this.namespace}] [INFO]`, message);
    };

    public getDate = () => { return new Date().toISOString(); };

    public setNamespace = (namespace: string) => { this.namespace = namespace; };
}

export default Logging;
