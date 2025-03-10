import { Permission } from 'node-appwrite';
import { questionAttachmentBucket } from '@/models/name';
import { storage } from '@/models/server/config';

export default async function getOrCreateStorage() {
  try {
    await storage.getBucket(questionAttachmentBucket);
    console.log('Storage Connected');
  } catch (error) {
    try {
      await storage.createBucket(
        questionAttachmentBucket,
        questionAttachmentBucket,
        [
          Permission.create('users'),
          Permission.read('any'),
          Permission.read('users'),
          Permission.update('users'),
          Permission.delete('users'),
        ],
        false,
        undefined,
        undefined,
        ['jpg', 'png', 'gif', 'svg', 'webp', 'heic']
      );
    } catch (error) {}
  }
}
