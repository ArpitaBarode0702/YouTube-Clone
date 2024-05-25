// import React, { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";

// import { fetchDataFromAPI } from "../utils/api";
// import { Context } from "../contexts/contextApi";
// import LeftNav from "./LeftNav";
// import SearchResultVideoCard from "./SearchResultVideoCard";
// import Notes from "./Notes";
// import Loggin from "./Loggin";

// const SearchResult = () => {
//     const [result, setResult] = useState();
//     const { searchQuery } = useParams();
//     const { setLoading } = useContext(Context);
//     const {clickVideoId,setClickVideoId}=useState(null);

//     useEffect(() => {
//         document.getElementById("root").classList.remove("custom-h");
//         fetchSearchResults();
//     }, [searchQuery]);

//     const fetchSearchResults = () => {
//         setLoading(true);
//         fetchDataFromAPI(`search/?q=${searchQuery}`).then((res) => {
//             console.log(res);
//             setResult(res?.contents);
//             setLoading(false);
//         });
//     };
//     const hndleVideoClick=(videoId)=>{
//         setClickVideoId(videoId);
//     };

//     return (
//         <div className="flex flex-row h-[calc(100%-56px)]">
//             <LeftNav />
//             <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
//                 <div className="grid grid-cols-1 gap-2 p-5">
//                     {result?.map((item) => {
//                         if (item?.type !== "video") return false;
//                         let video = item.video;
//                         return (
//                             <SearchResultVideoCard
//                                 key={video.videoId}
//                                 video={video}
//                                 onClick={()=> hndleVideoClick(video.videoId)}
//                             />
//                         );
//                     })}
//                 </div>
//             </div>
//          <Notes videoId={clickVideoId}/> 
//         </div>
//     );
// };

// export default SearchResult;
//chatgpt logic
// import React, { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
// import axios from 'axios';

// import { fetchDataFromAPI } from "../utils/api";
// import { Context } from "../contexts/contextApi";
// import LeftNav from "./LeftNav";
// import SearchResultVideoCard from "./SearchResultVideoCard";
// import Notes from "./Notes";
// import Loggin from "./Loggin";

// const SearchResult = () => {
//     const [result, setResult] = useState();
//     const { searchQuery } = useParams();
//     const { setLoading } = useContext(Context);
//     const [clickVideoId, setClickVideoId] = useState(null);
//     const [notes, setNotes] = useState("");

//     useEffect(() => {
//         document.getElementById("root").classList.remove("custom-h");
//         fetchSearchResults();
//     }, [searchQuery]);

//     const fetchSearchResults = () => {
//         setLoading(true);
//         fetchDataFromAPI(`search/?q=${searchQuery}`).then((res) => {
//             console.log(res);
//             setResult(res?.contents);
//             setLoading(false);
//         });
//     };

//     const handleVideoClick = (videoId) => {
//         setClickVideoId(videoId);
//     };

//     const handleNotesSubmit = async () => {
//         try {
//             await axios.post('/api/notes', { videoId: clickVideoId, notes });
//             console.log('Notes saved successfully');
//         } catch (error) {
//             console.error('Error saving notes:', error);
//         }
//     };

//     return (
//         <div className="flex flex-row h-[calc(100%-56px)]">
//             <LeftNav />
//             <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
//                 <div className="grid grid-cols-1 gap-2 p-5">
//                     {result?.map((item) => {
//                         if (item?.type !== "video") return false;
//                         let video = item.video;
//                         return (
//                             <SearchResultVideoCard
//                                 key={video.videoId}
//                                 video={video}
//                                 onClick={() => handleVideoClick(video.videoId)}
//                             />
//                         );
//                     })}
//                 </div>
//             </div>
//             <Notes videoId={clickVideoId} onChange={(e) => setNotes(e.target.value)} onSubmit={handleNotesSubmit} />
//         </div>
//     );
// };

//  export default SearchResult;
//ye bhi chatgpt ka logic
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import { fetchDataFromAPI } from "../utils/api";
import { Context } from "../contexts/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";
import Notes from "./Notes";
import Loggin from "./Loggin";

const SearchResult = () => {
    const [result, setResult] = useState();
    const { searchQuery } = useParams();
    const { setLoading } = useContext(Context);
    const [clickVideoId, setClickVideoId] = useState(null);
    const [notes, setNotes] = useState("");

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
        fetchSearchResults();
    }, [searchQuery]);

    const fetchSearchResults = () => {
        setLoading(true);
        fetchDataFromAPI(`search/?q=${searchQuery}`).then((res) => {
            console.log(res);
            setResult(res?.contents);
            setLoading(false);
        });
    };

    const handleVideoClick = (videoId) => {
        console.log("Video ID clicked:", videoId); // Log the clicked video ID
        setClickVideoId(videoId);
    };

    const handleNotesSubmit = async () => {
        try {
            console.log("Submitting notes for video ID:", clickVideoId); // Log the video ID before submitting notes
            await axios.post('/api/notes', { videoId: clickVideoId, notes });
            console.log('Notes saved successfully');
        } catch (error) {
            console.error('Error saving notes:', error);
        }
    };
    return (
        <div className="flex flex-row h-[calc(100%-56px)]">
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 gap-2 p-5">
                    {result?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <SearchResultVideoCard
                                key={video.videoId}
                                video={video}
                                onClick={() => handleVideoClick(video.videoId)}
                            />
                        );
                    })}
                </div>
            </div>
            <Notes videoId={clickVideoId} onChange={(e) => setNotes(e.target.value)} onSubmit={handleNotesSubmit} />
        </div>
    );
};

export default SearchResult;

