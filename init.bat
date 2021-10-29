@echo off
for /l %%x in (1, 1, 4) do geth init genesis.json --datadir data-%%x
pause