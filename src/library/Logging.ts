declare global { var isHomeJustLaunched: boolean }

class Logging {
    private namespace = 'Client';

    constructor(namespace?: string) {
        if (namespace) this.namespace = namespace;
    }

    public info = (message: any) => {
        if (typeof message === 'string') {
            console.log(`[${this.getDate()}] [${this.namespace}] [INFO] ${message}`);
        } else {
            console.log(`[${this.getDate()}] [${this.namespace}] [INFO]`, message);
        }
    };

    public getDate = () => {
        return new Date().toISOString();
    };

    public setNamespace = (namespace: string) => {
        this.namespace = namespace;
    };
}

export default Logging;
