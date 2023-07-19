import React from 'react'
// , { Component } 
// export default class Newsitem extends Component {
//     render() {
//         let { title, description, imageUrl, news_Url } = this.props;
//         return (
//             <div className='my-3'>
//                 <div className="card" style={{ width: "18rem" }}>
//                     <img src={imageUrl} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}</h5>
//                         <p className="card-text">{description}</p>
//                         <a href={news_Url} className="btn btn-sm btn-primary">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }


export default function Newsitem(props) {
    let { title, description, imageUrl, news_Url, author, date, source } = props;


    const currentDate = new Date();
    console.log("current date", currentDate.getDate());
    return (
        <div className='my-3'>
            <div className="card ">
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ right: '1px', zIndex: 1 }} >
                    {source}
                </span>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={news_Url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div >
    )
}