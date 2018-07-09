function start() {
    console.log('Request handler "start" was called.');
    function sleep(milliseconds) {
        const startTime = new Date().getTime();
        while(new Date().getTime() < startTime + milliseconds);

    }

    sleep(10000);
    return 'Hello Start';
}

function upload() {
    console.log('Request handler "upload" was called.');
    return 'Hello upload';
}

exports.start = start;
exports.upload = upload;