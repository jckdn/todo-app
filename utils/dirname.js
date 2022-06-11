import { fileURLToPath } from "url";
import { dirname } from "path";

/**
 * An ESM-friendly function to get the equivalent of the node metavariable
 * __dirname which is not available in node ESMs.
 * @param {string} metaUrl - You must pass in import.meta.url verbatim at the
 * callsite, like so: __dirname(import.meta.url)
 *
 * Solution inspired by: https://stackoverflow.com/a/50052194/8740845
 */
export default function __dirname(metaUrl) {
  return dirname(fileURLToPath(metaUrl));
}
