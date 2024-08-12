import { UserData } from '../user-data'
import { InMemoryUserRepository } from './in-memory-user'

describe('In memory User repository', () => {
  test('Should return null if user is not found', async () => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users)
    const user = await userRepo.findUserByEmail('any@mail.com')
    expect(user).toBeNull()
  })
})
