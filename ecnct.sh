#!/QOpenSys/pkgs/bin/bash
NODE_HOME=/QOpenSys/pkgs/bin
ECNCT_HOME=/opt/eradani/eradani-connect-template

NODE_ENV=production
export NODE_ENV

PATH=$NODE_HOME:$PATH

cd $ECNCT_HOME
node src/app.js
