import { db } from '@/models/name';
import createAnswerCollection from '@/models/server/answer.collection';
import createCommentCollection from '@/models/server/comment.collection';
import createQuestionCollection from '@/models/server/question.collection';
import createVoteCollection from '@/models/server/vote.collection';

import { databases } from '@/models/server/config';

export default async function getOrCreateDatabase() {
  try {
    await databases.get(db);
    console.log('Database Connected');
  } catch (error) {
    try {
      await databases.create(db, db);
      console.log('Database Created');
      // Creating collections
      await Promise.all([
        createQuestionCollection(),
        createAnswerCollection(),
        createCommentCollection(),
        createVoteCollection(),
      ]);
      console.log('Database Collections Created Successfully');
      console.log('Database Connected');
    } catch (error) {
      console.log('Error creating database: ', error);
    }
  }

  return databases;
}
