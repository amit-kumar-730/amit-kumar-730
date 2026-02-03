const { createClient } =require( 'redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-12223.c301.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 12223
    }
});

module.exports=redisClient;