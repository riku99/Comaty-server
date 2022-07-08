import { QueryResolvers } from '~/generated/graphql';
import { me } from './me';
import { user } from './user';

export const Query: QueryResolvers = {
  user,
  me,
};
