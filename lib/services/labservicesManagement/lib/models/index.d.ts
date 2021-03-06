/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

/**
 * Payload for Add Users operation on a Lab.
 */
export interface AddUsersPayload {
  /**
   * List of user emails addresses to add to the lab.
   */
  emailAddresses: string[];
}

/**
 * Creation parameters for Reference Vm
 */
export interface ReferenceVmCreationParameters {
  /**
   * The username of the virtual machine
   */
  userName: string;
  /**
   * The password of the virtual machine.
   */
  password: string;
}

/**
 * Represents resource specific settings
 */
export interface ResourceSettingCreationParameters {
  /**
   * The location where the virtual machine will live
   */
  location?: string;
  /**
   * The name of the resource setting
   */
  name?: string;
  /**
   * The resource id of the gallery image used for creating the virtual machine
   */
  galleryImageResourceId: string;
  /**
   * The size of the virtual machine. Possible values include: 'Basic', 'Standard', 'Performance'
   */
  size?: string;
  /**
   * Creation parameters for Reference Vm
   */
  referenceVmCreationParameters: ReferenceVmCreationParameters;
}

/**
 * Settings related to creating an environment setting
 */
export interface EnvironmentSettingCreationParameters {
  /**
   * The resource specific settings
   */
  resourceSettingCreationParameters: ResourceSettingCreationParameters;
}

/**
 * Settings related to creating a lab
 */
export interface LabCreationParameters {
  /**
   * Maximum number of users allowed in the lab.
   */
  maxUsersInLab?: number;
}

/**
 * Properties for creating a managed lab and a default environment setting
 */
export interface CreateLabProperties {
  /**
   * Settings related to creating an environment setting
   */
  environmentSettingCreationParameters?: EnvironmentSettingCreationParameters;
  /**
   * Settings related to creating a lab
   */
  labCreationParameters: LabCreationParameters;
  /**
   * The name of the resource
   */
  name: string;
  /**
   * The location of the resource
   */
  location?: string;
  /**
   * The tags of the resource.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Represents a VM and the setting Id it was created for.
 */
export interface ResourceSet {
  /**
   * VM resource Id for the environment
   */
  vmResourceId?: string;
  /**
   * resourceSettingId for the environment
   */
  resourceSettingId?: string;
}

/**
 * Network details of the environment
 */
export interface NetworkInterface {
  /**
   * PrivateIp address of the Compute VM
   */
  readonly privateIpAddress?: string;
  /**
   * Connection information for Linux
   */
  readonly sshAuthority?: string;
  /**
   * Connection information for Windows
   */
  readonly rdpAuthority?: string;
  /**
   * Username of the VM
   */
  readonly username?: string;
}

/**
 * Details of the status of an operation.
 */
export interface LatestOperationResult {
  /**
   * The current status of the operation.
   */
  readonly status?: string;
  /**
   * Error code on failure.
   */
  readonly errorCode?: string;
  /**
   * The error message.
   */
  readonly errorMessage?: string;
  /**
   * Request URI of the operation.
   */
  readonly requestUri?: string;
  /**
   * The HttpMethod - PUT/POST/DELETE for the operation.
   */
  readonly httpMethod?: string;
  /**
   * The URL to use to check long-running operation status
   */
  readonly operationUrl?: string;
}

/**
 * An Azure resource.
 */
export interface Resource extends BaseResource {
  /**
   * The identifier of the resource.
   */
  readonly id?: string;
  /**
   * The name of the resource.
   */
  readonly name?: string;
  /**
   * The type of the resource.
   */
  readonly type?: string;
  /**
   * The location of the resource.
   */
  location?: string;
  /**
   * The tags of the resource.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Represents an environment instance
 */
export interface Environment extends Resource {
  /**
   * The set of a VM and the setting id it was created for
   */
  resourceSets?: ResourceSet;
  /**
   * The AAD object Id of the user who has claimed the environment
   */
  readonly claimedByUserObjectId?: string;
  /**
   * The user principal Id of the user who has claimed the environment
   */
  readonly claimedByUserPrincipalId?: string;
  /**
   * The name or email address of the user who has claimed the environment
   */
  readonly claimedByUserName?: string;
  /**
   * Is the environment claimed or not
   */
  readonly isClaimed?: boolean;
  /**
   * Last known power state of the environment
   */
  readonly lastKnownPowerState?: string;
  /**
   * Network details of the environment
   */
  readonly networkInterface?: NetworkInterface;
  /**
   * How long the environment has been used by a lab user
   */
  readonly totalUsage?: moment.Duration;
  /**
   * When the password was last reset on the environment.
   */
  readonly passwordLastReset?: Date;
  /**
   * The provisioning status of the resource.
   */
  provisioningState?: string;
  /**
   * The unique immutable identifier of a resource (Guid).
   */
  uniqueIdentifier?: string;
  /**
   * The details of the latest operation. ex: status, error
   */
  readonly latestOperationResult?: LatestOperationResult;
}

/**
 * Details of the backing virtual machine.
 */
export interface VirtualMachineDetails {
  /**
   * Provisioning state of the Dtl VM
   */
  readonly provisioningState?: string;
  /**
   * Connection information for Windows
   */
  readonly rdpAuthority?: string;
  /**
   * Connection information for Linux
   */
  readonly sshAuthority?: string;
  /**
   * PrivateIp address of the compute VM
   */
  readonly privateIpAddress?: string;
  /**
   * Compute VM login user name
   */
  readonly userName?: string;
  /**
   * Last known compute power state captured in DTL
   */
  readonly lastKnownPowerState?: string;
}

/**
 * This represents the details about a User's environment and its state.
 */
export interface EnvironmentDetails {
  /**
   * Name of the Environment
   */
  readonly name?: string;
  /**
   * Description of the Environment
   */
  readonly description?: string;
  /**
   * Resource Id of the environment
   */
  readonly id?: string;
  /**
   * The provisioning state of the environment. This also includes LabIsFull and NotYetProvisioned
   * status.
   */
  readonly provisioningState?: string;
  /**
   * Details of backing DTL virtual machine with compute and network details.
   */
  readonly virtualMachineDetails?: VirtualMachineDetails;
  /**
   * The details of the latest operation. ex: status, error
   */
  readonly latestOperationResult?: LatestOperationResult;
  /**
   * Publishing state of the environment setting Possible values are Creating, Created, Failed
   */
  readonly environmentState?: string;
  /**
   * How long the environment has been used by a lab user
   */
  readonly totalUsage?: moment.Duration;
  /**
   * When the password was last reset on the environment.
   */
  readonly passwordLastReset?: Date;
}

/**
 * Represents a VM and the setting Id it was created for.
 */
export interface ResourceSetFragment {
  /**
   * VM resource Id for the environment
   */
  vmResourceId?: string;
  /**
   * resourceSettingId for the environment
   */
  resourceSettingId?: string;
}

/**
 * Represents an environment instance
 */
export interface EnvironmentFragment extends Resource {
  /**
   * The set of a VM and the setting id it was created for
   */
  resourceSets?: ResourceSetFragment;
  /**
   * The provisioning status of the resource.
   */
  provisioningState?: string;
  /**
   * The unique immutable identifier of a resource (Guid).
   */
  uniqueIdentifier?: string;
}

/**
 * Represents payload for any Environment operations like get, start, stop, connect
 */
export interface EnvironmentOperationsPayload {
  /**
   * The resourceId of the environment
   */
  environmentId: string;
}

/**
 * Details about the state of the reference virtual machine.
 */
export interface VmStateDetails {
  /**
   * The RdpAuthority property is a server DNS host name or IP address followed by the service port
   * number for RDP (Remote Desktop Protocol).
   */
  readonly rdpAuthority?: string;
  /**
   * The SshAuthority property is a server DNS host name or IP address followed by the service port
   * number for SSH.
   */
  readonly sshAuthority?: string;
  /**
   * The power state of the reference virtual machine.
   */
  readonly powerState?: string;
  /**
   * Last known compute power state captured in DTL
   */
  readonly lastKnownPowerState?: string;
}

/**
 * Details of a Reference Vm
 */
export interface ReferenceVm {
  /**
   * The username of the virtual machine
   */
  userName: string;
  /**
   * The password of the virtual machine. This will be set to null in GET resource API
   */
  password?: string;
  /**
   * The state details for the reference virtual machine.
   */
  readonly vmStateDetails?: VmStateDetails;
  /**
   * VM resource Id for the environment
   */
  readonly vmResourceId?: string;
}

/**
 * Represents resource specific settings
 */
export interface ResourceSettings {
  /**
   * The unique id of the resource setting
   */
  readonly id?: string;
  /**
   * The resource id of the gallery image used for creating the virtual machine
   */
  galleryImageResourceId?: string;
  /**
   * The name of the image used to created the environment setting
   */
  readonly imageName?: string;
  /**
   * The size of the virtual machine. Possible values include: 'Basic', 'Standard', 'Performance'
   */
  size?: string;
  /**
   * The translated compute cores of the virtual machine
   */
  readonly cores?: number;
  /**
   * Details specific to Reference Vm
   */
  referenceVm: ReferenceVm;
}

/**
 * Represents settings of an environment, from which environment instances would be created
 */
export interface EnvironmentSetting extends Resource {
  /**
   * Describes the readiness of this environment setting. Possible values include: 'Draft',
   * 'Publishing', 'Published', 'PublishFailed', 'Scaling'
   */
  readonly publishingState?: string;
  /**
   * Describes the user's progress in configuring their environment setting. Possible values
   * include: 'NotApplicable', 'Completed'
   */
  configurationState?: string;
  /**
   * Describes the environment and its resource settings
   */
  description?: string;
  /**
   * Brief title describing the environment and its resource settings
   */
  title?: string;
  /**
   * The resource specific settings
   */
  resourceSettings: ResourceSettings;
  /**
   * Time when the template VM was last changed.
   */
  readonly lastChanged?: Date;
  /**
   * Time when the template VM was last sent for publishing.
   */
  readonly lastPublished?: Date;
  /**
   * The provisioning status of the resource.
   */
  provisioningState?: string;
  /**
   * The unique immutable identifier of a resource (Guid).
   */
  uniqueIdentifier?: string;
  /**
   * The details of the latest operation. ex: status, error
   */
  readonly latestOperationResult?: LatestOperationResult;
}

/**
 * Details of a Reference Vm
 */
export interface ReferenceVmFragment {
  /**
   * The username of the virtual machine
   */
  userName?: string;
  /**
   * The password of the virtual machine. This will be set to null in GET resource API
   */
  password?: string;
}

/**
 * Represents resource specific settings
 */
export interface ResourceSettingsFragment {
  /**
   * The resource id of the gallery image used for creating the virtual machine
   */
  galleryImageResourceId?: string;
  /**
   * The size of the virtual machine. Possible values include: 'Basic', 'Standard', 'Performance'
   */
  size?: string;
  /**
   * Details specific to Reference Vm
   */
  referenceVm?: ReferenceVmFragment;
}

/**
 * Represents settings of an environment, from which environment instances would be created
 */
export interface EnvironmentSettingFragment extends Resource {
  /**
   * Describes the user's progress in configuring their environment setting. Possible values
   * include: 'NotApplicable', 'Completed'
   */
  configurationState?: string;
  /**
   * Describes the environment and its resource settings
   */
  description?: string;
  /**
   * Brief title describing the environment and its resource settings
   */
  title?: string;
  /**
   * The resource specific settings
   */
  resourceSettings?: ResourceSettingsFragment;
  /**
   * The provisioning status of the resource.
   */
  provisioningState?: string;
  /**
   * The unique immutable identifier of a resource (Guid).
   */
  uniqueIdentifier?: string;
}

/**
 * Contains detailed information about a size
 */
export interface SizeInfo {
  /**
   * Represents the actual compute size, e.g. Standard_A2_v2.
   */
  computeSize?: string;
  /**
   * The pay-as-you-go price per hour this size will cost. It does not include discounts and may
   * not reflect the actual price the size will cost.
   */
  price?: number;
  /**
   * The number of cores a VM of this size has.
   */
  numberOfCores?: number;
  /**
   * The amount of memory available (in GB).
   */
  memory?: number;
}

/**
 * Represents a size category supported by this Lab Account (small, medium or large)
 */
export interface EnvironmentSize {
  /**
   * The size category. Possible values include: 'Basic', 'Standard', 'Performance'
   */
  name?: string;
  /**
   * Represents a set of compute sizes that can serve this given size type
   */
  vmSizes?: SizeInfo[];
  /**
   * The pay-as-you-go dollar price per hour this size will cost. It does not include discounts and
   * may not reflect the actual price the size will cost. This is the maximum price of all prices
   * within this tier.
   */
  readonly maxPrice?: number;
  /**
   * The number of cores a VM of this size has. This is the minimum number of cores within this
   * tier.
   */
  readonly minNumberOfCores?: number;
  /**
   * The amount of memory available (in GB). This is the minimum amount of memory within this tier.
   */
  readonly minMemory?: number;
}

/**
 * Contains detailed information about a size
 */
export interface SizeInfoFragment {
  /**
   * Represents the actual compute size, e.g. Standard_A2_v2.
   */
  computeSize?: string;
  /**
   * The pay-as-you-go price per hour this size will cost. It does not include discounts and may
   * not reflect the actual price the size will cost.
   */
  price?: number;
  /**
   * The number of cores a VM of this size has.
   */
  numberOfCores?: number;
  /**
   * The amount of memory available (in GB).
   */
  memory?: number;
}

/**
 * Represents a size category supported by this Lab Account (small, medium or large)
 */
export interface EnvironmentSizeFragment {
  /**
   * The size category. Possible values include: 'Basic', 'Standard', 'Performance'
   */
  name?: string;
  /**
   * Represents a set of compute sizes that can serve this given size type
   */
  vmSizes?: SizeInfoFragment[];
}

/**
 * The reference information for an Azure Marketplace image.
 */
export interface GalleryImageReference {
  /**
   * The offer of the gallery image.
   */
  offer?: string;
  /**
   * The publisher of the gallery image.
   */
  publisher?: string;
  /**
   * The SKU of the gallery image.
   */
  sku?: string;
  /**
   * The OS type of the gallery image.
   */
  osType?: string;
  /**
   * The version of the gallery image.
   */
  version?: string;
}

/**
 * Represents an image from the Azure Marketplace
 */
export interface GalleryImage extends Resource {
  /**
   * The author of the gallery image.
   */
  readonly author?: string;
  /**
   * The creation date of the gallery image.
   */
  readonly createdDate?: Date;
  /**
   * The description of the gallery image.
   */
  readonly description?: string;
  /**
   * The image reference of the gallery image.
   */
  readonly imageReference?: GalleryImageReference;
  /**
   * The icon of the gallery image.
   */
  readonly icon?: string;
  /**
   * Indicates whether this gallery image is enabled.
   */
  isEnabled?: boolean;
  /**
   * Indicates whether this gallery has been overridden for this lab account
   */
  isOverride?: boolean;
  /**
   * The third party plan that applies to this image
   */
  readonly planId?: string;
  /**
   * Indicates if the plan has been authorized for programmatic deployment.
   */
  isPlanAuthorized?: boolean;
  /**
   * The provisioning status of the resource.
   */
  provisioningState?: string;
  /**
   * The unique immutable identifier of a resource (Guid).
   */
  uniqueIdentifier?: string;
  /**
   * The details of the latest operation. ex: status, error
   */
  readonly latestOperationResult?: LatestOperationResult;
}

/**
 * Represents an image from the Azure Marketplace
 */
export interface GalleryImageFragment extends Resource {
  /**
   * Indicates whether this gallery image is enabled.
   */
  isEnabled?: boolean;
  /**
   * Indicates whether this gallery has been overridden for this lab account
   */
  isOverride?: boolean;
  /**
   * Indicates if the plan has been authorized for programmatic deployment.
   */
  isPlanAuthorized?: boolean;
  /**
   * The provisioning status of the resource.
   */
  provisioningState?: string;
  /**
   * The unique immutable identifier of a resource (Guid).
   */
  uniqueIdentifier?: string;
}

/**
 * The reference information for an Azure Marketplace image.
 */
export interface GalleryImageReferenceFragment {
  /**
   * The offer of the gallery image.
   */
  offer?: string;
  /**
   * The publisher of the gallery image.
   */
  publisher?: string;
  /**
   * The SKU of the gallery image.
   */
  sku?: string;
  /**
   * The OS type of the gallery image.
   */
  osType?: string;
  /**
   * The version of the gallery image.
   */
  version?: string;
}

/**
 * Represents the environments details
 */
export interface GetEnvironmentResponse {
  /**
   * Details of the environment
   */
  readonly environment?: EnvironmentDetails;
}

/**
 * Represents the PersonalPreferences for the user
 */
export interface GetPersonalPreferencesResponse {
  /**
   * Id to be used by the cache orchestrator
   */
  id?: string;
  /**
   * Array of favorite lab resource ids
   */
  favoriteLabResourceIds?: string[];
}

/**
 * Represents the size information
 */
export interface SizeAvailability {
  /**
   * The category of the size (Basic, Standard, Performance). Possible values include: 'Basic',
   * 'Standard', 'Performance'
   */
  sizeCategory?: string;
  /**
   * Whether or not this size category is available
   */
  isAvailable?: boolean;
}

/**
 * The availability information of sizes across regions
 */
export interface RegionalAvailability {
  /**
   * Corresponding region
   */
  region?: string;
  /**
   * List of all the size information for the region
   */
  sizeAvailabilities?: SizeAvailability[];
}

/**
 * The response model from the GetRegionalAvailability action
 */
export interface GetRegionalAvailabilityResponse {
  /**
   * Availability information for different size categories per region
   */
  regionalAvailability?: RegionalAvailability[];
}

/**
 * Represents a lab.
 */
export interface Lab extends Resource {
  /**
   * Maximum number of users allowed in the lab.
   */
  maxUsersInLab?: number;
  /**
   * Maximum value MaxUsersInLab can be set to, as specified by the service
   */
  readonly userQuota?: number;
  /**
   * Invitation code that users can use to join a lab.
   */
  readonly invitationCode?: string;
  /**
   * Object id of the user that created the lab.
   */
  readonly createdByObjectId?: string;
  /**
   * Maximum duration a user can use an environment for in the lab.
   */
  usageQuota?: moment.Duration;
  /**
   * Lab user access mode (open to all vs. restricted to those listed on the lab). Possible values
   * include: 'Restricted', 'Open'
   */
  userAccessMode?: string;
  /**
   * Lab creator name
   */
  readonly createdByUserPrincipalName?: string;
  /**
   * Creation date for the lab
   */
  readonly createdDate?: Date;
  /**
   * The provisioning status of the resource.
   */
  provisioningState?: string;
  /**
   * The unique immutable identifier of a resource (Guid).
   */
  uniqueIdentifier?: string;
  /**
   * The details of the latest operation. ex: status, error
   */
  readonly latestOperationResult?: LatestOperationResult;
}

/**
 * Represents the size configuration under the lab account
 */
export interface SizeConfigurationProperties {
  /**
   * Represents a list of size categories supported by this Lab Account (Small, Medium, Large)
   */
  environmentSizes?: EnvironmentSize[];
}

/**
 * Represents a lab account.
 */
export interface LabAccount extends Resource {
  /**
   * Represents the size configuration under the lab account
   */
  readonly sizeConfiguration?: SizeConfigurationProperties;
  /**
   * Represents if region selection is enabled
   */
  enabledRegionSelection?: boolean;
  /**
   * The provisioning status of the resource.
   */
  provisioningState?: string;
  /**
   * The unique immutable identifier of a resource (Guid).
   */
  uniqueIdentifier?: string;
  /**
   * The details of the latest operation. ex: status, error
   */
  readonly latestOperationResult?: LatestOperationResult;
}

/**
 * Represents a lab account.
 */
export interface LabAccountFragment extends Resource {
  /**
   * Represents if region selection is enabled
   */
  enabledRegionSelection?: boolean;
  /**
   * The provisioning status of the resource.
   */
  provisioningState?: string;
  /**
   * The unique immutable identifier of a resource (Guid).
   */
  uniqueIdentifier?: string;
}

/**
 * This represents the details about a lab that the User is in, and its state.
 */
export interface LabDetails {
  /**
   * Name of the lab
   */
  name?: string;
  /**
   * The provisioning state of the lab.
   */
  provisioningState?: string;
  /**
   * The Id of the lab.
   */
  id?: string;
  /**
   * The maximum duration a user can use a VM in this lab.
   */
  readonly usageQuota?: moment.Duration;
}

/**
 * Represents a lab.
 */
export interface LabFragment extends Resource {
  /**
   * Maximum number of users allowed in the lab.
   */
  maxUsersInLab?: number;
  /**
   * Maximum duration a user can use an environment for in the lab.
   */
  usageQuota?: moment.Duration;
  /**
   * Lab user access mode (open to all vs. restricted to those listed on the lab). Possible values
   * include: 'Restricted', 'Open'
   */
  userAccessMode?: string;
  /**
   * The provisioning status of the resource.
   */
  provisioningState?: string;
  /**
   * The unique immutable identifier of a resource (Guid).
   */
  uniqueIdentifier?: string;
}

/**
 * Represents the payload to list environments owned by a user
 */
export interface ListEnvironmentsPayload {
  /**
   * The resource Id of the lab
   */
  labId?: string;
}

/**
 * Represents the list of environments owned by a user
 */
export interface ListEnvironmentsResponse {
  /**
   * List of all the environments
   */
  environments?: EnvironmentDetails[];
}

/**
 * Lists the labs owned by a user
 */
export interface ListLabsResponse {
  /**
   * List of all the labs
   */
  labs?: LabDetails[];
}

/**
 * Payload to get the status of an operation
 */
export interface OperationBatchStatusPayload {
  /**
   * The operation url of long running operation
   */
  urls: string[];
}

/**
 * Represents the status of an operation that used the batch API.
 */
export interface OperationBatchStatusResponseItem {
  /**
   * status of the long running operation for an environment
   */
  readonly operationUrl?: string;
  /**
   * status of the long running operation for an environment
   */
  readonly status?: string;
}

/**
 * Status Details of the long running operation for an environment
 */
export interface OperationBatchStatusResponse {
  /**
   * Gets a collection of items that contain the operation url and status.
   */
  readonly items?: OperationBatchStatusResponseItem[];
}

/**
 * Error details for the operation in case of a failure.
 */
export interface OperationError {
  /**
   * The error code of the operation error.
   */
  code?: string;
  /**
   * The error message of the operation error.
   */
  message?: string;
}

/**
 * The object that describes the operations
 */
export interface OperationMetadataDisplay {
  /**
   * Friendly name of the resource provider
   */
  provider?: string;
  /**
   * Resource type on which the operation is performed.
   */
  resource?: string;
  /**
   * Operation type: read, write, delete, listKeys/action, etc.
   */
  operation?: string;
  /**
   * Friendly name of the operation
   */
  description?: string;
}

/**
 * The REST API operation supported by ManagedLab ResourceProvider.
 */
export interface OperationMetadata {
  /**
   * Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * The object that describes the operations
   */
  display?: OperationMetadataDisplay;
}

/**
 * An Operation Result
 */
export interface OperationResult {
  /**
   * The operation status.
   */
  status?: string;
  /**
   * Error details for the operation in case of a failure.
   */
  error?: OperationError;
}

/**
 * Payload to get the status of an operation
 */
export interface OperationStatusPayload {
  /**
   * The operation url of long running operation
   */
  operationUrl: string;
}

/**
 * Status Details of the long running operation for an environment
 */
export interface OperationStatusResponse {
  /**
   * status of the long running operation for an environment
   */
  readonly status?: string;
}

/**
 * Represents payload for any Environment operations like get, start, stop, connect
 */
export interface PersonalPreferencesOperationsPayload {
  /**
   * Resource Id of the lab account
   */
  labAccountResourceId?: string;
  /**
   * Enum indicating if user is adding or removing a favorite lab. Possible values include: 'Add',
   * 'Remove'
   */
  addRemove?: string;
  /**
   * Resource Id of the lab to add/remove from the favorites list
   */
  labResourceId?: string;
}

/**
 * Payload for Publish operation on EnvironmentSetting.
 */
export interface PublishPayload {
  /**
   * Whether to use existing VM custom image when publishing.
   */
  useExistingImage?: boolean;
}

/**
 * Represents payload for Register action.
 */
export interface RegisterPayload {
  /**
   * The registration code of the lab.
   */
  registrationCode?: string;
}

/**
 * Represents the payload for resetting passwords.
 */
export interface ResetPasswordPayload {
  /**
   * The resourceId of the environment
   */
  environmentId: string;
  /**
   * The username for which the password will be reset.
   */
  username?: string;
  /**
   * The password to assign to the user specified in
   */
  password?: string;
}

/**
 * Represents the size configuration under the lab account
 */
export interface SizeConfigurationPropertiesFragment {
  /**
   * Represents a list of size categories supported by this Lab Account (Small, Medium, Large)
   */
  environmentSizes?: EnvironmentSizeFragment[];
}

/**
 * The User registered to a lab
 */
export interface User extends Resource {
  /**
   * The user email address, as it was specified during registration.
   */
  readonly email?: string;
  /**
   * The user family name, as it was specified during registration.
   */
  readonly familyName?: string;
  /**
   * The user given name, as it was specified during registration.
   */
  readonly givenName?: string;
  /**
   * The user tenant ID, as it was specified during registration.
   */
  readonly tenantId?: string;
  /**
   * How long the user has used his VMs in this lab
   */
  readonly totalUsage?: moment.Duration;
  /**
   * The provisioning status of the resource.
   */
  provisioningState?: string;
  /**
   * The unique immutable identifier of a resource (Guid).
   */
  uniqueIdentifier?: string;
  /**
   * The details of the latest operation. ex: status, error
   */
  readonly latestOperationResult?: LatestOperationResult;
}

/**
 * The User registered to a lab
 */
export interface UserFragment extends Resource {
  /**
   * The provisioning status of the resource.
   */
  provisioningState?: string;
  /**
   * The unique immutable identifier of a resource (Guid).
   */
  uniqueIdentifier?: string;
}

/**
 * Result of the request to list REST API operations
 */
export interface ProviderOperationResult extends Array<OperationMetadata> {
  /**
   * URL to get the next set of operation list results if there are any.
   */
  readonly nextLink?: string;
}

/**
 * The response of a list operation.
 */
export interface ResponseWithContinuationLabAccount extends Array<LabAccount> {
  /**
   * Link for next set of results.
   */
  nextLink?: string;
}

/**
 * The response of a list operation.
 */
export interface ResponseWithContinuationGalleryImage extends Array<GalleryImage> {
  /**
   * Link for next set of results.
   */
  nextLink?: string;
}

/**
 * The response of a list operation.
 */
export interface ResponseWithContinuationLab extends Array<Lab> {
  /**
   * Link for next set of results.
   */
  nextLink?: string;
}

/**
 * The response of a list operation.
 */
export interface ResponseWithContinuationEnvironmentSetting extends Array<EnvironmentSetting> {
  /**
   * Link for next set of results.
   */
  nextLink?: string;
}

/**
 * The response of a list operation.
 */
export interface ResponseWithContinuationEnvironment extends Array<Environment> {
  /**
   * Link for next set of results.
   */
  nextLink?: string;
}

/**
 * The response of a list operation.
 */
export interface ResponseWithContinuationUser extends Array<User> {
  /**
   * Link for next set of results.
   */
  nextLink?: string;
}
