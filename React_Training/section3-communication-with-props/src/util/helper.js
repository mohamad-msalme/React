import faker from '@faker-js/faker'
export const getFakeData = (length) => Array.from({length}, () => ({
    author: faker.name.firstName(),
    timeAgo: 'Today, 2:30',
    imgURL: faker.image.avatar(),
    content: faker.lorem.sentence(),
}));