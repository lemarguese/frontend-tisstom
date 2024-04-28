import { faker } from '@faker-js/faker';

export const clinics = [{
  id: faker.string.uuid(),
  avatarUrl: `/assets/logo.png`,
  name: 'TOO TisStom',
  address: faker.location.streetAddress(true),
  status: 'active',
}];
