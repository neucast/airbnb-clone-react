import loglevel from 'loglevel';

class Logger {
    private logger = loglevel.getLoggers('Logger');
    private prefixMessage = '[' + new Date().toISOString() + ']: ';

    constructor() {
        this.logger.setLevel('debug');
    }

    log(message: string) {
        this.logger.debug(this.prefixMessage, message);
    }

    error(message: string) {
        this.logger.error(this.prefixMessage, message);
    }

    info(message: string) {
        this.logger.info(this.prefixMessage, message);
    }
}

export default Logger;

