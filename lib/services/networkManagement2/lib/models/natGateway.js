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
 * Nat Gateway resource.
 *
 * @extends models['Resource']
 */
class NatGateway extends models['Resource'] {
  /**
   * Create a NatGateway.
   * @property {object} [sku] The nat gateway SKU.
   * @property {string} [sku.name] Name of Nat Gateway SKU. Possible values
   * include: 'Standard'
   * @property {number} [idleTimeoutInMinutes] The idle timeout of the nat
   * gateway.
   * @property {array} [publicIpAddresses] An array of public ip addresses
   * associated with the nat gateway resource.
   * @property {array} [publicIpPrefixes] An array of public ip prefixes
   * associated with the nat gateway resource.
   * @property {array} [subnets] An array of references to the subnets using
   * this nat gateway resource.
   * @property {string} [resourceGuid] The resource GUID property of the nat
   * gateway resource.
   * @property {string} [provisioningState] The provisioning state of the
   * NatGateway resource. Possible values are: 'Updating', 'Deleting', and
   * 'Failed'.
   * @property {string} [etag] A unique read-only string that changes whenever
   * the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NatGateway
   *
   * @returns {object} metadata of NatGateway
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NatGateway',
      type: {
        name: 'Composite',
        className: 'NatGateway',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
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
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'NatGatewaySku'
            }
          },
          idleTimeoutInMinutes: {
            required: false,
            serializedName: 'properties.idleTimeoutInMinutes',
            type: {
              name: 'Number'
            }
          },
          publicIpAddresses: {
            required: false,
            serializedName: 'properties.publicIpAddresses',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SubResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'SubResource'
                  }
              }
            }
          },
          publicIpPrefixes: {
            required: false,
            serializedName: 'properties.publicIpPrefixes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SubResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'SubResource'
                  }
              }
            }
          },
          subnets: {
            required: false,
            readOnly: true,
            serializedName: 'properties.subnets',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SubResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'SubResource'
                  }
              }
            }
          },
          resourceGuid: {
            required: false,
            serializedName: 'properties.resourceGuid',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NatGateway;