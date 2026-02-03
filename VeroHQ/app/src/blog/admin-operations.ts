// Create a new post
export const createPost = async (args: any, context: any) => {
  if (!context.user) {
    throw new Error('Unauthorized');
  }

  const { title, slug, content, excerpt, coverImage, categoryId, tags, metaTitle, metaDescription, metaKeywords, ogImage } = args;

  // Calculate read time (average reading speed: 200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  const post = await context.entities.Post.create({
    data: {
      title,
      slug,
      content,
      excerpt,
      coverImage,
      categoryId,
      authorId: context.user.id,
      readTime,
      metaTitle,
      metaDescription,
      metaKeywords: metaKeywords || [],
      ogImage,
      status: 'DRAFT',
      tags: tags ? {
        connect: tags.map((tagId: string) => ({ id: tagId }))
      } : undefined
    },
    include: {
      author: true,
      category: true,
      tags: true
    }
  });

  return post;
};

// Update a post
export const updatePost = async (args: any, context: any) => {
  if (!context.user) {
    throw new Error('Unauthorized');
  }

  const { id, ...data } = args;

  // Check if user owns the post or is admin
  const existingPost = await context.entities.Post.findUnique({
    where: { id }
  });

  if (!existingPost) {
    throw new Error('Post not found');
  }

  if (existingPost.authorId !== context.user.id && !context.user.isAdmin) {
    throw new Error('Unauthorized');
  }

  // Recalculate read time if content is updated
  let readTime = existingPost.readTime;
  if (data.content) {
    const wordCount = data.content.split(/\s+/).length;
    readTime = Math.ceil(wordCount / 200);
  }

  const post = await context.entities.Post.update({
    where: { id },
    data: {
      ...data,
      readTime,
      tags: data.tags ? {
        set: data.tags.map((tagId: string) => ({ id: tagId }))
      } : undefined
    },
    include: {
      author: true,
      category: true,
      tags: true
    }
  });

  return post;
};

// Delete a post
export const deletePost = async (args: any, context: any) => {
  if (!context.user) {
    throw new Error('Unauthorized');
  }

  const { id } = args;

  // Check if user owns the post or is admin
  const existingPost = await context.entities.Post.findUnique({
    where: { id }
  });

  if (!existingPost) {
    throw new Error('Post not found');
  }

  if (existingPost.authorId !== context.user.id && !context.user.isAdmin) {
    throw new Error('Unauthorized');
  }

  await context.entities.Post.delete({
    where: { id }
  });

  return { success: true };
};

// Publish a post
export const publishPost = async (args: any, context: any) => {
  if (!context.user) {
    throw new Error('Unauthorized');
  }

  const { id } = args;

  // Check if user owns the post or is admin
  const existingPost = await context.entities.Post.findUnique({
    where: { id }
  });

  if (!existingPost) {
    throw new Error('Post not found');
  }

  if (existingPost.authorId !== context.user.id && !context.user.isAdmin) {
    throw new Error('Unauthorized');
  }

  const post = await context.entities.Post.update({
    where: { id },
    data: {
      status: 'PUBLISHED',
      publishedAt: new Date()
    },
    include: {
      author: true,
      category: true,
      tags: true
    }
  });

  return post;
};

// Schedule a post
export const schedulePost = async (args: any, context: any) => {
  if (!context.user) {
    throw new Error('Unauthorized');
  }

  const { id, scheduledFor } = args;

  // Check if user owns the post or is admin
  const existingPost = await context.entities.Post.findUnique({
    where: { id }
  });

  if (!existingPost) {
    throw new Error('Post not found');
  }

  if (existingPost.authorId !== context.user.id && !context.user.isAdmin) {
    throw new Error('Unauthorized');
  }

  const post = await context.entities.Post.update({
    where: { id },
    data: {
      status: 'SCHEDULED',
      scheduledFor: new Date(scheduledFor)
    },
    include: {
      author: true,
      category: true,
      tags: true
    }
  });

  return post;
};

// Get all drafts
export const getDrafts = async (args: any, context: any) => {
  if (!context.user) {
    throw new Error('Unauthorized');
  }

  const drafts = await context.entities.Post.findMany({
    where: {
      authorId: context.user.id,
      status: { in: ['DRAFT', 'SCHEDULED'] }
    },
    include: {
      author: true,
      category: true,
      tags: true
    },
    orderBy: { updatedAt: 'desc' }
  });

  return drafts;
};
