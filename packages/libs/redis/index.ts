import Redis from "ioredis";

const redis = new Redis({
  path: process.env.REDIS_URL,
});

export default redis;
