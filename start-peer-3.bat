@echo off
geth --netrestrict 192.168.1.0/24 --datadir data-3 --bootnodes "enode://7ce91e57ab61f7b4d9816ddd0f9f07b013c2d2f21c11b35d049123dc1c43091556372ee95383fd9b2a0c72534f6989cfad46358d4bbfc00e6dbef07c4d414263@192.168.1.207:30305" --ipcpath geth-3.ipc --networkid 15 --port 30307 console
pause