import React, {useEffect} from "react";
import {PageAnimated} from "../../components";

import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {postsActions} from "../../store/posts";
import {Loader} from "../../components/Loader/Loader";

export const DataList = () => {
    const dispatch = useDispatch();
    const {posts, loading} = useSelector((store) => store.posts);

    useEffect(() => {
        dispatch(postsActions.fetchPosts())
    }, []);


    return (
        <>
            <PageAnimated>
                <div className="data-list">
                    {posts.map((post, key) => (
                            <div key={key} className={`block ${(key % 2 === 0) ? 'block-right' : 'block-left'}`}>
                                <span>{post.title}</span>
                                {/*<div>{post.body}</div>*/}
                            </div>
                        )
                    )}
                </div>
            </PageAnimated>
            {loading && <Loader/>}
        </>
    )
}