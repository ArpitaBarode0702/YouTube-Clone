
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import {useNavigate} from 'react-router-dom'
import { fetchDataFromAPI } from "../utils/api";
import { Context } from "../contexts/contextApi";
import Header from "./Header";
import Notes from "./Notes";
import Loggin from "./Loggin";
// const VideoDetails = () => {
//     const [video, setVideo] = useState();
//     const [relatedVideos, setRelatedVideos] = useState();
//     const pass = "OjlaUkllTss";
//     const [notes, setNotes] = useState("");
//     const { id } = useParams();
//     const { setLoading } = useContext(Context);
//     const nevigate = useNavigate();
    
//     useEffect(() => {
//         document.getElementById("root").classList.add("custom-h");
//         fetchVideoDetails();
//         fetchRelatedVideos();
//     }, [id]);

//     const fetchVideoDetails = () => {
//         setLoading(true);
//         fetchDataFromAPI(`video/details/?id=${id}`).then((res) => {
//             console.log(res);
//             setVideo(res);
//             setLoading(false);
//         });
//     };

//     const fetchRelatedVideos = () => {
//         setLoading(true);
//         fetchDataFromAPI(`video/related-contents/?id=${id}`).then((res) => {
//             console.log(res);
//             setRelatedVideos(res);
//             setLoading(false);
//         });
//     };

//     const handleNoteChange = (event) => {
//         setNotes(event.target.value);
//     };
   
//     return (
//         <div>
//             <Header/>
//         <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
//             <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
//                 <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
//                     <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
//                         <ReactPlayer
//                             url={`https://www.youtube.com/watch?v=${id}`}
//                             controls
//                             width="100%"
//                             height="100%"
//                             style={{ backgroundColor: "#000000" }}
//                             playing={true}
//                         />
//                     </div>
//                     <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
//                         {video?.title}
//                     </div>
//                     <div className="flex justify-between flex-col md:flex-row mt-4">
//                         <div className="flex">
//                             <div className="flex items-start">
//                                 <div className="flex h-11 w-11 rounded-full overflow-hidden">
//                                     <img
//                                         className="h-full w-full object-cover"
//                                         src={video?.author?.avatar[0]?.url}
//                                     />
//                                 </div>
//                             </div>
//                             <div className="flex flex-col ml-3">
//                                 <div className="text-white text-md font-semibold flex items-center">
//                                     {video?.author?.title}
//                                     {video?.author?.badges[0]?.type ===
//                                         "VERIFIED_CHANNEL" && (
//                                             <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
//                                         )}
//                                 </div>
//                                 <div className="text-white/[0.7] text-sm">
//                                     {video?.author?.stats?.subscribersText}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                 <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
//                     {/* Related Videos */}
//                     {/* <div>
//                         {relatedVideos?.contents?.map((item, index) => {
//                             if (item?.type !== "video") return false;
//                             return (
//                                 <SuggestionVideoCard
//                                     key={index}
//                                     video={item?.video}
//                                 />
//                             );
//                         })}
//                     </div> */}
//                     {/* <div className="mt-4 ">
//                         <div className="text-white  text-lg font-semibold mb-2">Notes</div>
//                         <div className="bg-gray-800 w-full h-[30vw]  text-white px-4 py-2 rounded-lg  ">
//                             {notes || "No notes added yet."}
//                             <button className="w-1/2   border-[2px] border-orange-400 rounded-full  focus:outline-none focus:border-blue-500">
//                                 <textarea
//                                     className="w-full  ">
//                                     placeholder="Take notes..."
//                                     value={notes}
//                                     onChange={handleNoteChange}
//                                 </textarea>

//                             </button>

//                         </div>
//                         <div className="w-full h-[8vw] bg-gray-800 rounded-full ">
                            

//                         </div>
//                     </div>

//  */}

 
//  <Notes/>



//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default VideoDetails;
// import React, { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
// import ReactPlayer from "react-player/youtube";
// import { BsFillCheckCircleFill } from "react-icons/bs";
// import { Context } from "../contexts/contextApi";
// import Header from "./Header";
// import Notes from "./Notes";

const VideoDetails = () => {
    const [video, setVideo] = useState();
    const [relatedVideos, setRelatedVideos] = useState();
    const pass = "OjlaUkllTss";
    const [notes, setNotes] = useState("");
    const { id } = useParams();
    const { setLoading } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.add("custom-h");
        fetchVideoDetails();
        fetchRelatedVideos();
    }, [id]);

    const fetchVideoDetails = () => {
        setLoading(true);
        fetchDataFromAPI(`video/details/?id=${id}`).then((res) => {
            console.log(res);
            setVideo(res);
            setLoading(false);
        });
    };

    const fetchRelatedVideos = () => {
        setLoading(true);
        fetchDataFromAPI(`video/related-contents/?id=${id}`).then((res) => {
            console.log(res);
            setRelatedVideos(res);
            setLoading(false);
        });
    };

    const handleNoteChange = (event) => {
        setNotes(event.target.value);
    };
   
    return (
        <div>
            <Header/>
            <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
                <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
                    <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
                        <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${id}`}
                                controls
                                width="100%"
                                height="100%"
                                style={{ backgroundColor: "#000000" }}
                                playing={true}
                            />
                        </div>
                        <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
                            {video?.title}
                        </div>
                        <div className="flex justify-between flex-col md:flex-row mt-4">
                            <div className="flex">
                                <div className="flex items-start">
                                    <div className="flex h-11 w-11 rounded-full overflow-hidden">
                                        <img
                                            className="h-full w-full object-cover"
                                            src={video?.author?.avatar[0]?.url}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col ml-3">
                                    <div className="text-white text-md font-semibold flex items-center">
                                        {video?.author?.title}
                                        {video?.author?.badges[0]?.type ===
                                            "VERIFIED_CHANNEL" && (
                                                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                                            )}
                                    </div>
                                    <div className="text-white/[0.7] text-sm">
                                        {video?.author?.stats?.subscribersText}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
                        <Notes videoId={id} /> {/* Pass videoId to the Notes component */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoDetails;
