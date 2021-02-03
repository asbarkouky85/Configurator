@echo off

cd Configurator.Batch
start db_backup.bat
cd..

toolset -p Configurator.UI 			2.15.2.0 -d %cd%

timeout 10