import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Post } from '../../types';
import { timestampToDate } from '../../helpers';

type Props = {
    posts: Post[];
};

const Blog = ({ posts }: Props) => {
    const cards = useRef<HTMLDivElement[]>([]);

    // useEffect(() => {
    //     const determineMaxHeight = async () => {
    //         let maxHeight = 0;
    //         await Promise.all(
    //             cards.current.map(async card => {
    //                 const height = await new Promise(resolve => {
    //                     requestAnimationFrame(() => {
    //                         resolve(card.offsetHeight);
    //                     });
    //                 }) as number;
    //
    //                 if (height > maxHeight) {
    //                     maxHeight = height;
    //                 }
    //             })
    //         );
    //
    //         cards.current.forEach(card => {
    //             // card.style.height = `${maxHeight}px`;
    //         });
    //     };
    //
    //     determineMaxHeight().then();
    // }, []);
    const extractImage = (content: string) => {
        const img = content.match(/<img.*?src="(.*?)".*?>/);
        return img ? img[1] : '';
    };

    const extractDescription = (content: string) => {
        const desc = content.match(/<p>(.*?)<\/p>/);
        const text = desc ? desc[1] : '';
        return text.length > 160 ? text.substring(0, 160) + '...' : text;
    };

    const normalizeTags = (tags: string[]) => {
        return tags.map((tag) => tag.toLowerCase().replaceAll('-', ' '));
    };

    return (
        <>
            <h2>Blog</h2>
            <div className="row px-0">
                {posts?.map((post, index) => (
                    <div key={index} className="col-md-6">
                        <div
                            key={index}
                            className="card card-post mb-3"
                            ref={(el) => el && cards.current.push(el)}
                        >
                            <img
                                src={extractImage(post.content)}
                                className="card-img-top"
                                alt={post.title}
                            />
                            <div className="card-post-tag">
                                {normalizeTags(post.category).map((cat, index) => (
                                    <span key={index} className="badge me-1 mb-1">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{extractDescription(post.content)}</p>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col d-flex">
                                        <div className="card-date my-auto">
                                            {timestampToDate(post.created)}
                                        </div>
                                    </div>
                                    <div className="col-auto text-end d-flex">
                                        <a
                                            href={post.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-more my-auto px-4"
                                        >
                                            Continuar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Blog;
