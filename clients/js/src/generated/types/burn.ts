/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Serializer, struct } from '@metaplex-foundation/umi/serializers';

export type Burn = {};

export type BurnArgs = Burn;

export function getBurnSerializer(): Serializer<BurnArgs, Burn> {
  return struct<Burn>([], { description: 'Burn' }) as Serializer<
    BurnArgs,
    Burn
  >;
}