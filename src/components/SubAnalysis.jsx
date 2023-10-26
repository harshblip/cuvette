import React from 'react'
import ProgressBar from './Progressbar1'
import Counter from './Counter'

export default function SubAnalysis() {
    return (
        <div>
            <div className='subwise-analysis'>
                <p className='font-dmsans'>Syllabus wise Analysis</p>
                <p>HTML tools, Forms, History</p>
                <div className='n1'>
                    <ProgressBar target={80} />
                    <Counter target={80} />
                </div>
                <p>Tags & References in HTML</p>
                <div className='n1'>
                    <ProgressBar target={60} />
                    <Counter target={60} />
                </div>
                <p>Tables & CSS Basics</p>
                <div className='n1'>
                    <ProgressBar target={24} />
                    <Counter target={24} />
                </div>
                <p>Tables & CSS Basics</p>
                <div className='n1'>
                    <ProgressBar target={96} />
                    <Counter target={96} />
                </div>
            </div>
        </div>
    )
}
