@echo off
geth --datadir data-2 --bootnodes "enode://0e2b62853c5deb52d52d354d1c8bbbe31b6ea493455a97c9ab0c5eb628310e89f477c5de874e3cbcf970e4f47334c7adc7485a8625c26a136923e95990cd64fe@192.168.1.207:30303" --ipcpath geth-2.ipc --networkid 15 --port 30305 console
pause