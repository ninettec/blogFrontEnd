import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";
import { axiosInstance } from "../../config";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "https://ninette.herokuapp.com/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      let url = "https://ninette.herokuapp.com/posts/"
      const res = await axios.get(url + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      let url = "https://ninette.herokuapp.com/posts/"
      await axios.delete(url + path, {
        data: { username: user.username },
      })
      window.location.replace("/");
    } catch (err) { }
  };

  const handleUpdate = async () => {
    try {
      let url = "https://ninette.herokuapp.com/posts/"
      await axiosInstance.put(url + path, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) { }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && <img src={PF + post.photo} alt="" className="singlePostImg" />}
        {updateMode ? <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e) => { setTitle(e.target.value) }}></input> : 
        <h1 className="singlePostTitle">
          {title}
          {post.username === user?.username && 
          (<div className="singlePostEdit">
            <i className="edit" onClick={() => { setUpdateMode(true) }}>
            Update this post
            </i>
            <i className="delete" onClick = {handleDelete}> 
            Delete
            </i>
          </div>
          )}
        </h1>}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link></span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? <textarea className="singlePostDescInput" value={desc} onChange={(e) => { setDesc(e.target.value) }} /> : <p className="singlePostDesc">
          {desc}
        </p>}
        {updateMode && <button className="singlePostButton" onClick={handleUpdate}>Update</button>}

      </div>
    </div>
  )
}