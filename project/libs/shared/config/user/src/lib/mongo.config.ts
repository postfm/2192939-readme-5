import { ConfigType, registerAs } from '@nestjs/config';
import * as Joi from 'joi';
import { MongodbConfiguration } from './mongodb/mongodb.env';
import { plainToClass } from 'class-transformer';

const DEFAULT_MONGO_PORT = 27017;

export interface MongoConfig {
  host: string;
  name: string;
  port: number;
  user: string;
  password: string;
  authBase: string;
}

const dbValidationSchema = Joi.object({
  host: Joi.string().hostname().required(),
  name: Joi.string().required(),
  port: Joi.number().port().default(DEFAULT_MONGO_PORT),
  user: Joi.string().required(),
  password: Joi.string().required(),
  authBase: Joi.string().required(),
});

function validateMongoConfig(config: MongoConfig): void {
  const { error } = dbValidationSchema.validate(config, { abortEarly: true });

  if (error) {
    throw new Error(`[DB Config Validation Error]: ${error.message}`);
  }
}

async function getDBConfig(): Promise<MongodbConfiguration> {
  const config = plainToClass(MongodbConfiguration, {
    host: process.env.MONGO_HOST!,
    name: process.env.MONGO_DB!,
    port: process.env.MONGO_PORT
      ? parseInt(process.env.MONGO_PORT ?? `${DEFAULT_MONGO_PORT}`, 10)
      : DEFAULT_MONGO_PORT,
    user: process.env.MONGO_USER!,
    password: process.env.MONGO_PASSWORD!,
    authBase: process.env.MONGO_AUTH_BASE!,
  });

  await config.validate();

  return config;
}

export default registerAs(
  'db',
  async (): Promise<ConfigType<typeof getDBConfig>> => {
    return getDBConfig();
  }
);
