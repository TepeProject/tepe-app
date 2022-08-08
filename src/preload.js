const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("settings", {
  getStoreValue: (key) => ipcRenderer.invoke("settings:getStoreValue", key),
  saveKey: (address, mnemonic) =>
    ipcRenderer.invoke("settings:saveKey", address, mnemonic),
  selectAddress: (address) =>
    ipcRenderer.invoke("settings:selectAddress", address),
  deleteAddress: (address) =>
    ipcRenderer.invoke("settings:deleteAddress", address),
  getCurrentWallet: () => ipcRenderer.invoke("settings:getCurrentWallet"),
  selectFile: () => ipcRenderer.invoke("fileio:selectFile"),
  openFile: (filePath) => ipcRenderer.invoke("fileio:openFile", filePath),
  saveFile: (contents, filePath) =>
    ipcRenderer.invoke("fileio:saveFile", contents, filePath),
  uploadFile: (filePath) => ipcRenderer.invoke("ipfs:uploadFile", filePath),
});
