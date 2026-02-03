// Get all published posts
export const getPosts = async (args: any, context: any) => {
  const { page = 1, limit = 10, category, tag } = args;
  const skip = (page - 1) * limit;

  const where: any = {
    status: 'PUBLISHED',
    publishedAt: { lte: new Date() }
  };

  if (category) {
    where.category = { slug: category };
  }

  if (tag) {
    where.tags = { some: { slug: tag } };
  }

  const posts = await context.entities.Post.findMany({
    where,
    include: {
      author: {
        select: {
          id: true,
          username: true,
          firstName: true,
          lastName: true,
          avatar: true
        }
      },
      category: true,
      tags: true
    },
    orderBy: { publishedAt: 'desc' },
    skip,
    take: limit
  });

  const total = await context.entities.Post.count({ where });

  return {
    posts,
    total,
    page,
    totalPages: Math.ceil(total / limit)
  };
};

// Get post by slug
export const getPostBySlug = async (args: any, context: any) => {
  const { slug } = args;

  const post = await context.entities.Post.findUnique({
    where: { slug },
    include: {
      author: {
        select: {
          id: true,
          username: true,
          firstName: true,
          lastName: true,
          avatar: true
        }
      },
      category: true,
      tags: true,
      comments: {
        where: { parentId: null },
        include: {
          author: {
            select: {
              id: true,
              username: true,
              avatar: true
            }
          },
          replies: {
            include: {
              author: {
                select: {
                  id: true,
                  username: true,
                  avatar: true
                }
              }
            }
          }
        },
        orderBy: { createdAt: 'desc' }
      }
    }
  });

  if (!post || post.status !== 'PUBLISHED') {
    throw new Error('Post not found');
  }

  return post;
};

// Get all categories
export const getCategories = async (args: any, context: any) => {
  const categories = await context.entities.Category.findMany({
    include: {
      _count: {
        select: { posts: true }
      }
    },
    orderBy: { name: 'asc' }
  });

  return categories;
};

// Get all tags
export const getTags = async (args: any, context: any) => {
  const tags = await context.entities.Tag.findMany({
    include: {
      _count: {
        select: { posts: true }
      }
    },
    orderBy: { name: 'asc' }
  });

  return tags;
};

// Increment post view count
export const incrementPostView = async (args: any, context: any) => {
  const { id } = args;

  await context.entities.Post.update({
    where: { id },
    data: {
      viewCount: { increment: 1 }
    }
  });

  return { success: true };
};
