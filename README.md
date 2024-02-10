# missing-api-methods
Mod for screeps world private servers, which implements missing API methods 

There are a few methods and objects that exist in the Screeps World MMO server that are not present in the open source private servers. This means that code that runs on the MMO server may crash on private servers.

This mod adds stub methods to the player sandbox which return an error code when called.

# stubbed methods

* Game.cpu.setShardLimits - https://docs.screeps.com/api/#Game.cpu.setShardLimits
The stubbed method returns ERR_NOT_ENOUGH_RESOURCES.

* Game.cpu.generatePixel - https://docs.screeps.com/api/#Game.cpu.generatePixel
The stubbed method returns ERR_NOT_ENOUGH_RESOURCES.

# other missing functionality
The InterShardMemory object (https://docs.screeps.com/api/#InterShardMemory) has functions which don't have return codes. At present this mod does not replace or stub the object and the functions on it. 
