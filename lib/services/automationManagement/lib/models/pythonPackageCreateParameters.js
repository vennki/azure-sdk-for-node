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
 * The parameters supplied to the create or update module operation.
 *
 */
class PythonPackageCreateParameters {
  /**
   * Create a PythonPackageCreateParameters.
   * @member {object} contentLink Gets or sets the module content link.
   * @member {string} [contentLink.uri] Gets or sets the uri of the runbook
   * content.
   * @member {object} [contentLink.contentHash] Gets or sets the hash.
   * @member {string} [contentLink.contentHash.algorithm] Gets or sets the
   * content hash algorithm used to hash the content.
   * @member {string} [contentLink.contentHash.value] Gets or sets expected
   * hash value of the content.
   * @member {string} [contentLink.version] Gets or sets the version of the
   * content.
   * @member {object} [tags] Gets or sets the tags attached to the resource.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PythonPackageCreateParameters
   *
   * @returns {object} metadata of PythonPackageCreateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PythonPackageCreateParameters',
      type: {
        name: 'Composite',
        className: 'PythonPackageCreateParameters',
        modelProperties: {
          contentLink: {
            required: true,
            serializedName: 'properties.contentLink',
            type: {
              name: 'Composite',
              className: 'ContentLink'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PythonPackageCreateParameters;
