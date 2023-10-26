import { React, useState } from 'react'
import html from '../images/htmllogo.png'
import '../Modal.css';
import QuickStats from './QuickStats';
import Charts from './Chart'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import stat from '../images/stat.png';
import target from '../images/target.png';

const Modal = ({ show, handleClose, handleSubmit, rank, score, percentile, setRank, setScore, setPercentile }) => {
    return (
        show ?
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={handleClose}>&times;</span>
                    <div className='header'>
                        <h1>Update Scores</h1>
                        <img src={html} height={50} width={50} alt="htmllogo" />
                    </div>
                    <div className='cols'>
                        <div className='fields'>
                            <p className='d'> 1 Update your <span className='d2'>rank</span> </p>
                            <input type="text" class="input-field" value={rank} onChange={(e) => setRank(e.target.value)} />
                        </div>
                        <div className='fields'>
                            <p className='d'> 2 Update your <span className='d2'>percentile</span> </p>
                            <input type="text" class="input-field" value={percentile} onChange={(e) => setPercentile(e.target.value)} />
                        </div>
                        <div className='fields'>
                            <p className='d'> 2 Update your <span className='d2'>current score (out of 15)</span> </p>
                            <input type="text" class="input-field" value={score} onChange={(e) => setScore(e.target.value)} />
                        </div>
                    </div>
                    <button onClick={handleSubmit} className='save'>Save</button>
                    <button onClick={handleClose} className='cancel'>Cancel</button>
                </div>
            </div> : null
    );
}

export default function Htmlstats() {
    const [modalShow, setModalShow] = useState(false);
    const [rank, setRank] = useState(0);
    const [percentile, setPercentile] = useState(20);
    const [score, setScore] = useState(0);
    const [myArray, setMyArray] = useState(new Array(3).fill(0));
    const submitHandle = () => {

        const newArray = [...myArray];
        newArray[0] = rank;
        newArray[1] = percentile;
        newArray[2] = score;

        setMyArray(newArray);
        setModalShow(false);
    }
    const closeHandle = () => {
        setModalShow(false);
        setRank(0);
        setPercentile(0);
        setScore(0);
    }
    console.log(rank);
    return (
        <div className='boxG'>
            <div className='box'>
                <img src={html} width={60} height={60} alt="html logo" />
                <div>
                    <p> Hyper Text Markup Language </p>
                    <p className='desc'>
                        Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                    </p>
                </div>
                <button className='update' onClick={() => setModalShow(true)}>
                    Update
                </button>
                <Modal show={modalShow} handleClose={() => closeHandle()} handleSubmit={() => submitHandle()} rank={rank} percentile={percentile} score={score} setRank={setRank} setPercentile={setPercentile} setScore={setScore} />
            </div>
            <div>
                <QuickStats rank={myArray[0]} percentile={myArray[1]} score={myArray[2]} />
            </div>
            <div className='foot'>
                <div className='e'>
                    <div className='header'>
                        <h2>Comparison Graph</h2>
                        <img src={stat} width={20} height={20} alt="staticons" className='graph' />
                    </div>
                    <p><span className='d2'>You scored {myArray[1]}% percentile</span> which is lower than the <br />
                        average percentile 72% of all the engineers who took this assessment</p>
                    <Charts percentile={myArray[1]} />
                </div>
                <div style={{ width: 500, height: 200, marginTop: `3rem`, marginLeft: '17rem' }}>
                    <div className='header'>

                        <p>Question Analysis</p>
                        <p className='ques'> {myArray[2]} / 14  </p>
                    </div>
                    <p><span className='d2'>You scored {myArray[2]} question correct out of 15.</span> However it<br />
                        still needs some improvements</p>
                    <div className='cbar'>
                        <CircularProgressbarWithChildren value={myArray[2]}
                            minValue={0}
                            maxValue={14}
                            strokeWidth={14}
                            styles={buildStyles({
                                pathTransitionDuration: 1.5,
                                pathColor: '#438AF6',
                            })}>
                            <img src={target} width={60} height={60} alt="target" />
                        </CircularProgressbarWithChildren>;
                    </div>
                </div>
            </div>
        </div>
    )
}
