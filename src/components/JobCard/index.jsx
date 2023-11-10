import dayjs from 'dayjs';
import React from 'react';

function JobCard(props) {
    // const skills=['Javascript','Reactjs','Nextjs'];
    const date1=dayjs(Date.now())
    const diffInDays=date1.diff(props.postedOn,'day')
  return (
    <div className='mx-40 mb-4'>
      <div className=' bg-zinc-200 flex justify-between items-center px-6 py-4 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
        <div className='flex flex-col items-start gap-3'>
            <h1 className="text-lg font-semibold">{props.title} - {props.company}</h1>
            <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
            <div className='flex items-center gap-2'>
                {props.skills.map((skill)=>(
                    <p className=' text-gray-600 py-1 px-2 rounded-md border border-gray-600'>{skill}</p>
                ))}
            </div>
        </div>
        <div className='flex items-center gap-3'>
            <p className=' text-gray-600'>Posted: {diffInDays} days ago</p>
            <a href={props.Job_Link}>
            <button className=' text-blue-500 border border-blue-500 py-2 px-10 rounded-md'>Apply</button>
            </a>
        </div>
      </div>
    </div>
  )
}

export default JobCard
