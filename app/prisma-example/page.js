import React from 'react'
import Link from 'next/link'
import prisma from '@/utils/db'

const prismaHandler = async()=>{
  // await prisma.task.create({
  //   data:{
  //     content: 'wake up'
  //   }
  // })
  console.log('prisma example')
  const allTasks = await prisma.task.findMany({
    orderBy:{
      createdAt: 'desc'
    }
  })

  return allTasks
}

const PrismaExample = async() => {
  const tasks = await prismaHandler()
  
  if(tasks.length === 0){
    return <h2 className="mt-8 font-medium text-lg">No tasks found</h2>
  }
  
  return (
    <div>
      <h1 className='text-7xl'>Prisma Page</h1>
      {tasks.map((task)=>{
        return <h3 key={task.id} className='text-xl py-2'>{task.content}</h3>
      })}
    </div>
    
  )
}

export default PrismaExample