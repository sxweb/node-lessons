const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        this.emit('message', `${message}`);
    }
}

const logger = new Logger();
logger.on('message', data => {
    console.log(data);
});

logger.log('hello');