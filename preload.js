<<<<<<< HEAD
const { contextBridge, ipcRenderer } = require('electron');

console.log('Preload script loaded');  // Add this line to verify

// preload.js (Optional: if you need to expose additional APIs or handle more logic)
window.addEventListener('DOMContentLoaded', () => {
    console.log('Preload script executed');
});

contextBridge.exposeInMainWorld('api', {
    send: (channel, data) => ipcRenderer.send(channel, data),
    receive: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args)),
    invoke: (channel, data) => ipcRenderer.invoke(channel, data)
});
=======
const { contextBridge, ipcRenderer } = require('electron');

console.log('Preload script loaded');  // Add this line to verify

// preload.js (Optional: if you need to expose additional APIs or handle more logic)
window.addEventListener('DOMContentLoaded', () => {
    console.log('Preload script executed');
});

contextBridge.exposeInMainWorld('api', {
    send: (channel, data) => ipcRenderer.send(channel, data),
    receive: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args)),
    invoke: (channel, data) => ipcRenderer.invoke(channel, data)
});
>>>>>>> ceb8c533ee505d381993db81c3c738d212b24e55
