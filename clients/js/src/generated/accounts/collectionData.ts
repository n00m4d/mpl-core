/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  Pda,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  publicKey as toPublicKey,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  publicKey as publicKeySerializer,
  string,
  struct,
  u32,
} from '@metaplex-foundation/umi/serializers';
import { Key, KeyArgs, getKeySerializer } from '../types';

export type CollectionData = Account<CollectionDataAccountData>;

export type CollectionDataAccountData = {
  key: Key;
  updateAuthority: PublicKey;
  name: string;
  uri: string;
  numMinted: number;
  currentSize: number;
};

export type CollectionDataAccountDataArgs = {
  key: KeyArgs;
  updateAuthority: PublicKey;
  name: string;
  uri: string;
  numMinted: number;
  currentSize: number;
};

export function getCollectionDataAccountDataSerializer(): Serializer<
  CollectionDataAccountDataArgs,
  CollectionDataAccountData
> {
  return struct<CollectionDataAccountData>(
    [
      ['key', getKeySerializer()],
      ['updateAuthority', publicKeySerializer()],
      ['name', string()],
      ['uri', string()],
      ['numMinted', u32()],
      ['currentSize', u32()],
    ],
    { description: 'CollectionDataAccountData' }
  ) as Serializer<CollectionDataAccountDataArgs, CollectionDataAccountData>;
}

export function deserializeCollectionData(
  rawAccount: RpcAccount
): CollectionData {
  return deserializeAccount(
    rawAccount,
    getCollectionDataAccountDataSerializer()
  );
}

export async function fetchCollectionData(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<CollectionData> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  assertAccountExists(maybeAccount, 'CollectionData');
  return deserializeCollectionData(maybeAccount);
}

export async function safeFetchCollectionData(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<CollectionData | null> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  return maybeAccount.exists ? deserializeCollectionData(maybeAccount) : null;
}

export async function fetchAllCollectionData(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<CollectionData[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'CollectionData');
    return deserializeCollectionData(maybeAccount);
  });
}

export async function safeFetchAllCollectionData(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<CollectionData[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeCollectionData(maybeAccount as RpcAccount)
    );
}

export function getCollectionDataGpaBuilder(
  context: Pick<Context, 'rpc' | 'programs'>
) {
  const programId = context.programs.getPublicKey(
    'mplCore',
    'CoREzp6dAdLVRKf3EM5tWrsXM2jQwRFeu5uhzsAyjYXL'
  );
  return gpaBuilder(context, programId)
    .registerFields<{
      key: KeyArgs;
      updateAuthority: PublicKey;
      name: string;
      uri: string;
      numMinted: number;
      currentSize: number;
    }>({
      key: [0, getKeySerializer()],
      updateAuthority: [1, publicKeySerializer()],
      name: [33, string()],
      uri: [null, string()],
      numMinted: [null, u32()],
      currentSize: [null, u32()],
    })
    .deserializeUsing<CollectionData>((account) =>
      deserializeCollectionData(account)
    );
}
