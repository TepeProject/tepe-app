const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("settings", {
  saveChannel: (walletAddress, channelAddress, nickname) =>
    ipcRenderer.invoke("settings:saveChannel", walletAddress, channelAddress, nickname),
  deleteChannel: (walletAddress, channelAddress) =>
    ipcRenderer.invoke("settings:deleteChannel", walletAddress, channelAddress),
  getChannel: (walletAddress, channelAddress) => ipcRenderer.invoke("settings:getChannel", walletAddress, channelAddress),
  getChannels: (walletAddress) => ipcRenderer.invoke("settings:getChannels", walletAddress),
  unlockWallet: (password) => ipcRenderer.invoke("settings:unlockWallet", password),
  walletUnlocked: () => ipcRenderer.invoke("settings:walletUnlocked"),
  walletExists: () => ipcRenderer.invoke("settings:walletExists"),
  setPassword: (password) => ipcRenderer.invoke("settings:setPassword", password),
  addKey: (publicAddress, privateAddress, mnemonic) =>
    ipcRenderer.invoke("settings:addKey", publicAddress, privateAddress, mnemonic),
  saveWallet: () => ipcRenderer.invoke("settings:saveWallet"),
  selectKey: (key) =>
    ipcRenderer.invoke("settings:selectKey", key),
  deleteKey: (key) =>
    ipcRenderer.invoke("settings:deleteKey", key),
  getCurrentKey: () => ipcRenderer.invoke("settings:getCurrentKey"),
  getAllKeys: () => ipcRenderer.invoke("settings:getAllKeys"),
  initializeWalletList: (walletListJSON) => ipcRenderer.invoke("settings:initializeWalletList", walletListJSON),
  initializeChannelList: (channelListJSON) => ipcRenderer.invoke("settings:initializeChannelList", channelListJSON),
});

contextBridge.exposeInMainWorld("external", {
  openLink: (link) => ipcRenderer.invoke("external:openLink", link),
});

contextBridge.exposeInMainWorld("fileio", {
  selectFile: () => ipcRenderer.invoke("fileio:selectFile"),
  openFile: (filePath) => ipcRenderer.invoke("fileio:openFile", filePath),
  saveFile: (contents, filePath) =>
    ipcRenderer.invoke("fileio:saveFile", contents, filePath),
  saveIPFSFile: (contents, cid) => ipcRenderer.invoke("fileio:saveIPFSFile", contents, cid),
  openIPFSFile: (cid) => ipcRenderer.invoke("fileio:openIPFSFile", cid),
});

contextBridge.exposeInMainWorld("env", {
  PROJECT_ID: process.env.PROJECT_ID,
  PROJECT_SECRET: process.env.PROJECT_SECRET,
});
