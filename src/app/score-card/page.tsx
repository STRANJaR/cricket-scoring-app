'use client';

import CardBox from '@/components/CardBox';
import TableComponent from '@/components/TableComponent';
import { Separator } from '@/components/ui/separator';
import React, { useState } from 'react'


// Dummy players
const players = [
    {
        _id: 2,
        name: 'Virat Kohli',
        run: 122,
        bowl: 60,
        four: 6,
        six: 8
    },
    {
        _id: 1,
        name: 'Rohit Sharma',
        run: 76,
        bowl: 30,
        four: 5,
        six: 4
    },

]


const bowler = [
    {
        _id: 1,
        name: 'Mayank Yadav',
        over: 1.0,
        maiden: 0,
        run: 33,
        wicket: 1
    },
    {
        _id: 2,
        name: 'Sandeep Sharma',
        over: 3.0,
        maiden: 1,
        run: 19,
        wicket: 5
    },

]

const ScoreCard = () => {
    return (
        <main className='h-full flex flex-col gap-3 p-4 border border-gray-400 text-sm'>
            <CardBox>
                <div className='w-full h-48'>
                    <div className='h-8 w-full bg-gray-100 rounded-sm flex justify-end items-center px-2'>
                        <span className='text-blue-600 font-bold cursor-pointer'>View Full Score Card</span>
                    </div>
                    <div className='flex flex-row justify-evenly items-center py-3 gap-2 '>

                        <div className='flex flex-col items-center gap-1'>
                            <div>IND</div>
                            <div>
                                <img
                                    className='h-8 w-8'
                                    src="https://www.hindustantimes.com/static-content/1y/cricket-logos/teams/IND.png?2" alt="team-logo" />

                            </div>
                            <div className='flex flex-col border border-gray-400 rounded-md p-1'>
                                <p>296 / 7</p>
                                <p>Over 18.0</p>
                            </div>
                        </div>


                        <div className='flex flex-col items-center'>
                            <p className='text-red-500 font-bold'>vs</p>
                        </div>


                        <div className='flex flex-col items-center gap-1'>
                            <div>NZL</div>
                            <div>
                                <img
                                    className='h-8 w-8'
                                    src="https://www.hindustantimes.com/static-content/1y/cricket-logos/teams/NZ.png?2" alt="team-logo" />

                            </div>
                            <div className='flex flex-col border border-gray-400 rounded-md p-1'>
                                <p>296 / 7</p>
                                <p>Over 18.0</p>
                            </div>
                        </div>
                    </div>

                    <div className='h-8 w-full bg-gray-100 rounded-sm flex justify-center items-center px-2'>
                        <span className='text-gray-600 font-bold '>IND won by 133 runs </span>
                    </div>
                </div>
            </CardBox>

            <Separator />

            <CardBox>
                <main className='h-24 w-full'>

                    <div className='h-8 w-full bg-gray-100 rounded-sm flex justify-between items-center px-4 text-gray-700 font-semibold'>
                        <span>Batsman</span>
                        <span>R</span>
                        <span>B</span>
                        <span>4s</span>
                    </div>

                    <div>
                        {players && players.map(player => (
                            <div
                                key={player._id}
                                className='flex flex-row justify-between items-center gap-4 py-2 px-4 text-700'
                            >
                                <span>{player.name}</span>
                                <span>{player.run}</span>
                                <span>{player.bowl}</span>
                                <span>{player.four}</span>
                            </div>
                        ))}
                    </div>
                </main>

            </CardBox>

            <Separator/>

            <CardBox>
                <main className='h-24 w-full'>

                    <div className='h-8 w-full bg-gray-100 rounded-sm flex justify-between items-center px-4 text-gray-700 font-semibold'>
                        <span>Bowler</span>
                        <span>O</span>
                        <span>M</span>
                        <span>W</span>
                    </div>

                    <div>
                        {bowler && bowler.map(player => (
                            <div
                                key={player._id}
                                className='flex flex-row justify-between items-center gap-4 py-2 px-4 text-700'
                            >
                                <span>{player.name}</span>
                                <span>{player.over}</span>
                                <span>{player.maiden}</span>
                                <span>{player.wicket}</span>
                            </div>
                        ))}
                    </div>
                </main>

            </CardBox>
        </main>
    )
}
export default ScoreCard