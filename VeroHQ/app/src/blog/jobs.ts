// Job to publish scheduled posts
export const publishScheduledPosts = async (args: any, context: any) => {
  const now = new Date();

  // Find all scheduled posts that are due to be published
  const scheduledPosts = await context.entities.Post.findMany({
    where: {
      status: 'SCHEDULED',
      scheduledFor: {
        lte: now
      }
    }
  });

  console.log(`Found ${scheduledPosts.length} posts to publish`);

  // Publish each post
  for (const post of scheduledPosts) {
    try {
      await context.entities.Post.update({
        where: { id: post.id },
        data: {
          status: 'PUBLISHED',
          publishedAt: now
        }
      });
      console.log(`Published post: ${post.title}`);
    } catch (error) {
      console.error(`Failed to publish post ${post.id}:`, error);
    }
  }

  return {
    published: scheduledPosts.length
  };
};
