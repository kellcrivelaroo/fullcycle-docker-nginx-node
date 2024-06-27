import { prisma } from "./prisma.js";

export const seed = async () => {
  try {
    const user1 = await prisma.user.create({
      data: {
        name: 'João'
      }
    })
  
    const user2 = await prisma.user.create({
      data: {
        name: 'Maria'
      }
    })
  
    const user3 = await prisma.user.create({
      data: {
        name: 'Bruxa'
      }
    })
  
    console.log('Registros adicionados ao banco de dados!');
    console.log({ user1, user2, user3 });
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await prisma.$disconnect()
  }
}