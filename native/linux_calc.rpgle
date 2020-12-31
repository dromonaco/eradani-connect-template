     H*                                                                 
     H***************************************************************   
     H**   LINUX_CALC                                               *   
     H***************************************************************   
     H*                                                                 
      *
      * Include program prototype
      *
      /copy LnxCalcItf.rpgleinc

     DLnxCalc          PI
     DIbmiCores                      15P 0
     DLinuxServers                   16P 0

       LinuxServers = IbmiCores * 40;

       *InLr = *On;
       Return;
