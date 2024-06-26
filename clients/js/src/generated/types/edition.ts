/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Serializer, struct, u32 } from '@metaplex-foundation/umi/serializers';

export type Edition = { number: number };

export type EditionArgs = Edition;

export function getEditionSerializer(): Serializer<EditionArgs, Edition> {
  return struct<Edition>([['number', u32()]], {
    description: 'Edition',
  }) as Serializer<EditionArgs, Edition>;
}
