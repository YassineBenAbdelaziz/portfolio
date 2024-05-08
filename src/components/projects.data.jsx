import cpc from '../assets/projects/cpcplatform.png';
import enicarLearning from '../assets/projects/enicarLearning.png';
import donkeykong from '../assets/projects/donkeykong.png';
import streamVibe from '../assets/projects/streamvibe.png';
import cpcPlatformBlog from './blogs/cpcPlatformBlog';
import donkeyKongBlog from './blogs/donkeyKongBlog';
import mesaVerdeBlog from './blogs/mesaVerdeBlog';
import sketchBoardBlog from './blogs/sketchBoardBlog';
import rockPaperScissorsBlog from './blogs/rockPaperScissorsBlog';
import enicarLearningBlog from './blogs/enicarLearningBlog';
let projects =  [
    {
        id: 1,
        title: 'CPC Platform',
        description: 'A problem solving platform for CPC Enicarthage',
        thumbnail: cpc,
        carousel : [
            {
                type : 'image',
                media : cpc,
            },
            {
                type : 'image',
                media : '/src/assets/projects/cpc1.png',
            },
            {   
                type : 'image',
                media : '/src/assets/projects/cpc2.png',
            },
            {
                type : 'image',
                media : '/src/assets/projects/cpc3.png',
            },
            {
                type : 'image',
                media : '/src/assets/projects/cpc4.png',
            },
            {
                type : 'image',
                media : '/src/assets/projects/cpc5.png',
            },
            {
                type : 'image',
                media : '/src/assets/projects/cpc6.png',
            }

        ],
        github : "https://github.com/YassineBenAbdelaziz/CPC-Platform",
        demo : undefined,
        blog : cpcPlatformBlog,
        isNotReady : false,
    },
    {
        id: 2,
        title: 'Enicar Learning',
        description: 'Elearning platform for Enicarthage',
        thumbnail: enicarLearning,
        carousel : [
            {
                type : 'image',
                media : enicarLearning,
            },
            {
                type : 'image',
                media : '/src/assets/projects/enicarlearning1.jpeg',
            },
            {
                type : 'image',
                media : '/src/assets/projects/enicarlearning2.jpeg',
            },
            {
                type : 'image',
                media : '/src/assets/projects/enicarlearning3.jpeg',
            },
            {
                type : 'image',
                media : '/src/assets/projects/enicarlearning4.jpeg',
            },
        ],
        github: "https://github.com/jebalirami7/Spring-Project",
        demo : undefined ,
        blog : enicarLearningBlog,
        isNotReady : false,
    },
    {
        id: 3,
        title: 'Donkey Kong',
        description: '2D Donkey Kong built with Java',
        thumbnail: donkeykong,
        carousel : [
            {
                type : 'image',
                media : donkeykong,
            },
            {
                type : 'video',
                media : '/src/assets/projects/donkeykong.mp4',
            }
        ],
        github : "https://github.com/jebalirami7/Classic-Donkey-Kong",
        demo : undefined,
        blog : donkeyKongBlog,
        isNotReady : false,
    },
    {
        id: 4,
        title: 'StreamVibe',
        description: 'Movies and Tv Series Streaming website',
        thumbnail: streamVibe,
        carousel : [],
        github : undefined,
        demo : undefined,
        blog : undefined,
        isNotReady : true,
    },
    {
        id : 5 ,
        title : 'Mesa Verde Bank',
        description : 'Customer Complaint Management System',
        thumbnail : '/src/assets/projects/mesaverde.png',
        carousel : [
            {
                type : 'image',
                media : '/src/assets/projects/mesaverde.png',
            },
            {
                type : 'image',
                media : '/src/assets/projects/mesaverde1.png',
            },
            {
                type : 'image',
                media : '/src/assets/projects/mesaverde2.png',
            },
            {
                type : 'video',
                media : 'https://private-user-images.githubusercontent.com/138411253/306386952-a5f08b26-c3e7-4254-b9a1-5207f44d318d.webm?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUxOTI4NjYsIm5iZiI6MTcxNTE5MjU2NiwicGF0aCI6Ii8xMzg0MTEyNTMvMzA2Mzg2OTUyLWE1ZjA4YjI2LWMzZTctNDI1NC1iOWExLTUyMDdmNDRkMzE4ZC53ZWJtP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDUwOCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA1MDhUMTgyMjQ2WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ODFmY2IyYzBiNDlmMjVjZDFhZmZkODk1NDYxODdkZjgzNTU1YTFjMDk0MjRjNWVlYmQwYTQ2NDU4ZDMxNGQ5YiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.wHwFFGCulQ7ey-iT0NBZIkqZH0TX3Cf1RIYslvC_ZcM',
            },

        ],
        github : 'https://github.com/YassineBenAbdelaziz/mesa-verde-bank',
        demo : 'https://webproject-pied.vercel.app',
        blog : mesaVerdeBlog,
        isNotReady : false,
    },
    {
        id: 6,
        title: 'Sketch Board',
        description: 'A drawing application',
        thumbnail: '/src/assets/projects/sketchboard.png',
        carousel : [
            {
                type : 'image',
                media : '/src/assets/projects/sketchboard.png',
            }, 
            {
                type : 'image',
                media : '/src/assets/projects/sketchboard1.png',
            }
        ],
        github : "https://github.com/YassineBenAbdelaziz/sketch-board",
        demo : "https://yassinebenabdelaziz.github.io/sketch-board/",
        blog : sketchBoardBlog,
        isNotReady : false,
    },
    {
        id: 7,
        title: 'Rock Paper Scissors',
        description: 'Rock Paper Scissors game',
        thumbnail: '/src/assets/projects/rps.png',
        carousel : [
            {
                type : 'image',
                media : '/src/assets/projects/rps.png',
            },
            {
                type : 'image',
                media : '/src/assets/projects/rps1.png',
            }
        ],
        github : "https://github.com/YassineBenAbdelaziz/rock-paper-scissors",
        demo : "https://yassinebenabdelaziz.github.io/rock-paper-scissors/",
        blog : rockPaperScissorsBlog,
        isNotReady : false,
    }
];

export default projects ;