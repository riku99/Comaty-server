import { MutationResolvers } from '~/generated/graphql';
import { createUser } from './createUser';
import { updateInitialStatus } from './updateInitialStatus';

export const Mutation: MutationResolvers = {
  createUser,
  updateInitialStatus,
};
