export const getAttributeValues = (data: any, columnName: string): any[] => {
  /**
   * Extract all objects atributes values from an object array
   * @param {} data
   * @param {string} columnName
   * @returns {Array<any>}
   */

  const result = new Array(data.length);
  for (let index = 0; index < data.length; index++) {
    result[index] = data[index][columnName];
  }
  return result;
};

export const getUniqueAttributeValues = (
  data: any,
  columnName: string
): any[] => {
  /**
   * Make options for multiselect dropdown from array of objects
   * @param {} data
   * @param {string} columnName
   * @returns {Set}
   */
  return [...new Set(getAttributeValues(data, columnName))];
};
