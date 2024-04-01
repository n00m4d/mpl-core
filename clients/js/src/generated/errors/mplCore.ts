/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Program, ProgramError } from '@metaplex-foundation/umi';

type ProgramErrorConstructor = new (
  program: Program,
  cause?: Error
) => ProgramError;
const codeToErrorMap: Map<number, ProgramErrorConstructor> = new Map();
const nameToErrorMap: Map<string, ProgramErrorConstructor> = new Map();

/** InvalidSystemProgram: Invalid System Program */
export class InvalidSystemProgramError extends ProgramError {
  override readonly name: string = 'InvalidSystemProgram';

  readonly code: number = 0x0; // 0

  constructor(program: Program, cause?: Error) {
    super('Invalid System Program', program, cause);
  }
}
codeToErrorMap.set(0x0, InvalidSystemProgramError);
nameToErrorMap.set('InvalidSystemProgram', InvalidSystemProgramError);

/** DeserializationError: Error deserializing account */
export class DeserializationErrorError extends ProgramError {
  override readonly name: string = 'DeserializationError';

  readonly code: number = 0x1; // 1

  constructor(program: Program, cause?: Error) {
    super('Error deserializing account', program, cause);
  }
}
codeToErrorMap.set(0x1, DeserializationErrorError);
nameToErrorMap.set('DeserializationError', DeserializationErrorError);

/** SerializationError: Error serializing account */
export class SerializationErrorError extends ProgramError {
  override readonly name: string = 'SerializationError';

  readonly code: number = 0x2; // 2

  constructor(program: Program, cause?: Error) {
    super('Error serializing account', program, cause);
  }
}
codeToErrorMap.set(0x2, SerializationErrorError);
nameToErrorMap.set('SerializationError', SerializationErrorError);

/** PluginsNotInitialized: Plugins not initialized */
export class PluginsNotInitializedError extends ProgramError {
  override readonly name: string = 'PluginsNotInitialized';

  readonly code: number = 0x3; // 3

  constructor(program: Program, cause?: Error) {
    super('Plugins not initialized', program, cause);
  }
}
codeToErrorMap.set(0x3, PluginsNotInitializedError);
nameToErrorMap.set('PluginsNotInitialized', PluginsNotInitializedError);

/** PluginNotFound: Plugin not found */
export class PluginNotFoundError extends ProgramError {
  override readonly name: string = 'PluginNotFound';

  readonly code: number = 0x4; // 4

  constructor(program: Program, cause?: Error) {
    super('Plugin not found', program, cause);
  }
}
codeToErrorMap.set(0x4, PluginNotFoundError);
nameToErrorMap.set('PluginNotFound', PluginNotFoundError);

/** NumericalOverflow: Numerical Overflow */
export class NumericalOverflowError extends ProgramError {
  override readonly name: string = 'NumericalOverflow';

  readonly code: number = 0x5; // 5

  constructor(program: Program, cause?: Error) {
    super('Numerical Overflow', program, cause);
  }
}
codeToErrorMap.set(0x5, NumericalOverflowError);
nameToErrorMap.set('NumericalOverflow', NumericalOverflowError);

/** IncorrectAccount: Incorrect account */
export class IncorrectAccountError extends ProgramError {
  override readonly name: string = 'IncorrectAccount';

  readonly code: number = 0x6; // 6

  constructor(program: Program, cause?: Error) {
    super('Incorrect account', program, cause);
  }
}
codeToErrorMap.set(0x6, IncorrectAccountError);
nameToErrorMap.set('IncorrectAccount', IncorrectAccountError);

/** IncorrectAssetHash: Incorrect asset hash */
export class IncorrectAssetHashError extends ProgramError {
  override readonly name: string = 'IncorrectAssetHash';

  readonly code: number = 0x7; // 7

  constructor(program: Program, cause?: Error) {
    super('Incorrect asset hash', program, cause);
  }
}
codeToErrorMap.set(0x7, IncorrectAssetHashError);
nameToErrorMap.set('IncorrectAssetHash', IncorrectAssetHashError);

/** InvalidPlugin: Invalid Plugin */
export class InvalidPluginError extends ProgramError {
  override readonly name: string = 'InvalidPlugin';

  readonly code: number = 0x8; // 8

  constructor(program: Program, cause?: Error) {
    super('Invalid Plugin', program, cause);
  }
}
codeToErrorMap.set(0x8, InvalidPluginError);
nameToErrorMap.set('InvalidPlugin', InvalidPluginError);

/** InvalidAuthority: Invalid Authority */
export class InvalidAuthorityError extends ProgramError {
  override readonly name: string = 'InvalidAuthority';

  readonly code: number = 0x9; // 9

  constructor(program: Program, cause?: Error) {
    super('Invalid Authority', program, cause);
  }
}
codeToErrorMap.set(0x9, InvalidAuthorityError);
nameToErrorMap.set('InvalidAuthority', InvalidAuthorityError);

/** AssetIsFrozen: Cannot transfer a frozen asset */
export class AssetIsFrozenError extends ProgramError {
  override readonly name: string = 'AssetIsFrozen';

  readonly code: number = 0xa; // 10

  constructor(program: Program, cause?: Error) {
    super('Cannot transfer a frozen asset', program, cause);
  }
}
codeToErrorMap.set(0xa, AssetIsFrozenError);
nameToErrorMap.set('AssetIsFrozen', AssetIsFrozenError);

/** MissingCompressionProof: Missing compression proof */
export class MissingCompressionProofError extends ProgramError {
  override readonly name: string = 'MissingCompressionProof';

  readonly code: number = 0xb; // 11

  constructor(program: Program, cause?: Error) {
    super('Missing compression proof', program, cause);
  }
}
codeToErrorMap.set(0xb, MissingCompressionProofError);
nameToErrorMap.set('MissingCompressionProof', MissingCompressionProofError);

/** CannotMigrateMasterWithSupply: Cannot migrate a master edition used for prints */
export class CannotMigrateMasterWithSupplyError extends ProgramError {
  override readonly name: string = 'CannotMigrateMasterWithSupply';

  readonly code: number = 0xc; // 12

  constructor(program: Program, cause?: Error) {
    super('Cannot migrate a master edition used for prints', program, cause);
  }
}
codeToErrorMap.set(0xc, CannotMigrateMasterWithSupplyError);
nameToErrorMap.set(
  'CannotMigrateMasterWithSupply',
  CannotMigrateMasterWithSupplyError
);

/** CannotMigratePrints: Cannot migrate a print edition */
export class CannotMigratePrintsError extends ProgramError {
  override readonly name: string = 'CannotMigratePrints';

  readonly code: number = 0xd; // 13

  constructor(program: Program, cause?: Error) {
    super('Cannot migrate a print edition', program, cause);
  }
}
codeToErrorMap.set(0xd, CannotMigratePrintsError);
nameToErrorMap.set('CannotMigratePrints', CannotMigratePrintsError);

/** CannotBurnCollection: Cannot burn a collection NFT */
export class CannotBurnCollectionError extends ProgramError {
  override readonly name: string = 'CannotBurnCollection';

  readonly code: number = 0xe; // 14

  constructor(program: Program, cause?: Error) {
    super('Cannot burn a collection NFT', program, cause);
  }
}
codeToErrorMap.set(0xe, CannotBurnCollectionError);
nameToErrorMap.set('CannotBurnCollection', CannotBurnCollectionError);

/** PluginAlreadyExists: Plugin already exists */
export class PluginAlreadyExistsError extends ProgramError {
  override readonly name: string = 'PluginAlreadyExists';

  readonly code: number = 0xf; // 15

  constructor(program: Program, cause?: Error) {
    super('Plugin already exists', program, cause);
  }
}
codeToErrorMap.set(0xf, PluginAlreadyExistsError);
nameToErrorMap.set('PluginAlreadyExists', PluginAlreadyExistsError);

/** NumericalOverflowError: Numerical overflow */
export class NumericalOverflowErrorError extends ProgramError {
  override readonly name: string = 'NumericalOverflowError';

  readonly code: number = 0x10; // 16

  constructor(program: Program, cause?: Error) {
    super('Numerical overflow', program, cause);
  }
}
codeToErrorMap.set(0x10, NumericalOverflowErrorError);
nameToErrorMap.set('NumericalOverflowError', NumericalOverflowErrorError);

/** AlreadyCompressed: Already compressed account */
export class AlreadyCompressedError extends ProgramError {
  override readonly name: string = 'AlreadyCompressed';

  readonly code: number = 0x11; // 17

  constructor(program: Program, cause?: Error) {
    super('Already compressed account', program, cause);
  }
}
codeToErrorMap.set(0x11, AlreadyCompressedError);
nameToErrorMap.set('AlreadyCompressed', AlreadyCompressedError);

/** AlreadyDecompressed: Already decompressed account */
export class AlreadyDecompressedError extends ProgramError {
  override readonly name: string = 'AlreadyDecompressed';

  readonly code: number = 0x12; // 18

  constructor(program: Program, cause?: Error) {
    super('Already decompressed account', program, cause);
  }
}
codeToErrorMap.set(0x12, AlreadyDecompressedError);
nameToErrorMap.set('AlreadyDecompressed', AlreadyDecompressedError);

/** InvalidCollection: Invalid Collection passed in */
export class InvalidCollectionError extends ProgramError {
  override readonly name: string = 'InvalidCollection';

  readonly code: number = 0x13; // 19

  constructor(program: Program, cause?: Error) {
    super('Invalid Collection passed in', program, cause);
  }
}
codeToErrorMap.set(0x13, InvalidCollectionError);
nameToErrorMap.set('InvalidCollection', InvalidCollectionError);

/** MissingUpdateAuthority: Missing update authority */
export class MissingUpdateAuthorityError extends ProgramError {
  override readonly name: string = 'MissingUpdateAuthority';

  readonly code: number = 0x14; // 20

  constructor(program: Program, cause?: Error) {
    super('Missing update authority', program, cause);
  }
}
codeToErrorMap.set(0x14, MissingUpdateAuthorityError);
nameToErrorMap.set('MissingUpdateAuthority', MissingUpdateAuthorityError);

/** MissingNewOwner: Missing new owner */
export class MissingNewOwnerError extends ProgramError {
  override readonly name: string = 'MissingNewOwner';

  readonly code: number = 0x15; // 21

  constructor(program: Program, cause?: Error) {
    super('Missing new owner', program, cause);
  }
}
codeToErrorMap.set(0x15, MissingNewOwnerError);
nameToErrorMap.set('MissingNewOwner', MissingNewOwnerError);

/** MissingSystemProgram: Missing system program */
export class MissingSystemProgramError extends ProgramError {
  override readonly name: string = 'MissingSystemProgram';

  readonly code: number = 0x16; // 22

  constructor(program: Program, cause?: Error) {
    super('Missing system program', program, cause);
  }
}
codeToErrorMap.set(0x16, MissingSystemProgramError);
nameToErrorMap.set('MissingSystemProgram', MissingSystemProgramError);

/** NotAvailable: Feature not available */
export class NotAvailableError extends ProgramError {
  override readonly name: string = 'NotAvailable';

  readonly code: number = 0x17; // 23

  constructor(program: Program, cause?: Error) {
    super('Feature not available', program, cause);
  }
}
codeToErrorMap.set(0x17, NotAvailableError);
nameToErrorMap.set('NotAvailable', NotAvailableError);

/** InvalidAsset: Invalid Asset passed in */
export class InvalidAssetError extends ProgramError {
  override readonly name: string = 'InvalidAsset';

  readonly code: number = 0x18; // 24

  constructor(program: Program, cause?: Error) {
    super('Invalid Asset passed in', program, cause);
  }
}
codeToErrorMap.set(0x18, InvalidAssetError);
nameToErrorMap.set('InvalidAsset', InvalidAssetError);

/** MissingCollection: Missing collection */
export class MissingCollectionError extends ProgramError {
  override readonly name: string = 'MissingCollection';

  readonly code: number = 0x19; // 25

  constructor(program: Program, cause?: Error) {
    super('Missing collection', program, cause);
  }
}
codeToErrorMap.set(0x19, MissingCollectionError);
nameToErrorMap.set('MissingCollection', MissingCollectionError);

/** NoApprovals: Neither the asset or any plugins have approved this operation */
export class NoApprovalsError extends ProgramError {
  override readonly name: string = 'NoApprovals';

  readonly code: number = 0x1a; // 26

  constructor(program: Program, cause?: Error) {
    super(
      'Neither the asset or any plugins have approved this operation',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x1a, NoApprovalsError);
nameToErrorMap.set('NoApprovals', NoApprovalsError);

/** CannotRedelegate: Plugin Manager cannot redelegate a delegated plugin without revoking first */
export class CannotRedelegateError extends ProgramError {
  override readonly name: string = 'CannotRedelegate';

  readonly code: number = 0x1b; // 27

  constructor(program: Program, cause?: Error) {
    super(
      'Plugin Manager cannot redelegate a delegated plugin without revoking first',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x1b, CannotRedelegateError);
nameToErrorMap.set('CannotRedelegate', CannotRedelegateError);

/** InvalidPluginSetting: Invalid setting for plugin */
export class InvalidPluginSettingError extends ProgramError {
  override readonly name: string = 'InvalidPluginSetting';

  readonly code: number = 0x1c; // 28

  constructor(program: Program, cause?: Error) {
    super('Invalid setting for plugin', program, cause);
  }
}
codeToErrorMap.set(0x1c, InvalidPluginSettingError);
nameToErrorMap.set('InvalidPluginSetting', InvalidPluginSettingError);

/** ConflictingAuthority: Cannot specify both an update authority and collection on an asset */
export class ConflictingAuthorityError extends ProgramError {
  override readonly name: string = 'ConflictingAuthority';

  readonly code: number = 0x1d; // 29

  constructor(program: Program, cause?: Error) {
    super(
      'Cannot specify both an update authority and collection on an asset',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x1d, ConflictingAuthorityError);
nameToErrorMap.set('ConflictingAuthority', ConflictingAuthorityError);

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 */
export function getMplCoreErrorFromCode(
  code: number,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = codeToErrorMap.get(code);
  return constructor ? new constructor(program, cause) : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 */
export function getMplCoreErrorFromName(
  name: string,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = nameToErrorMap.get(name);
  return constructor ? new constructor(program, cause) : null;
}
