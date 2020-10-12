/**
 * @description Provides functionality for the bye endpoints.
 *              See the individual documentation.
 *
 * @author dbarenholz
 * @version 1.0.0
 */

/**
 * Not so friendly endpoint that says goodbye.
 */
exports.sayBye = (_req, res, _next) => {
  res.status(200).send("Goodbye, world!");
};
