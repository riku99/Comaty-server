import { MeResolvers } from '~/generated/graphql';
import { initialStatusCompletion } from './initialStatusCompletion';

export const Me: MeResolvers = {
  initialStatusCompletion,
};
