import Router from 'koa-joi-router';
import PostController from '../controllers/postController';


const {Joi} = Router;

const router = new Router();

router.route({
    method: 'get',
    path: '/posts',
    handler: async ctx => {
      console.log(ctx.request);
      ctx.body = 'best posts per term';
    },
  });

  router.route({
      method: 'get',
      path: '/posts/:id',
      handler: async ctx => {
          ctx.body = await PostController.getArticle(ctx.params.id);
      },
      validate: {
        params: {
          id: Joi.string(),
        }
      },
  });

  router.route({
    method: 'post',
    path: '/posts/article',
    handler: async ctx => {
      const newPost = await PostController.newPost(ctx.request.body);
      ctx.body = newPost;
    },
    validate: {
      body: {
        title: Joi.string().required(),
        content: Joi.string(),
        img: Joi.string(),
        tags: Joi.array().items(Joi.string()),
        user: Joi.number(), 
      },
      type: 'application/x-www-form-urlencoded',
      // output: {
      //   200: {
      //     body: Joi.object().keys({
      //         title: Joi.string(),
      //     }),
      //   }
      // }
    },
  });

  router.route({
    method: 'post',
    path: '/posts/repost',
    handler: async ctx => {
      const newPost = await PostController.newRepost(ctx.request.body);
      ctx.body = newPost;
    },
    validate: {
      body: {
        url: Joi.string().uri().required(),
        title: Joi.string().required(),
        summary: Joi.string(),
        img: Joi.string(),
        provider: Joi.string(),
        tags: Joi.array().items(Joi.string()),
        author: Joi.string(),
        user: Joi.number(), 
      },
      type: 'application/x-www-form-urlencoded',
      // output: {
      //   200: {
      //     body: Joi.object().keys({
      //         title: Joi.string(),
      //     }),
      //   }
      // }
    },
  });

  router.route({
    method: 'post',
    path: '/posts/video',
    handler: async ctx => {
      const newPostVideo = await PostController.newVideo(ctx.request.body);
      ctx.body = newPostVideo;
    },
    validate: {
      body: {
        url: Joi.string().uri().required(),
        provider: Joi.string(),
        title: Joi.string().required(),
        summary: Joi.string(),
        tags: Joi.array().items(Joi.string()),
        author: Joi.string(),
      },
      type: 'application/x-www-form-urlencoded',
      output: {
        200: {
          body: Joi.object().keys({
              title: Joi.string(),
          }),
        }
      }
    }
  })

  
  
export default router;