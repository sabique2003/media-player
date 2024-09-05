import React,{useEffect,useState} from 'react'
import { getCategories } from '../services/allApi'
import { deleteCategory,updateCategory } from '../services/allApi'
import { toast } from 'react-toastify'
import VideoCard from './VideoCard'


function CategoryList({response}) {
    const [CategoryList,setCategoryList] = useState([])
    useEffect(()=>{
        getData()
    },[response])
    const getData=async()=>{
        const result=await getCategories()
        console.log(result);
        if(result.status==200){
            setCategoryList(result.data)
        }
        
    }
    const handleDelete=async(id)=>{
        const res=await deleteCategory(id)
        console.log(res);
        if(res.status==200){
            getData()
        }
    }

    const dropHandler=async(e,category)=>{
        console.log(e);
        const vid=(JSON.parse(e.dataTransfer.getData("video")));
        category.video.push(vid)
        const result=await updateCategory(category.id,category)
        console.log(result);
        if(result.status==200){
            toast.success(`${vid.videoTitle} video added to ${category.title}`)
            getData()
        }
        else{
            toast.error(`video category adding failed!!`)
        }
        
    }
     
    const dragOverHandler=(e)=>{
        console.log(e);
        e.preventDefault()
    }
  return (
    <>
    <div className="container-fluid border border-3 border-light p-2 m-2">
    {
        CategoryList.length>0
        ?
        <div>
            {
                CategoryList.map(item=>(
                    <div className='border m-1'>
                    <div className="m-2 p-3 mb-3 d-flex justify-content-between" onDragOver={(e)=>{dragOverHandler(e)}} onDrop={(e)=>{dropHandler(e,item)}}>
                        <h3>{item.title}</h3>
                        <button className="btn" onClick={()=>handleDelete(item.id)}>
                        <i className="fa-solid fa-trash" style={{color: "#c02a2a"}} /> 
                        </button>
                    </div>
                    <div className='border border-light'>
                        {
                            item?.video.length>0  &&
                            (
                                item?.video?.map(vid=>(
                                    <VideoCard video={vid} cat={true}/>
                                ))
                            )
                        }

                    </div>
                    </div>

                ))
            }
        </div>
        :
        <h5>No Categories</h5>
    }

    </div>
    </>
  )
}

export default CategoryList