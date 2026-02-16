import { useState } from 'react'

import './App.css'
import Head from './assets/components/header'
function App() {
  

  return (
  <div className='flex justify-center items-center w-screen h-screen'>
      <div className='flex justify-center items-center pt-10 pb-10 w-full h-screen md:w-1/2 stone100'>
            <div className='flex flex-col justify-between items-start p-5 w-1/2 h-full bg-white rounded-2xl border-1'> 
                  <img src="image-omelette.jpeg" alt="omelette png" className='rounded-xl' />
                  <h1 className='text-xl text-black young-serif-regular'>Simple Omelette Recipe</h1>
                  <p className='text-[8px] text-stone-600 outfit'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
                  <div className='flex flex-col items-start p-2 w-full h-auto rounded-xl rose50'>
                      <h1 className='text-xs text-rose-800 outfit'>Preparation time</h1>
                      <ul className='flex flex-col items-start pl-5 space-y-2 list-disc text-black text-[8px] outfit'>
                           <li className=''>  
                             <span className="font-semibold text-stone-900">Total:</span> Approximately 10 minutes
                            </li>
                            <li className=''>
                               <span className="font-semibold text-stone-900">Preparation:</span> 5 minutes
                            </li>
                            <li className=''>
                               <span className="font-semibold text-stone-900">Cooking:</span> 5 minutes
                            </li>
                        
                      </ul>
                  </div>
                  <h1 className='text-base young-serif-regular text-[hsl(14,45%,36%)]'>Ingredients</h1>
                  <ul className='flex flex-col items-start text-[8px] list-disc text-stone-600 outfit pl-5'>
                      <li>2-3 large eggs</li>
                      <li>Salt, to taste</li>
                      <li>Pepper, to taste</li>
                      <li>1 tablespoon of butter or oil</li>
                      <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                  </ul>
                  <h1 className='text-base young-serif-regular text-[hsl(14,45%,36%)]'>Instructions</h1>
                  <ol className='flex flex-col items-start text-[6px] list-decimal text-stone-600 marker:text-[hsl(14,45%,36%)] pl-5 marker:font-bold'>
                    <li><strong className='text-[8px]black text-'>Beat the eggs:</strong>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
                    <li><strong className='text-[8px]black text-'>Heat the pan:</strong>Place a non-stick frying pan over medium heat and add butter or oil.</li>
                    <li><strong className='text-[8px]black text-'>Cook the omelette:</strong>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
                    <li><strong className='text-[8px]black text-'>Add fillings (optional):</strong>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
                    <li><strong className='text-[8px]black text-'>Fold and serve:</strong>As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
                    <li><strong className='text-[8px]black text-'>Enjoy:</strong>Serve hot, with additional salt and pepper if needed.</li>
                  </ol>
                  
                  <h1 className='text-base young-serif-regular text-[hsl(14,45%,36%)]'>Nutrition</h1>
                  <p className='text-[8px] text-stone-600 outfit'>The table below shows nutritional values per serving without the additional fillings.</p>
                  <table className='w-full text-left border-none border-collapse'>
                    <tbody>
                      <tr className='border border-b-gray-300'>
                          <td className='p-2 text-stone-600 text-[10px] outfit'>Calories</td>
                          <td className='p-2 text-[hsl(14,45%,36%)] text-[10px] outfit font-semibold'>277kcal</td>
                      </tr>
                      <tr className='border border-b-gray-300'>
                          <td className='p-2 text-stone-600 text-[10px] outfit'>Carbs</td>
                          <td className='p-2 text-[hsl(14,45%,36%)] text-[10px] outfit font-semibold'>0g</td>
                      </tr>
                      <tr className='border border-b-gray-300'>
                          <td className='p-2 text-stone-600 text-[10px] outfit'>Protein</td>
                          <td className='p-2 text-[hsl(14,45%,36%)] text-[10px] outfit font-semibold'>20g</td>
                      </tr>
                      <tr>
                          <td className='p-2 text-stone-600 text-[10px] outfit'>Fat</td>
                          <td className='p-2 text-[hsl(14,45%,36%)] text-[10px] outfit font-semibold'>22g</td>
                      </tr>
                    </tbody>
                  </table>
            </div>
      </div>
    
    
  </div>
  )
}

export default App
