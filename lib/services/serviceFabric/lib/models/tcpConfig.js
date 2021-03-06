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
 * Describes the tcp configuration for external connectivity for this network.
 *
 */
class TcpConfig {
  /**
   * Create a TcpConfig.
   * @property {string} name tcp gateway config name.
   * @property {number} port Specifies the port at which the service endpoint
   * below needs to be exposed.
   * @property {object} destination Describes destination endpoint for routing
   * traffic.
   * @property {string} [destination.applicationName] Name of the service
   * fabric Mesh application.
   * @property {string} [destination.serviceName] service that contains the
   * endpoint.
   * @property {string} [destination.endpointName] name of the endpoint in the
   * service.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TcpConfig
   *
   * @returns {object} metadata of TcpConfig
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TcpConfig',
      type: {
        name: 'Composite',
        className: 'TcpConfig',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          port: {
            required: true,
            serializedName: 'port',
            type: {
              name: 'Number'
            }
          },
          destination: {
            required: true,
            serializedName: 'destination',
            type: {
              name: 'Composite',
              className: 'GatewayDestination'
            }
          }
        }
      }
    };
  }
}

module.exports = TcpConfig;
