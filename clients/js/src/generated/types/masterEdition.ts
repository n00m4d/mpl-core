/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Option, OptionOrNullable } from '@metaplex-foundation/umi';
import {
  Serializer,
  option,
  string,
  struct,
  u32,
} from '@metaplex-foundation/umi/serializers';

export type MasterEdition = {
  maxSupply: Option<number>;
  name: Option<string>;
  uri: Option<string>;
};

export type MasterEditionArgs = {
  maxSupply: OptionOrNullable<number>;
  name: OptionOrNullable<string>;
  uri: OptionOrNullable<string>;
};

export function getMasterEditionSerializer(): Serializer<
  MasterEditionArgs,
  MasterEdition
> {
  return struct<MasterEdition>(
    [
      ['maxSupply', option(u32())],
      ['name', option(string())],
      ['uri', option(string())],
    ],
    { description: 'MasterEdition' }
  ) as Serializer<MasterEditionArgs, MasterEdition>;
}
