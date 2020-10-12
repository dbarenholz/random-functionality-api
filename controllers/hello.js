/**
 * @description Provides functionality for the hello endpoints.
 *              See the individual documentation.
 *
 * @author dbarenholz
 * @version 1.0.0
 */

/**
 * Friendly endpoint that says hello.
 */
exports.sayHello = (_req, res, _next) => {
  res.status(200).send("Hello, world!");
};


