/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Option,
  OptionOrNullable,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  none,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  option,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import {
  CompressionProof,
  CompressionProofArgs,
  getCompressionProofSerializer,
} from '../types';

// Accounts.
export type TransferV1InstructionAccounts = {
  /** The address of the asset */
  asset: PublicKey | Pda;
  /** The collection to which the asset belongs */
  collection?: PublicKey | Pda;
  /** The account paying for the storage fees */
  payer?: Signer;
  /** The owner or delegate of the asset */
  authority?: Signer;
  /** The new owner to which to transfer the asset */
  newOwner: PublicKey | Pda;
  /** The system program */
  systemProgram?: PublicKey | Pda;
  /** The SPL Noop Program */
  logWrapper?: PublicKey | Pda;
};

// Data.
export type TransferV1InstructionData = {
  discriminator: number;
  compressionProof: Option<CompressionProof>;
};

export type TransferV1InstructionDataArgs = {
  compressionProof?: OptionOrNullable<CompressionProofArgs>;
};

export function getTransferV1InstructionDataSerializer(): Serializer<
  TransferV1InstructionDataArgs,
  TransferV1InstructionData
> {
  return mapSerializer<
    TransferV1InstructionDataArgs,
    any,
    TransferV1InstructionData
  >(
    struct<TransferV1InstructionData>(
      [
        ['discriminator', u8()],
        ['compressionProof', option(getCompressionProofSerializer())],
      ],
      { description: 'TransferV1InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 14,
      compressionProof: value.compressionProof ?? none(),
    })
  ) as Serializer<TransferV1InstructionDataArgs, TransferV1InstructionData>;
}

// Args.
export type TransferV1InstructionArgs = TransferV1InstructionDataArgs;

// Instruction.
export function transferV1(
  context: Pick<Context, 'payer' | 'programs'>,
  input: TransferV1InstructionAccounts & TransferV1InstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplCore',
    'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'
  );

  // Accounts.
  const resolvedAccounts = {
    asset: {
      index: 0,
      isWritable: true as boolean,
      value: input.asset ?? null,
    },
    collection: {
      index: 1,
      isWritable: false as boolean,
      value: input.collection ?? null,
    },
    payer: {
      index: 2,
      isWritable: true as boolean,
      value: input.payer ?? null,
    },
    authority: {
      index: 3,
      isWritable: false as boolean,
      value: input.authority ?? null,
    },
    newOwner: {
      index: 4,
      isWritable: false as boolean,
      value: input.newOwner ?? null,
    },
    systemProgram: {
      index: 5,
      isWritable: false as boolean,
      value: input.systemProgram ?? null,
    },
    logWrapper: {
      index: 6,
      isWritable: false as boolean,
      value: input.logWrapper ?? null,
    },
  } satisfies ResolvedAccountsWithIndices;

  // Arguments.
  const resolvedArgs: TransferV1InstructionArgs = { ...input };

  // Default values.
  if (!resolvedAccounts.payer.value) {
    resolvedAccounts.payer.value = context.payer;
  }

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data = getTransferV1InstructionDataSerializer().serialize(
    resolvedArgs as TransferV1InstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
