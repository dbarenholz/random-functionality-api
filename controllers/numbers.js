/**
 * @description Provides functionality for the numbers endpoints.
 *              See the individual documentation.
 *
 * @author dbarenholz
 * @version 1.0.0
 */

/**
 * Sends an array of possible requests with their functionality.
 */
exports.showOverview = (req, res, next) => {
  res.json(["GET /numbers := show this overview"]);
};
