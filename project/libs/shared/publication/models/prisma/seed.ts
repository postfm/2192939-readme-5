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
      userId: SECOND_USER_ID,
      tags: [{ title: 'Animals' }],
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
    },
    {
      id: SECOND_PUBLIC_UUID,
      title: 'Видео публикация № 2',
      link: 'https://www.youtube.com/watch?v=2BcYD_F3QrA&list=RD2BcYD_F3QrA&start_radio=2',
      userId: FIRST_USER_ID,
      tags: [{ title: 'People' }],
    },
  ];
}

async function seedDb(prismaClient: PrismaClient) {
  const mockVideoPublics = getVideoPublics();
  for (const videoPublic of mockVideoPublics) {
    await prismaClient.videoPublic.create({
      data: {
        id: videoPublic.id,
        title: videoPublic.title,
        link: videoPublic.link,
        userId: videoPublic.userId,
        tags: videoPublic.tags ? { create: videoPublic.tags } : undefined,
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
