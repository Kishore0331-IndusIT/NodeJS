// Import required modules
const http = require('http');
const os = require('os');
const path = require('path');
const EventEmitter = require('events');
// Create the HTTP server
const server = http.createServer((req, res) => {
    // Set response headers to return HTML content
    res.setHeader('Content-Type', 'text/html');

    // Trigger the custom event when the server starts
    triggerCustomEvent();

    // Respond with system information and file path information
    res.statusCode = 200;
    res.end(`
        <html>
        <head>
            
        </head>
        <body>
            ${getSystemInfo()}
            ${getFilePathInfo()}
        </body>
        </html>
    `);
});

// Set the server to listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// Create a custom event emitter
const eventEmitter = new EventEmitter();
// Function to trigger a custom event using the 'events' module
function triggerCustomEvent() {
    eventEmitter.emit('systemEvent');  // Emit a custom event named 'systemEvent'
}

// Event listener for 'systemEvent'
eventEmitter.on('systemEvent', () => {
    console.log("Custom Event Triggered: The system has been started!");
});
// Function to display system information using the 'os' module
function getSystemInfo() {
    return `
        <h2>System Information:</h2>
        <ul>
            <li><strong>OS Type:</strong> ${os.type()}</li>
            <li><strong>Platform:</strong> ${os.platform()}</li>
            <li><strong>Architecture:</strong> ${os.arch()}</li>
			<li><strong>Release:</strong> ${os.release()}</li>
            <li><strong>Uptime:</strong> ${os.uptime()} seconds</li>
            
            <li><strong>Free Memory:</strong> ${(os.freemem())}</li>
            <li><strong>Hostname:</strong> ${os.hostname()}</li>
        </ul>
    `;
}

// Function to display file path information using the 'path' module
function getFilePathInfo() {
    const filePath = path.join(__dirname, 'server.js');  // Get the absolute path of the current script
    return `<p><strong>Absolute file path of this script (server.js):</strong> ${filePath}</p>`;
}



