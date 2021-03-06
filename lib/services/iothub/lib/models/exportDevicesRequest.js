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
 * Use to provide parameters when requesting an export of all devices in the
 * IoT hub.
 *
 */
class ExportDevicesRequest {
  /**
   * Create a ExportDevicesRequest.
   * @member {string} exportBlobContainerUri The export blob container URI.
   * @member {boolean} excludeKeys The value indicating whether keys should be
   * excluded during export.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExportDevicesRequest
   *
   * @returns {object} metadata of ExportDevicesRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExportDevicesRequest',
      type: {
        name: 'Composite',
        className: 'ExportDevicesRequest',
        modelProperties: {
          exportBlobContainerUri: {
            required: true,
            serializedName: 'exportBlobContainerUri',
            type: {
              name: 'String'
            }
          },
          excludeKeys: {
            required: true,
            serializedName: 'excludeKeys',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ExportDevicesRequest;
