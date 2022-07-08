import { MutationResolvers } from '~/generated/graphql';
import { createUser } from './createUser';

export const Mutation: MutationResolvers = {
  createUser,
};
