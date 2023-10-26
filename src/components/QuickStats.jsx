import React from 'react'
import notepad from '../images/notepad.png';
import trophy from '../images/trophy.png';
import check from '../images/check.png';

export default function QuickStats({rank, percentile, score}) {
  return (
    <div className='r'>
        <p> Quick Statistics </p>
        <div className='f'>
            <img src = {trophy} width={50} height={50} alt = "trophy" />
            <div className='stat'>
                <h2> {rank}  </h2>
                <p className='subname'>YOUR RANK</p>
            </div>
            <img src = {notepad} width={50} height={50} alt = "notepad" />
            <div className='stat'>
                <h2>{percentile}%</h2>
                <p className='subname'>PERCENTILE</p>
            </div>
            <img src = {check} width={50} height={50} alt = "check" />
            <div className='stat'>
                <h2>{score} / 15</h2>
                <p className='subname'>CORRECT ANSWERS</p>
            </div>
        </div>
    </div>
  )
}
