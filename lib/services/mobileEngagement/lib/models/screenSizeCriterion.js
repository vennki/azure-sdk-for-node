/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Used to target devices based on the screen resolution of their device.
 *
 * @extends models['Criterion']
 */
class ScreenSizeCriterion extends models['Criterion'] {
  /**
   * Create a ScreenSizeCriterion.
   * @member {string} [name] Screen size using the following format
   * WIDTH**x**HEIGHT.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ScreenSizeCriterion
   *
   * @returns {object} metadata of ScreenSizeCriterion
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'screen-size',
      type: {
        name: 'Composite',
        className: 'ScreenSizeCriterion',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ScreenSizeCriterion;