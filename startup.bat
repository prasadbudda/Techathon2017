@echo off
set /p app.name.value="Please enter name of your application: "

echo %properties% > "dev.properties"

echo appName: %app.name.value%>dev.properties

mvn3 clean install -DappName=%app.name.value%
