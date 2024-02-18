import React from 'react'
import DrinkList from '@/components/DrinkList';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async()=>{
  await new Promise((resolve)=>setTimeout(resolve, 1000))
  const res = await fetch(url)
  if(!res.ok){
    throw new Error('Failed to fetch')
  }
  const data = await res.json()
  return data
}

const DrinksPage = async () => {
  const data = await fetchDrinks()
  
  return (
    <div>
      <h1 className='text-7xl'>Drinks Page</h1>
      <DrinkList drinkList={data.drinks}/>
    </div>
    
  )
}

export default DrinksPage