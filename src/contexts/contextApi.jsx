// import React, { createContext, useState, useEffect } from "react";
// import {fetchDataFromAPI} from '../utils/api';
// export const Context = createContext();

// export const AppContext = (props) => {
//     const [loading, setLoading] = useState(false);
//     const [searchResults, setSearchResults] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState("New");
//     const [mobileMenu, setMobileMenu] = useState(false);

//     useEffect(() => {
//         fetchSelectedCategoryData(selectedCategory);
//     }, [selectedCategory]);

//     const fetchSelectedCategoryData = (query) => {
//         setLoading(true);
//         fetchDataFromAPI(`search/?q=${query}`).then(({ contents }) => {
//             console.log(contents);
//             setSearchResults(contents);
//             setLoading(false);
//         });
//     };

//     return (
//         <Context.Provider
//             value={{
//                 loading,
//                 setLoading,
//                 searchResults,
//                 selectedCategory,
//                 setSelectedCategory,
//                 mobileMenu,
//                 setMobileMenu,
//             }}
//         >
//             {props.children}
//         </Context.Provider>
//     );
// };
//chat pt logic
import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromAPI } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);
    const [videoData, setVideoData] = useState(null); // Add videoData state

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromAPI(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        });
    };

    // Fetch video data by videoId
    const fetchVideoData = (videoId) => {
        fetchDataFromAPI(`video/${videoId}`).then((videoData) => {
            setVideoData(videoData);
        });
    };

    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                selectedCategory,
                setSelectedCategory,
                mobileMenu,
                setMobileMenu,
                videoData, // Include videoData in the context
                fetchVideoData, // Function to fetch video data
            }}
        >
            {props.children}
        
        </Context.Provider>
    );
};
