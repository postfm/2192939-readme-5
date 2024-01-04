import { PrismaClient } from '@prisma/client';

const FIRST_PUBLIC_UUID = '749e2ffa-3bab-464e-b049-c82c1a434eb5';
const SECOND_PUBLIC_UUID = '598b72f1-5500-44c4-8159-c0e827923312';

const FIRST_TAG_UUID = '39614113-7ad5-45b6-8093-06455437e1e2';
const SECOND_TAG_UUID = 'efd775e2-df55-4e0e-a308-58249f5ea202';

const FIRST_USER_ID = '658170cbb954e9f5b905ccf4';
const SECOND_USER_ID = '6581762309c030b503e30512';

function getVideoPublics() {
  return [
    {
      id: FIRST_PUBLIC_UUID,
      title: 'Видео публикация № 1',
      link: 'https://www.youtube.com/watch?v=2BcYD_F3QrA&list=RD2BcYD_F3QrA&start_radio=1',
      tags: [{ title: 'People' }],
      comments: [
        {
          text: 'В своём стремлении улучшить пользовательский опыт мы упускаем, что независимые государства формируют глобальную экономическую сеть и при этом — описаны максимально подробно.',
          userId: FIRST_USER_ID,
        },
        {
          text: 'Но выбранный нами инновационный путь не даёт нам иного выбора, кроме определения модели развития.',
          userId: SECOND_USER_ID,
        },
      ],
      userId: SECOND_USER_ID,
    },
    {
      id: SECOND_PUBLIC_UUID,
      title: 'Видео публикация № 2',
      link: 'https://www.youtube.com/watch?v=2BcYD_F3QrA&list=RD2BcYD_F3QrA&start_radio=2',
      tags: [{ title: 'Animals' }],
      userId: SECOND_USER_ID,
    },
  ];
}

// function getTextPublic() {
//   return [
//     {
//       id: FIRST_PUBLIC_UUID,
//       title: 'Текстовая публикация № 1',
//       notice: 'Публикация о публикации',
//       text: 'Также как граница обучения кадров играет важную роль в формировании модели развития. Безусловно, курс на социально-ориентированный национальный проект предопределяет высокую востребованность как самодостаточных, так и внешне зависимых концептуальных решений.',
//       tags: {
//         connect: [{ id: FIRST_TAG_UUID }],
//       },
//       comments: {
//         connect: [{ id: FIRST_COMMENT_UUID }, { id: FIRST_COMMENT_UUID }],
//       },
//       likes: [],
//       userId: FIRST_USER_ID,
//     },
//     {
//       id: SECOND_PUBLIC_UUID,
//       title: 'Текстовая публикация № 2',
//       notice: 'Описание публикации',
//       text: 'Значимость этих проблем настолько очевидна, что разбавленное изрядной долей эмпатии, рациональное мышление, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для переосмысления внешнеэкономических политик. Господа, социально-экономическое развитие является качественно новой ступенью инновационных методов управления процессами.',
//       tags: {
//         connect: [{ id: FIRST_TAG_UUID }, { id: SECOND_TAG_UUID }],
//       },
//       comments: { connect: [{ id: FIRST_COMMENT_UUID }] },
//       likes: [],
//       userId: FIRST_USER_ID,
//     },
//   ];
// }

// function getQuotePublic() {
//   return [
//     {
//       id: FIRST_PUBLIC_UUID,
//       text: 'В своём стремлении улучшить пользовательский опыт мы упускаем, что явные признаки победы институционализации, вне зависимости от их уровня, должны быть своевременно верифицированы.',
//       author: 'Ильф',
//       tags: {
//         connect: [{ id: FIRST_TAG_UUID }],
//       },
//       comments: {
//         connect: [{ id: FIRST_COMMENT_UUID }, { id: FIRST_COMMENT_UUID }],
//       },
//       likes: [],
//       userId: FIRST_USER_ID,
//     },
//     {
//       id: SECOND_PUBLIC_UUID,
//       text: 'Картельные сговоры не допускают ситуации, при которой базовые сценарии поведения пользователей, превозмогая сложившуюся непростую экономическую ситуацию, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.',
//       author: 'Петров',
//       tags: {
//         connect: [{ id: FIRST_TAG_UUID }, { id: SECOND_TAG_UUID }],
//       },
//       comments: { connect: [{ id: FIRST_COMMENT_UUID }] },
//       likes: [],
//       userId: FIRST_USER_ID,
//     },
//   ];
// }

// function getPhotoPublic() {
//   return [
//     {
//       id: FIRST_PUBLIC_UUID,
//       photo:
//         'https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy9yZWNpcGVzLzMyMjM4L2NvdmVycy9DVnRoQkcuanBn.webp',
//       tags: {
//         connect: [{ id: FIRST_TAG_UUID }],
//       },
//       comments: {
//         connect: [{ id: FIRST_COMMENT_UUID }, { id: FIRST_COMMENT_UUID }],
//       },
//       likes: [],
//       userId: FIRST_USER_ID,
//     },
//     {
//       id: SECOND_PUBLIC_UUID,
//       photo:
//         'https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy9yZWNpcGVzLzMyMjM4L3N0ZXBzL1JuRE5MdS5qcGc.webp',
//       tags: {
//         connect: [{ id: FIRST_TAG_UUID }, { id: SECOND_TAG_UUID }],
//       },
//       comments: { connect: [{ id: FIRST_COMMENT_UUID }] },
//       likes: [],
//       userId: FIRST_USER_ID,
//     },
//   ];
// }

// function getLinkPublic() {
//   return [
//     {
//       id: FIRST_PUBLIC_UUID,
//       link: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID',
//       description: 'Ссылка на страницу разработчиков',
//       tags: {
//         connect: [{ id: FIRST_TAG_UUID }],
//       },
//       comments: [{ id: FIRST_COMMENT_UUID }, { id: SECOND_COMMENT_UUID }],

//       likes: [],
//       userId: FIRST_USER_ID,
//     },
//     {
//       id: SECOND_PUBLIC_UUID,
//       link: 'https://fish-text.ru/?ysclid=lqxp5s82845283518567',
//       description: 'Ссылка на генератор рыбьего текста',
//       tags: {
//         connect: [{ id: FIRST_TAG_UUID }, { id: SECOND_TAG_UUID }],
//       },
//       comments: { connect: [{ id: FIRST_COMMENT_UUID }] },
//       likes: [],
//       userId: FIRST_USER_ID,
//     },
//   ];
// }

async function seedDb(prismaClient: PrismaClient) {
  const mockVideoPublics = getVideoPublics();
  for (const videoPublic of mockVideoPublics) {
    await prismaClient.videoPublic.create({
      data: {
        id: videoPublic.id,
        title: videoPublic.title,
        link: videoPublic.link,
        tags: videoPublic.tags ? { create: videoPublic.tags } : undefined,
        userId: videoPublic.userId,
        comments: videoPublic.comments
          ? { create: videoPublic.comments }
          : undefined,
      },
    });
  }

  console.info('🤘️ Database was filled');
}

async function bootstrap() {
  const prismaClient = new PrismaClient();

  try {
    await seedDb(prismaClient);
    globalThis.process.exit(0);
  } catch (error: unknown) {
    console.error(error);
    globalThis.process.exit(1);
  } finally {
    await prismaClient.$disconnect();
  }
}

bootstrap();
