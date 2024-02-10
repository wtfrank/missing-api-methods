module.exports = function(config) {
    if(config.engine) {
        config.engine.on('playerSandbox', function(sandbox, userId) {
            sandbox.run(
	    `Game.cpu.generatePixel = function() {
	      return ERR_NOT_ENOUGH_RESOURCES;  
            }

	    Game.cpu.setShardLimits = function(_limits) {
	      return ERR_NOT_ENOUGH_RESOURCES;
	    }`
	    );
        });
    }
};
