import { CREATE_POST } from './types';

export const createPost = post => ({
  type: CREATE_POST,
  payload: post
});
