import React, {useState} from 'react'

function Counting() {
    const [value, setValue] = useState(0);

    const Decrement = () =>{
        if(value <! 0) return;
        setValue(prev => prev-1)
    }
    const Increment = () =>{
        setValue(prev => prev+1)
    }
  return (
    <div className='w-[400px] min-h-[300px] bg-red-400 flex justify-center items-center flex-col rounded-md mt-2'>

        <h2 className='text-center text-white text-5xl mb-5 font-bold'>{value}</h2>
        <div className='mt-5'>
        <button className='bg-gray-100 p-5 mx-2' onClick={Decrement}>Decrement</button>
        <button className='bg-gray-100 p-5 mx-2' onClick={Increment}>Increment</button>
        </div>
    </div>
  )
}

export default Counting