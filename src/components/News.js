import React, { useEffect, useState } from 'react';
import Spinner from "./Spinner.js";
import InfiniteScroll from 'react-infinite-scroll-component';
// import $ from "jquery";

// Component,
import Newsitem from './Newsitem'

// export default class News extends Component {
//     article = [
//         {
//             "source": {
//                 "id": null,
//                 "name": "YouTube"
//             },
//             "author": null,
//             "title": "US releases footage of Russian fighter jets 'harassing' US drones over Syria - Guardian News",
//             "description": null,
//             "url": "https://www.youtube.com/watch?v=crOogdUHNsY",
//             "urlToImage": null,
//             "publishedAt": "2023-07-06T05:06:15Z",
//             "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
//         },
//         {
//             "source": {
//                 "id": "the-washington-post",
//                 "name": "The Washington Post"
//             },
//             "author": "Andrew deGrandpre",
//             "title": "U.S. Navy says it foiled Iran's attempt to seize oil tankers - The Washington Post",
//             "description": "The U.S. Navy said that it thwarted efforts by Iran to commandeer two commercial oil tankers off Oman, and that one attempted seizure involved intense gunfire.",
//             "url": "https://www.washingtonpost.com/national-security/2023/07/05/us-navy-iran-video-tankers/",
//             "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EHPYEXDPRGBEUSFB3NKFVAIUMU.JPG&w=1440",
//             "publishedAt": "2023-07-06T04:20:25Z",
//             "content": "Comment on this story\r\nComment\r\nThe U.S. Navy said Wednesday that it had thwarted efforts by Irans military to commandeer two commercial oil tankers off Oman, and that one of the attempted seizures i… [+2112 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "The Athletic"
//             },
//             "author": "Jared Weiss",
//             "title": "Exclusive: Grant Williams talks Dallas Mavs trade, leaving Boston Celtics behind - The Athletic",
//             "description": "Grant Williams spoke to The Atheltic shortly after joining the Dallas Mavericks in a sign-and-trade Wednesday.",
//             "url": "https://theathletic.com/4669565/2023/07/06/grant-williams-dallas-mavs-trade-boston-celtics/",
//             "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/07/05234755/GettyImages-1487412829-scaled.jpg",
//             "publishedAt": "2023-07-06T04:18:00Z",
//             "content": "Grant Williams has packed up his apartment before. He had a small apartment in Boston when he was first drafted, then saved up enough money to move into a nicer spot.\r\nBut this time was different. He… [+7375 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "BuzzFeed News"
//             },
//             "author": "Leyla Mohammed",
//             "title": "Kim Kardashian Admitted She Felt “Guilty” For Publicly Supporting The Jewish Community After Kanye West’s Antisemitism Because She Didn’t Want To Be Part Of His “Downfall” - BuzzFeed News",
//             "description": "“I feel guilty that I posted something in support of the Jewish community, and then people dropped him today. I’m like, is that my fault?”",
//             "url": "https://www.buzzfeednews.com/article/leylamohammed/kim-kardashian-tears-kanye-west-antisemitism-guilty-downfall",
//             "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2023-07/5/16/enhanced/b47d2e155ee4/original-857-1688573079-4.jpg?crop=1243:651;7,7%26downsize=1250:*",
//             "publishedAt": "2023-07-06T04:16:03Z",
//             "content": null
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "BBC News"
//             },
//             "author": "https://www.facebook.com/bbcnews",
//             "title": "Threads: Instagram launches app to rival Twitter - BBC",
//             "description": "Mark Zuckerberg is hoping his Instagram-linked app will beat Twitter on numbers.",
//             "url": "https://www.bbc.com/news/technology-66112648",
//             "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/181FA/production/_130301889_2.flowscreens-english.png",
//             "publishedAt": "2023-07-06T04:09:55Z",
//             "content": "Meta chief Mark Zuckerberg has said that the company's newly-launched Threads app aims to outrival Twitter.\r\nExperts say Threads could attract Twitter users unhappy with recent changes to the platfor… [+4737 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Fox Business"
//             },
//             "author": "Sarah Rumpf-Whitten",
//             "title": "Winning numbers released for $546 M Powerball jackpot - Fox Business",
//             "description": "Powerball lottery jackpot winning numbers were drawn Wednesday night and it has a jackpot of $546 million with a cash option of $282 million.",
//             "url": "https://www.foxbusiness.com/markets/winning-numbers-released-546-m-powerball-jackpot",
//             "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/01/0/0/Powerball-Tix.jpg?ve=1&tl=1",
//             "publishedAt": "2023-07-06T04:08:58Z",
//             "content": "The numbers are in for the Wednesday, July 5, Powerball lottery jackpot worth an estimated $546 million, with a cash option of $282.0 million.\r\nThe winning numbers, drawn Wednesday, July 5, were 17, … [+1980 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "KOB"
//             },
//             "author": "Christina Rodriguez",
//             "title": "4 Investigates: Oriental Health Spa in Albuquerque - KOB.com - KOB 4",
//             "description": "Four years ago, 4 Investigates exposed a dark secret going on behind the doors of some local massage businesses.",
//             "url": "https://www.kob.com/new-mexico/4-investigates-oriental-health-spa-in-albuquerque/",
//             "urlToImage": "https://www.kob.com/wp-content/uploads/akta/588B7373EF0E663B34D974D6C8B103D4.jpg",
//             "publishedAt": "2023-07-06T04:06:06Z",
//             "content": "Four years ago, 4 Investigates exposed a dark secret going on behind the doors of some local massage businesses. \r\nOur cameras captured workers offering sexual favors, and they witnessed signs of hum… [+6081 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "WDIV ClickOnDetroit"
//             },
//             "author": "Brandon Carr, Mara MacDonald",
//             "title": "What officials said about discovering body of Wynter Cole Smith in Detroit days after Amber Alert - WDIV ClickOnDetroit",
//             "description": "The body of missing 2-year-old girl Wynter Cole Smith was found in an overgrown alley nearly three days after she was kidnapped in Lansing.",
//             "url": "https://www.clickondetroit.com/news/local/2023/07/06/what-officials-said-about-discovering-body-of-wynter-cole-smith-in-detroit-days-after-amber-alert/",
//             "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc-cf/07-06-2023/t_97c68ce6ed4143b3ac8b1f29a7316d40_name_image.jpg?_a=ATAPphC0",
//             "publishedAt": "2023-07-06T03:50:01Z",
//             "content": "DETROIT The body of missing 2-year-old girl Wynter Cole Smith was found in an overgrown alley nearly three days after she was kidnapped in Lansing.\r\nOfficials discovered the body of the 2-year-old We… [+2614 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "KTLA Los Angeles"
//             },
//             "author": "ZEN SOO, Associated Press",
//             "title": "Coco Lee, Hong Kong singer and songwriter who had international success, dies at 48 - KTLA Los Angeles",
//             "description": "HONG KONG (AP) — Coco Lee, a Hong Kong-born singer and songwriter who had a highly successful career in Asia, has died by suicide, her siblings said Wednesday. She was 48. The star had been suffering from depression for several years, Lee’s elder sisters Caro…",
//             "url": "https://ktla.com/entertainment/ap-hong-kong-born-singer-coco-lee-dies-by-suicide-at-age-48-her-siblings-say/",
//             "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2023/07/64a630d2b13db2.76594509.jpeg?w=1280",
//             "publishedAt": "2023-07-06T03:05:36Z",
//             "content": "HONG KONG (AP) Coco Lee, a Hong Kong-born singer and songwriter who had a highly successful career in Asia, has died by suicide, her siblings said Wednesday. She was 48. \r\nThe star had been suffering… [+3198 chars]"
//         },
//         {
//             "source": {
//                 "id": "usa-today",
//                 "name": "USA Today"
//             },
//             "author": "Jim Reineking",
//             "title": "Miami Marlins get wild walk-off win after ugly throwing error by St. Louis Cardinals - USA TODAY",
//             "description": "The St. Louis Cardinals, already enduring a disappointing season, hit a new low Wednesday night, allowing the Marlins to rally for the walk-off win.",
//             "url": "https://www.usatoday.com/story/sports/mlb/2023/07/05/marlins-walk-off-win-cardinals-jordan-hicks-error/70386069007/",
//             "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/07/06/USAT/97d66918-213f-4b89-b686-4961056f5a4a-USATSI_20997354.jpg?crop=4857,2732,x0,y340&width=3200&height=1800&format=pjpg&auto=webp",
//             "publishedAt": "2023-07-06T03:05:02Z",
//             "content": "The St. Louis Cardinals are having a dreadfully disappointing season, sitting in last place in the mediocre NL Central.\r\nOn Wednesday night, the Cardinals hit a new low, pulling off a particularly ug… [+1551 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "KTRK-TV"
//             },
//             "author": null,
//             "title": "Houston missing man found: Rudolph 'Rudy' Farias reportedly told Quanell X his mother has been drugging and sexually abusing him - KTRK-TV",
//             "description": "The man who was reported missing in 2015 and was mysteriously 'found' this week now tells activist Quanell X he's been sexually abused and drugged by his mother for years.",
//             "url": "https://abc13.com/rudy-farias-found-missing-houston-man-mother-reported-son-alive/13464551/",
//             "urlToImage": "https://cdn.abcotvs.com/dip/images/13465461_070523-ktrk-6pm-BTA-rudy-farias-update-desi-WED-vid.jpg?w=1600",
//             "publishedAt": "2023-07-06T01:34:51Z",
//             "content": "HOUSTON, Texas (KTRK) -- Investigators with HPD's Missing Persons Unit interviewed Rudy Farias and his mother nearly a week after he was found outside an area church, and now, shocking new allegation… [+6033 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Awful Announcing"
//             },
//             "author": "Brandon Contes",
//             "title": "ESPN announcer made Supreme Court joke during Joey Chestnut’s dominant hot dog-eating performance - Awful Announcing",
//             "description": "There are only so many ways to give play-by-play of a person eating 62 hot dogs, which means ESPN announcers have to get creative.",
//             "url": "https://awfulannouncing.com/espn/supreme-court-joke-joey-chestnut-dominant-hot-dog-eating-performance.html",
//             "urlToImage": "https://cdn1.thecomeback.com/wp-content/uploads/sites/94/2023/07/Screen-Shot-2023-07-05-at-5.17.07-PM-scaled-e1688592378700.jpg",
//             "publishedAt": "2023-07-06T01:01:42Z",
//             "content": "There are only so many ways to give a play-by-play of a person eating 62 hot dogs in ten minutes, which means ESPN announcers have to get creative during the Nathans Hot Dog Eating Contest.\r\nTuesday … [+1702 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "YouTube"
//             },
//             "author": null,
//             "title": "Street Fighter 6 - Official Rashid Gameplay Trailer - IGN",
//             "description": "The latest gameplay trailer for Street Fighter 6 puts a spotlight on Rashid. Check it out to see the character in action! Rashid will be unlocked for Year 1 ...",
//             "url": "https://www.youtube.com/watch?v=YS4nqgV70UQ",
//             "urlToImage": "https://i.ytimg.com/vi/YS4nqgV70UQ/maxresdefault.jpg",
//             "publishedAt": "2023-07-05T23:55:59Z",
//             "content": null
//         },
//         {
//             "source": {
//                 "id": "bbc-news",
//                 "name": "BBC News"
//             },
//             "author": "https://www.facebook.com/bbcnews",
//             "title": "South Africa: Suspected gas leak leaves 16 dead - BBC",
//             "description": "The leak in a shanty town near Johannesburg is linked to illegal gold mining in the area.",
//             "url": "https://www.bbc.co.uk/news/world-africa-66115917",
//             "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5B7C/production/_130302432_860668415013e1db413371e836463028b28cfd8e-1.jpg",
//             "publishedAt": "2023-07-05T23:51:52Z",
//             "content": "A suspected nitrate oxide gas leak in South Africa has led to the deaths of 16 people, local officials say.\r\nThe victims - including women and children - died from gas inhalation at an informal settl… [+1183 chars]"
//         },
//         {
//             "source": {
//                 "id": "reuters",
//                 "name": "Reuters"
//             },
//             "author": null,
//             "title": "Philadelphia mass shooting suspect posted 'disturbing messages' - Reuters",
//             "description": "A Philadelphia gunman charged with killing five people over the Fourth of July weekend left \"disturbing messages\" on social media before carrying out one of several U.S. mass shootings that marred the holiday break, authorities said on Wednesday.",
//             "url": "https://www.reuters.com/world/us/suspect-philadelphia-mass-shooting-arraigned-five-murder-charges-cbs-news-2023-07-05/",
//             "urlToImage": "https://www.reuters.com/resizer/4aaS6lLJGd86qnkkr4muZHUrEoE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/H3VKJUXLT5JSTIBM5VMQZZK3YI.jpg",
//             "publishedAt": "2023-07-05T23:45:00Z",
//             "content": "July 5 (Reuters) - A Philadelphia gunman charged with killing five people over the Fourth of July weekend left \"disturbing messages\" on social media before carrying out one of several U.S. mass shoot… [+4887 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "CBS Sports"
//             },
//             "author": "",
//             "title": "Mike Trout injury: Angels star undergoes surgery for wrist fracture, expected to be out four to eight weeks - CBS Sports",
//             "description": "Trout departed after fouling off a pitch in the eighth inning",
//             "url": "https://www.cbssports.com/mlb/news/mike-trout-injury-angels-star-undergoes-surgery-for-wrist-fracture-expected-to-be-out-four-to-eight-weeks/",
//             "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/07/04/0703cca7-bc4c-4200-8cb1-a4d86de25f19/thumbnail/1200x675/d5dcbde61f8f8ac22503e45e3e6271dc/trout-injury-usatsi.png",
//             "publishedAt": "2023-07-05T23:40:00Z",
//             "content": "Los Angeles Angels outfielder Mike Trout suffered a fracture of the hamate bone in his left hand during Monday's game against the San Diego Padres (SD 10, LA 3), the Angels announced. Trout suffered … [+1459 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "CNET"
//             },
//             "author": null,
//             "title": "Samsung's Next Foldable Phones Are Coming on July 26 - CNET",
//             "description": "The company usually announces new foldable phones and smartwatches during its summer Unpacked event.",
//             "url": "https://www.cnet.com/tech/mobile/samsungs-next-foldable-phones-are-coming-on-july-26/",
//             "urlToImage": "https://www.cnet.com/a/img/resize/13ca13db428c925645be3cfe8b42a3dbb9e7ead3/hub/2023/07/05/505ee38b-a7e5-4d86-9d69-b19bb562e67a/unknown-2.jpg?auto=webp&fit=crop&height=675&width=1200",
//             "publishedAt": "2023-07-05T23:00:00Z",
//             "content": "Fans of Samsung's Galaxy Z Flip and Galaxy Z Fold devices will likely have something new to look forward to later this month. Samsung announced on Wednesday that its next Unpacked event will take pla… [+2820 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "PBS"
//             },
//             "author": null,
//             "title": "Wisconsin’s Democratic governor guts Republican tax cut, increases school funding for 400 years - PBS NewsHour",
//             "description": "Evers angered Republicans in the ways he used partial vetoes, with some saying Wednesday that the Democratic governor was going back on deals he had made with them.",
//             "url": "https://www.pbs.org/newshour/politics/wisconsins-democratic-governor-guts-republican-tax-cut-increases-school-funding-for-400-years",
//             "urlToImage": "https://d3i6fh83elv35t.cloudfront.net/static/2021/12/2021-03-31T203417Z_1086300411_RC2KMM9TCCAQ_RTRMADP_3_HEALTH-CORONAVIRUS-USA-WISCONSIN-1024x683.jpg",
//             "publishedAt": "2023-07-05T22:55:28Z",
//             "content": "MADISON, Wis. (AP) Wisconsin Gov. Tony Evers signed off on a two-year spending plan Wednesday after gutting a Republican tax cut and using his broad veto powers to increase school funding for centuri… [+5218 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "PBS"
//             },
//             "author": null,
//             "title": "News Wrap: Ukraine claims Russia will sabotage nuclear plant - PBS NewsHour",
//             "description": "In our news wrap Wednesday, fears about the fate of a Ukrainian nuclear plant under Russian control escalated with each side claiming the other plans to sabotage the site, four countries went to the International Court of Justice over Iran's downing of a Ukra…",
//             "url": "https://www.pbs.org/newshour/show/news-wrap-ukraine-claims-russia-plans-to-sabotage-zaporizhzhia-nuclear-plant",
//             "urlToImage": "https://d3i6fh83elv35t.cloudfront.net/static/2023/07/newswrap-4-1024x683.jpg",
//             "publishedAt": "2023-07-05T22:50:00Z",
//             "content": "Amna Nawaz:\r\nU.N. experts based in Zaporizhzhia reported no signs of explosives, but they said they'd need greater access to the plant to be certain.\r\nFour countries went to the International Court o… [+1299 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Space.com"
//             },
//             "author": "Josh Dinner",
//             "title": "Farewell, Ariane 5! Europe's workhorse rocket launches 2 satellites on final mission - Space.com",
//             "description": "After 27 years of service, Europe's venerable heavy lifter has rocketed into retirement.",
//             "url": "https://www.space.com/ariane-5-rocket-final-launch-success",
//             "urlToImage": "https://cdn.mos.cms.futurecdn.net/UXt9qBsQiwwgAcjbiS3piB-1200-80.jpg",
//             "publishedAt": "2023-07-05T22:41:41Z",
//             "content": "Europe's workhorse rocket has flown for the final time.\r\nThe powerful Ariane 5 launched today (July 5) on the last-ever mission of its storied career, which began way back in 1996 and now includes 11… [+5153 chars]"
//         }
//     ]

//     constructor() {
//         super();
//         console.log("this is constructor");
//         this.state = {
//             article: this.article,
//             loading: false
//         }
//     }

//     render() {
//         return (
//             <div className='container my-3'>
//                 <h2>News App</h2>
//                 <div className='row'>
//                     {this.state.article.map((element) => {
//                         var title = element.title.slice(0, 40);
//                         return <div className='col-md-4' key={element.url}>
//                             <Newsitem title={title} description={element.description} imageUrl={element.urlToImage} news_Url={element.url} />
//                         </div>
//                     })}

//                 </div>
//             </div>
//         )
//     }
// }



export default function News(props) {
    // var article = [
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "YouTube"
    //         },
    //         "author": null,
    //         "title": "US releases footage of Russian fighter jets 'harassing' US drones over Syria - Guardian News",
    //         "description": null,
    //         "url": "https://www.youtube.com/watch?v=crOogdUHNsY",
    //         "urlToImage": null,
    //         "publishedAt": "2023-07-06T05:06:15Z",
    //         "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    //     },
    //     {
    //         "source": {
    //             "id": "the-washington-post",
    //             "name": "The Washington Post"
    //         },
    //         "author": "Andrew deGrandpre",
    //         "title": "U.S. Navy says it foiled Iran's attempt to seize oil tankers - The Washington Post",
    //         "description": "The U.S. Navy said that it thwarted efforts by Iran to commandeer two commercial oil tankers off Oman, and that one attempted seizure involved intense gunfire.",
    //         "url": "https://www.washingtonpost.com/national-security/2023/07/05/us-navy-iran-video-tankers/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EHPYEXDPRGBEUSFB3NKFVAIUMU.JPG&w=1440",
    //         "publishedAt": "2023-07-06T04:20:25Z",
    //         "content": "Comment on this story\r\nComment\r\nThe U.S. Navy said Wednesday that it had thwarted efforts by Irans military to commandeer two commercial oil tankers off Oman, and that one of the attempted seizures i… [+2112 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Athletic"
    //         },
    //         "author": "Jared Weiss",
    //         "title": "Exclusive: Grant Williams talks Dallas Mavs trade, leaving Boston Celtics behind - The Athletic",
    //         "description": "Grant Williams spoke to The Atheltic shortly after joining the Dallas Mavericks in a sign-and-trade Wednesday.",
    //         "url": "https://theathletic.com/4669565/2023/07/06/grant-williams-dallas-mavs-trade-boston-celtics/",
    //         "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/07/05234755/GettyImages-1487412829-scaled.jpg",
    //         "publishedAt": "2023-07-06T04:18:00Z",
    //         "content": "Grant Williams has packed up his apartment before. He had a small apartment in Boston when he was first drafted, then saved up enough money to move into a nicer spot.\r\nBut this time was different. He… [+7375 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BuzzFeed News"
    //         },
    //         "author": "Leyla Mohammed",
    //         "title": "Kim Kardashian Admitted She Felt “Guilty” For Publicly Supporting The Jewish Community After Kanye West’s Antisemitism Because She Didn’t Want To Be Part Of His “Downfall” - BuzzFeed News",
    //         "description": "“I feel guilty that I posted something in support of the Jewish community, and then people dropped him today. I’m like, is that my fault?”",
    //         "url": "https://www.buzzfeednews.com/article/leylamohammed/kim-kardashian-tears-kanye-west-antisemitism-guilty-downfall",
    //         "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2023-07/5/16/enhanced/b47d2e155ee4/original-857-1688573079-4.jpg?crop=1243:651;7,7%26downsize=1250:*",
    //         "publishedAt": "2023-07-06T04:16:03Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BBC News"
    //         },
    //         "author": "https://www.facebook.com/bbcnews",
    //         "title": "Threads: Instagram launches app to rival Twitter - BBC",
    //         "description": "Mark Zuckerberg is hoping his Instagram-linked app will beat Twitter on numbers.",
    //         "url": "https://www.bbc.com/news/technology-66112648",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/181FA/production/_130301889_2.flowscreens-english.png",
    //         "publishedAt": "2023-07-06T04:09:55Z",
    //         "content": "Meta chief Mark Zuckerberg has said that the company's newly-launched Threads app aims to outrival Twitter.\r\nExperts say Threads could attract Twitter users unhappy with recent changes to the platfor… [+4737 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Fox Business"
    //         },
    //         "author": "Sarah Rumpf-Whitten",
    //         "title": "Winning numbers released for $546 M Powerball jackpot - Fox Business",
    //         "description": "Powerball lottery jackpot winning numbers were drawn Wednesday night and it has a jackpot of $546 million with a cash option of $282 million.",
    //         "url": "https://www.foxbusiness.com/markets/winning-numbers-released-546-m-powerball-jackpot",
    //         "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/01/0/0/Powerball-Tix.jpg?ve=1&tl=1",
    //         "publishedAt": "2023-07-06T04:08:58Z",
    //         "content": "The numbers are in for the Wednesday, July 5, Powerball lottery jackpot worth an estimated $546 million, with a cash option of $282.0 million.\r\nThe winning numbers, drawn Wednesday, July 5, were 17, … [+1980 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "KOB"
    //         },
    //         "author": "Christina Rodriguez",
    //         "title": "4 Investigates: Oriental Health Spa in Albuquerque - KOB.com - KOB 4",
    //         "description": "Four years ago, 4 Investigates exposed a dark secret going on behind the doors of some local massage businesses.",
    //         "url": "https://www.kob.com/new-mexico/4-investigates-oriental-health-spa-in-albuquerque/",
    //         "urlToImage": "https://www.kob.com/wp-content/uploads/akta/588B7373EF0E663B34D974D6C8B103D4.jpg",
    //         "publishedAt": "2023-07-06T04:06:06Z",
    //         "content": "Four years ago, 4 Investigates exposed a dark secret going on behind the doors of some local massage businesses. \r\nOur cameras captured workers offering sexual favors, and they witnessed signs of hum… [+6081 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "WDIV ClickOnDetroit"
    //         },
    //         "author": "Brandon Carr, Mara MacDonald",
    //         "title": "What officials said about discovering body of Wynter Cole Smith in Detroit days after Amber Alert - WDIV ClickOnDetroit",
    //         "description": "The body of missing 2-year-old girl Wynter Cole Smith was found in an overgrown alley nearly three days after she was kidnapped in Lansing.",
    //         "url": "https://www.clickondetroit.com/news/local/2023/07/06/what-officials-said-about-discovering-body-of-wynter-cole-smith-in-detroit-days-after-amber-alert/",
    //         "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc-cf/07-06-2023/t_97c68ce6ed4143b3ac8b1f29a7316d40_name_image.jpg?_a=ATAPphC0",
    //         "publishedAt": "2023-07-06T03:50:01Z",
    //         "content": "DETROIT The body of missing 2-year-old girl Wynter Cole Smith was found in an overgrown alley nearly three days after she was kidnapped in Lansing.\r\nOfficials discovered the body of the 2-year-old We… [+2614 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "KTLA Los Angeles"
    //         },
    //         "author": "ZEN SOO, Associated Press",
    //         "title": "Coco Lee, Hong Kong singer and songwriter who had international success, dies at 48 - KTLA Los Angeles",
    //         "description": "HONG KONG (AP) — Coco Lee, a Hong Kong-born singer and songwriter who had a highly successful career in Asia, has died by suicide, her siblings said Wednesday. She was 48. The star had been suffering from depression for several years, Lee’s elder sisters Caro…",
    //         "url": "https://ktla.com/entertainment/ap-hong-kong-born-singer-coco-lee-dies-by-suicide-at-age-48-her-siblings-say/",
    //         "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2023/07/64a630d2b13db2.76594509.jpeg?w=1280",
    //         "publishedAt": "2023-07-06T03:05:36Z",
    //         "content": "HONG KONG (AP) Coco Lee, a Hong Kong-born singer and songwriter who had a highly successful career in Asia, has died by suicide, her siblings said Wednesday. She was 48. \r\nThe star had been suffering… [+3198 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "usa-today",
    //             "name": "USA Today"
    //         },
    //         "author": "Jim Reineking",
    //         "title": "Miami Marlins get wild walk-off win after ugly throwing error by St. Louis Cardinals - USA TODAY",
    //         "description": "The St. Louis Cardinals, already enduring a disappointing season, hit a new low Wednesday night, allowing the Marlins to rally for the walk-off win.",
    //         "url": "https://www.usatoday.com/story/sports/mlb/2023/07/05/marlins-walk-off-win-cardinals-jordan-hicks-error/70386069007/",
    //         "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/07/06/USAT/97d66918-213f-4b89-b686-4961056f5a4a-USATSI_20997354.jpg?crop=4857,2732,x0,y340&width=3200&height=1800&format=pjpg&auto=webp",
    //         "publishedAt": "2023-07-06T03:05:02Z",
    //         "content": "The St. Louis Cardinals are having a dreadfully disappointing season, sitting in last place in the mediocre NL Central.\r\nOn Wednesday night, the Cardinals hit a new low, pulling off a particularly ug… [+1551 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "KTRK-TV"
    //         },
    //         "author": null,
    //         "title": "Houston missing man found: Rudolph 'Rudy' Farias reportedly told Quanell X his mother has been drugging and sexually abusing him - KTRK-TV",
    //         "description": "The man who was reported missing in 2015 and was mysteriously 'found' this week now tells activist Quanell X he's been sexually abused and drugged by his mother for years.",
    //         "url": "https://abc13.com/rudy-farias-found-missing-houston-man-mother-reported-son-alive/13464551/",
    //         "urlToImage": "https://cdn.abcotvs.com/dip/images/13465461_070523-ktrk-6pm-BTA-rudy-farias-update-desi-WED-vid.jpg?w=1600",
    //         "publishedAt": "2023-07-06T01:34:51Z",
    //         "content": "HOUSTON, Texas (KTRK) -- Investigators with HPD's Missing Persons Unit interviewed Rudy Farias and his mother nearly a week after he was found outside an area church, and now, shocking new allegation… [+6033 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Awful Announcing"
    //         },
    //         "author": "Brandon Contes",
    //         "title": "ESPN announcer made Supreme Court joke during Joey Chestnut’s dominant hot dog-eating performance - Awful Announcing",
    //         "description": "There are only so many ways to give play-by-play of a person eating 62 hot dogs, which means ESPN announcers have to get creative.",
    //         "url": "https://awfulannouncing.com/espn/supreme-court-joke-joey-chestnut-dominant-hot-dog-eating-performance.html",
    //         "urlToImage": "https://cdn1.thecomeback.com/wp-content/uploads/sites/94/2023/07/Screen-Shot-2023-07-05-at-5.17.07-PM-scaled-e1688592378700.jpg",
    //         "publishedAt": "2023-07-06T01:01:42Z",
    //         "content": "There are only so many ways to give a play-by-play of a person eating 62 hot dogs in ten minutes, which means ESPN announcers have to get creative during the Nathans Hot Dog Eating Contest.\r\nTuesday … [+1702 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "YouTube"
    //         },
    //         "author": null,
    //         "title": "Street Fighter 6 - Official Rashid Gameplay Trailer - IGN",
    //         "description": "The latest gameplay trailer for Street Fighter 6 puts a spotlight on Rashid. Check it out to see the character in action! Rashid will be unlocked for Year 1 ...",
    //         "url": "https://www.youtube.com/watch?v=YS4nqgV70UQ",
    //         "urlToImage": "https://i.ytimg.com/vi/YS4nqgV70UQ/maxresdefault.jpg",
    //         "publishedAt": "2023-07-05T23:55:59Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "https://www.facebook.com/bbcnews",
    //         "title": "South Africa: Suspected gas leak leaves 16 dead - BBC",
    //         "description": "The leak in a shanty town near Johannesburg is linked to illegal gold mining in the area.",
    //         "url": "https://www.bbc.co.uk/news/world-africa-66115917",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5B7C/production/_130302432_860668415013e1db413371e836463028b28cfd8e-1.jpg",
    //         "publishedAt": "2023-07-05T23:51:52Z",
    //         "content": "A suspected nitrate oxide gas leak in South Africa has led to the deaths of 16 people, local officials say.\r\nThe victims - including women and children - died from gas inhalation at an informal settl… [+1183 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "Philadelphia mass shooting suspect posted 'disturbing messages' - Reuters",
    //         "description": "A Philadelphia gunman charged with killing five people over the Fourth of July weekend left \"disturbing messages\" on social media before carrying out one of several U.S. mass shootings that marred the holiday break, authorities said on Wednesday.",
    //         "url": "https://www.reuters.com/world/us/suspect-philadelphia-mass-shooting-arraigned-five-murder-charges-cbs-news-2023-07-05/",
    //         "urlToImage": "https://www.reuters.com/resizer/4aaS6lLJGd86qnkkr4muZHUrEoE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/H3VKJUXLT5JSTIBM5VMQZZK3YI.jpg",
    //         "publishedAt": "2023-07-05T23:45:00Z",
    //         "content": "July 5 (Reuters) - A Philadelphia gunman charged with killing five people over the Fourth of July weekend left \"disturbing messages\" on social media before carrying out one of several U.S. mass shoot… [+4887 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CBS Sports"
    //         },
    //         "author": "",
    //         "title": "Mike Trout injury: Angels star undergoes surgery for wrist fracture, expected to be out four to eight weeks - CBS Sports",
    //         "description": "Trout departed after fouling off a pitch in the eighth inning",
    //         "url": "https://www.cbssports.com/mlb/news/mike-trout-injury-angels-star-undergoes-surgery-for-wrist-fracture-expected-to-be-out-four-to-eight-weeks/",
    //         "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/07/04/0703cca7-bc4c-4200-8cb1-a4d86de25f19/thumbnail/1200x675/d5dcbde61f8f8ac22503e45e3e6271dc/trout-injury-usatsi.png",
    //         "publishedAt": "2023-07-05T23:40:00Z",
    //         "content": "Los Angeles Angels outfielder Mike Trout suffered a fracture of the hamate bone in his left hand during Monday's game against the San Diego Padres (SD 10, LA 3), the Angels announced. Trout suffered … [+1459 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CNET"
    //         },
    //         "author": null,
    //         "title": "Samsung's Next Foldable Phones Are Coming on July 26 - CNET",
    //         "description": "The company usually announces new foldable phones and smartwatches during its summer Unpacked event.",
    //         "url": "https://www.cnet.com/tech/mobile/samsungs-next-foldable-phones-are-coming-on-july-26/",
    //         "urlToImage": "https://www.cnet.com/a/img/resize/13ca13db428c925645be3cfe8b42a3dbb9e7ead3/hub/2023/07/05/505ee38b-a7e5-4d86-9d69-b19bb562e67a/unknown-2.jpg?auto=webp&fit=crop&height=675&width=1200",
    //         "publishedAt": "2023-07-05T23:00:00Z",
    //         "content": "Fans of Samsung's Galaxy Z Flip and Galaxy Z Fold devices will likely have something new to look forward to later this month. Samsung announced on Wednesday that its next Unpacked event will take pla… [+2820 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "PBS"
    //         },
    //         "author": null,
    //         "title": "Wisconsin’s Democratic governor guts Republican tax cut, increases school funding for 400 years - PBS NewsHour",
    //         "description": "Evers angered Republicans in the ways he used partial vetoes, with some saying Wednesday that the Democratic governor was going back on deals he had made with them.",
    //         "url": "https://www.pbs.org/newshour/politics/wisconsins-democratic-governor-guts-republican-tax-cut-increases-school-funding-for-400-years",
    //         "urlToImage": "https://d3i6fh83elv35t.cloudfront.net/static/2021/12/2021-03-31T203417Z_1086300411_RC2KMM9TCCAQ_RTRMADP_3_HEALTH-CORONAVIRUS-USA-WISCONSIN-1024x683.jpg",
    //         "publishedAt": "2023-07-05T22:55:28Z",
    //         "content": "MADISON, Wis. (AP) Wisconsin Gov. Tony Evers signed off on a two-year spending plan Wednesday after gutting a Republican tax cut and using his broad veto powers to increase school funding for centuri… [+5218 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "PBS"
    //         },
    //         "author": null,
    //         "title": "News Wrap: Ukraine claims Russia will sabotage nuclear plant - PBS NewsHour",
    //         "description": "In our news wrap Wednesday, fears about the fate of a Ukrainian nuclear plant under Russian control escalated with each side claiming the other plans to sabotage the site, four countries went to the International Court of Justice over Iran's downing of a Ukra…",
    //         "url": "https://www.pbs.org/newshour/show/news-wrap-ukraine-claims-russia-plans-to-sabotage-zaporizhzhia-nuclear-plant",
    //         "urlToImage": "https://d3i6fh83elv35t.cloudfront.net/static/2023/07/newswrap-4-1024x683.jpg",
    //         "publishedAt": "2023-07-05T22:50:00Z",
    //         "content": "Amna Nawaz:\r\nU.N. experts based in Zaporizhzhia reported no signs of explosives, but they said they'd need greater access to the plant to be certain.\r\nFour countries went to the International Court o… [+1299 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Space.com"
    //         },
    //         "author": "Josh Dinner",
    //         "title": "Farewell, Ariane 5! Europe's workhorse rocket launches 2 satellites on final mission - Space.com",
    //         "description": "After 27 years of service, Europe's venerable heavy lifter has rocketed into retirement.",
    //         "url": "https://www.space.com/ariane-5-rocket-final-launch-success",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/UXt9qBsQiwwgAcjbiS3piB-1200-80.jpg",
    //         "publishedAt": "2023-07-05T22:41:41Z",
    //         "content": "Europe's workhorse rocket has flown for the final time.\r\nThe powerful Ariane 5 launched today (July 5) on the last-ever mission of its storied career, which began way back in 1996 and now includes 11… [+5153 chars]"
    //     }
    // ]

    let [pages, setPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalResult, setTotalResult] = useState(0);
    const [article, setArticle] = useState([]);

    const capitalizeFLetter = (strVal) => {
        let string = strVal;
        return string[0].toUpperCase() +
            string.slice(1);
    }

    const dataLoadingFun = async () => {
        var articleUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pages}&pageSize=${props.pageSize}`;
        props.setProgress(30);
        setLoading(true);
        var categoryVal = capitalizeFLetter(props.category);
        document.title = `${categoryVal} - NewsApp`;
        var data = await fetch(articleUrl);
        props.setProgress(70);
        var articleData = await data.json();
        setArticle(articleData.articles);
        setTotalResult(articleData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    // const nextPage = () => {
    //     if (pages < Math.ceil(totalResult / props.pageSize)) {
    //         setPages(pages + 1);
    //         dataLoadingFun();
    //     }
    // }

    // const prevPage = () => {
    //     setPages(pages - 1);
    //     dataLoadingFun();
    // }

    useEffect(() => {
        dataLoadingFun();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        var articleUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pages + 1}&pageSize=${props.pageSize}`;
        setPages(pages + 1);
        var data = await fetch(articleUrl);
        var articleData = await data.json();
        setArticle(article.concat(articleData.articles));
    }

    return (
        <>
            <h1 className='text-center' style={{ marginTop: "80px" }}>News App - Top {props.category} headline</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length !== totalResult}
                loader={<Spinner />}
            >
                <div className='container my-2'>
                    <div className='row'>
                        {article.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <Newsitem source={element.source.name} date={element.publishedAt} author={element.author} title={element.title === null ? "No Title" : element.title.slice(0, 30)} description={element.description === null ? "No Description" : element.description.slice(0, 80)} imageUrl={element.urlToImage === null ? "https://cdn.vox-cdn.com/thumbor/0yqcZUaFgtYFDr7BbChGXEx_qEY=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23951390/STK088_VRG_Illo_N_Barclay_5_spotify.jpg" : element.urlToImage} news_Url={element.url} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className='d-flex justify-content-between'>
                <button type="button" onClick={prevPage} id="prevBtn" className="btn btn-primary" disabled={pages <= 1}>&laquo; prev</button>
                <button type="button" onClick={nextPage} id="nextBtn" className="btn btn-primary" disabled={pages >= Math.ceil(totalResult / props.pageSize)}>Next &raquo;</button>
            </div> */}
        </>
    )
}