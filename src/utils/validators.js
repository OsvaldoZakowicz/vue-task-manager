/**
 * validar formato valido de id
 * @param {*} id id a validar
 * @returns boolean
 */
export function isValidIdFormat(id) {
  return /^[a-z0-9-]+$/.test(id);
}
