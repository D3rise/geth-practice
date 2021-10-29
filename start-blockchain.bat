@echo off
geth --ipcpath geth-1.ipc --http --http.addr "0.0.0.0" --http.api eth,miner,net,web3,admin,personal --networkid 15 --datadir data-1 --http.corsdomain "*" --allow-insecure-unlock console
pause