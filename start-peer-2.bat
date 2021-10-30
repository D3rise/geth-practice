@echo off
geth --datadir data-2 --bootnodes "enode://c2a84923ce1b96bdc01bb8fc7c49200b88a0c327300f21aa9b843b5959039db4821282c32635a6042a508a87048f076f0597670f44b2108402a192dbcf36823b@192.168.1.207:30303" --ipcpath geth-2.ipc --networkid 15 --port 30305 console
pause