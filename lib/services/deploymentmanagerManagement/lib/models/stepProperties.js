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

/**
 * The properties of a step resource.
 *
 */
class StepProperties {
  /**
   * Create a StepProperties.
   * @member {string} stepType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of StepProperties
   *
   * @returns {object} metadata of StepProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StepProperties',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'stepType',
          clientName: 'stepType'
        },
        uberParent: 'StepProperties',
        className: 'StepProperties',
        modelProperties: {
          stepType: {
            required: true,
            serializedName: 'stepType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StepProperties;