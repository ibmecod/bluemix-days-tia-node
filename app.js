/*-------------------------------------------------------------------*/
/* Copyright IBM Corp. 2013 All Rights Reserved                      */
/*-------------------------------------------------------------------*/

require("./lib/cli").run()

/**
 * Add deploy tracker client
 */
require("cf-deployment-tracker-client").track();
