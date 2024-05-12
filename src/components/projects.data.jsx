import cpc from '../assets/projects/cpcplatform.png';
import enicarLearning from '../assets/projects/enicarLearning.png';
import donkeykong from '../assets/projects/donkeykong.png';
import streamVibe from '../assets/projects/streamvibe.png';
import cpc1 from '../assets/projects/cpc1.png';
import cpc2 from '../assets/projects/cpc2.png';
import cpc3 from '../assets/projects/cpc3.png';
import cpc4 from '../assets/projects/cpc4.png';
import cpc5 from '../assets/projects/cpc5.png';
import cpc6 from '../assets/projects/cpc6.png';
import enicarLearning1 from '../assets/projects/enicarlearning1.jpeg';
import enicarLearning2 from '../assets/projects/enicarlearning2.jpeg';
import enicarLearning3 from '../assets/projects/enicarlearning3.jpeg';
import enicarLearning4 from '../assets/projects/enicarlearning4.jpeg';
import donkeyKongVideo from '../assets/projects/donkeykong.mp4';
import mesaVerde from '../assets/projects/mesaverde.png';
import mesaVerde1 from '../assets/projects/mesaverde1.png';
import mesaVerde2 from '../assets/projects/mesaverde2.png';

import sketchBoard from '../assets/projects/sketchboard.png';
import sketchBoard1 from '../assets/projects/sketchboard1.png';
import rockPaperScissors from '../assets/projects/rps.png';
import rockPaperScissors1 from '../assets/projects/rps1.png';

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
                media : cpc1,
            },
            {   
                type : 'image',
                media : cpc2,
            },
            {
                type : 'image',
                media : cpc3,
            },
            {
                type : 'image',
                media : cpc4,
            },
            {
                type : 'image',
                media : cpc5,
            },
            {
                type : 'image',
                media : cpc6,
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
                type : 'video',
                media : "https://github.com/jebalirami7/Spring-Project/assets/138411253/13594200-b23d-4202-b7f2-14c11e5ccfc8",
            },
            {
                type : 'image',
                media : enicarLearning1,
            },
            {
                type : 'image',
                media : enicarLearning2,
            },
            {
                type : 'image',
                media : enicarLearning3,
            },
            {
                type : 'image',
                media : enicarLearning4,
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
                media : donkeyKongVideo,
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
        thumbnail : mesaVerde,
        carousel : [
            {
                type : 'image',
                media : mesaVerde,
            },
            {
                type : 'image',
                media : mesaVerde1,
            },
            {
                type : 'image',
                media : mesaVerde2,
            },
            {
                type : 'video',
                media: 'https://github.com/jebalirami7/mesa-verde-bank/assets/138411253/a5f08b26-c3e7-4254-b9a1-5207f44d318d'
            }

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
        thumbnail: sketchBoard,
        carousel : [
            {
                type : 'image',
                media : sketchBoard,
            }, 
            {
                type : 'image',
                media : sketchBoard1,
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
        thumbnail: rockPaperScissors,
        carousel : [
            {
                type : 'image',
                media : rockPaperScissors,
            },
            {
                type : 'image',
                media : rockPaperScissors1,
            }
        ],
        github : "https://github.com/YassineBenAbdelaziz/rock-paper-scissors",
        demo : "https://yassinebenabdelaziz.github.io/rock-paper-scissors/",
        blog : rockPaperScissorsBlog,
        isNotReady : false,
    }
];

export default projects ;