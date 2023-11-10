import React from 'react'

function SearchBar() {
  return (
    <div className='flex gap-4 my-10 justify-center px-10 '>
      <select className=' w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden selected>Job Role</option>
        <option value="Java developer">Java developer</option>
        <option value="Fullstack developer">Fullstack developer</option>
        <option value="Frontend developer">Frontend developer</option>
        <option value="Backend developer">Backend developer</option>
        <option value="Software Tester" >Software Tester</option>
      </select>

      <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden selected>Job Type</option>
        <option value="Java developer">Full-Time</option>
        <option value="Fullstack developer">Part-Time</option>
        <option value="Frontend developer">Internship</option>
        <option value="Backend developer">Training</option>
      </select>

      <select className=' w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden selected>Location</option>
        <option value="Java developer">On-Site</option>
        <option value="Fullstack developer">Hybrid</option>
        <option value="Frontend developer">Work From Home</option>
        <option value="Backend developer">Remote</option>
      </select>

      <select className=' w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden selected>Experience</option>
        <option value="Java developer">Fresher</option>
        <option value="Fullstack developer">Junior Level</option>
        <option value="Frontend developer">Mid Level</option>
        <option value="Backend developer">Senior Level</option>
      </select>
      <button className='w-60 py-3 bg-blue-500 rounded-md font-semibold text-white'>Search</button>
    </div>
  )
}

export default SearchBar
