import cpc from '../assets/projects/cpcplatform.png';
import enicarLearning from '../assets/projects/enicarLearning.png';
import donkeykong from '../assets/projects/donkeykong.png';
import streamVibe from '../assets/projects/streamvibe.png';
import cpcPlatformBlog from './blogs/cpcPlatformBlog';



let projects =  [
    {
        id: 1,
        title: 'CPC Platform',
        description: 'A competitive programming platform for my club',
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
            }
        ],
        github : "https://github.com/YassineBenAbdelaziz/CPC-Platform",
        demo : undefined,
        blog : cpcPlatformBlog
    },
    {
        id: 2,
        title: 'Enicar Learning',
        description: 'Elearning platform for my school',
        thumbnail: enicarLearning,
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
    },
    {
        id: 4,
        title: 'StreamVibe',
        description: 'Movies and Tv Series Streaming website',
        thumbnail: streamVibe,
    },
];

export default projects ;