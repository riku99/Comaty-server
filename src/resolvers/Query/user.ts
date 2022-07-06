import { QueryResolvers } from '~/generated/graphql';

export const user: QueryResolvers['user'] = async () => {
  return {
    id: 'id',
    name: 'Riku',
    firebaseUid: 'uid',
    email: 'email',
  };
};
