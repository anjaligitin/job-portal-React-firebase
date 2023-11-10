import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import JobData from "./JobDummyData";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config"

function App() {
  const [jobs,setJobs]= useState([]);

  const fetchJobs=async()=>{
    const tempJobs=[]
    const q = query(collection(db, "jobs"))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id:job.id
      })
    });
    setJobs(tempJobs);
  }

  useEffect(()=>{
    fetchJobs()
  },[])

  return (
    <>
      <div>
        {/* <h1 className=' bg-slate-700 text-center text-white py-4 font-bold'>Online Job Portal</h1> */}
        <Navbar></Navbar>
        
        <Header></Header>
        {/* <div className=' items-end flex flex-col mx-20 '>
        <button className=' text-1xl rounded-full px-3 py-3 bg-slate-500 font-bold text-white hover:bg-white hover:text-slate-600'>
          Create Post</button>
      </div> */}
        <SearchBar></SearchBar>
        {jobs.map((job)=>(
          <JobCard key={job.id} {...job}/>
        ))}
      </div>
    </>
  )
}

export default App
