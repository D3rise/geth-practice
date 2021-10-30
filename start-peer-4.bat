@echo off
geth --netrestrict 192.168.1.0/24 --datadir data-4 --bootnodes "enode://91190e27425b347ffac7b7cc12463cacfcd84bd18e33e15c4e0575d31d792357976d19ce81d1096b3b0e7f8a07e0a2161aa438429fdd1495b5e6d996c522f5d3@192.168.1.207:30307" --ipcpath geth-4.ipc --networkid 15 --port 30309 console
pause