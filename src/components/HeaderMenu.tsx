'use client';

import { ArrowLeftRight } from 'lucide-react';
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"



const batsman = [
    'Rohit Sharma',
    'Virat Kohli',
    'Rishabh Pant',
    'Ishan Kishan'
];
const bowler = [
    'Ashish Nehra',
    'Md. Siraj',
    'Jaspreet Bumrah',
    'Y Chahal'
];
const HeaderMenu = () => {
    const [field1, setField1] = useState(batsman);
    const [field2, setField2] = useState(batsman);
    const [isSwapped, setIsSwapped] = useState(false);

    // const batsman = ["Option 1", "Option 2", "Option 3", "Option 4"];

    const handleField1Change = (event) => {
        setField1(event.target.value);
    };

    const handleField2Change = (event) => {
        setField2(event.target.value);
    };

    const handleToggle = () => {
        setIsSwapped(!isSwapped);

        // Swap the values
        const temp = field1;
        setField1(field2);
        setField2(temp);
    };

    return (
        <div className='flex flex-col gap-3'>
            <section className='h-16 flex flex-row gap-5'>

                <div className='flex flex-col'>
                    <label className='text-gray-700'>
                        Batsman (striker)
                    </label>

                    <select
                        className='px-10 py-2 rounded-sm  outline-none border border-gray-400'
                        value={field1} onChange={handleField1Change}>
                        {batsman.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>


                <div className='py-8'>
                    <span className='cursor-pointer text-red-500 ' onClick={handleToggle}>
                        <ArrowLeftRight className='h-4 w-5' />
                    </span>
                </div>

                <div className='flex flex-col'>
                    <label className='text-gray-700'>
                        Batsman (Non-striker)
                    </label>
                    <select
                        className='px-10 py-2 rounded-sm  outline-none border border-gray-400'
                        value={field2} onChange={handleField2Change}>
                        {batsman.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>


                <div className='flex flex-col'>
                    <label className='text-gray-700'>
                        Bowler
                    </label>

                    <select
                        className='px-10 py-2 rounded-sm  outline-none border border-gray-400'
                    >
                        {bowler.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </section>


            <section>

                <div className='h-10 w-full flex flex-row justify-between items-center'>
                    <div className='flex flex-col gap-3'>
                        <p>Score: </p>
                        <p>Extra: </p>
                    </div>

                    <div>
                        <div className='flex flex-col items-center gap-1 border border-gray-400 rounded-md p-1'>

                            <Switch />
                            <p className='text-gray-700'>Mute & Text Off</p>
                        </div>

                    </div>
                </div>
            </section>

            <Separator />

        </div>
    );
};
export default HeaderMenu