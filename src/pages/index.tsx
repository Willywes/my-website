import type { GetServerSideProps } from 'next';
import ProfileCard from '../components/ProfileCard';
import Resume from '../components/sections/Resume';
import About from '../components/sections/About';
import { useState } from 'react';
import Navigation from '../components/template/Navigation';
import Blog from '../components/sections/Blog';
import { sections } from '../data';
import { Post, Repository } from '../types';
import { Octokit } from 'octokit';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';

export const getServerSideProps: GetServerSideProps = async () => {
    // console.log(process.env.GITHUB_TOKEN);
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    });

    let posts: Post[] = [];
    let repositories: Repository[] = [];

    try {
        await fetch(
            'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@willywes',
            {
                method: 'get',
                headers: [['Content-Type', 'application/json']],
                redirect: 'follow'
            }
        )
            .then((response) => response.json())
            .then((result) => {
                if (result) {
                    posts = result.items as Post[];
                }
            })
            .catch((error) => console.log(error));

        const { data } = await octokit.request('GET /users/{username}/repos', {
            username: 'willywes',
            type: 'owner',
            sort: 'updated',
            direction: 'desc'
        });

        repositories = data as Repository[];
    } catch (error) {
        console.log(error);
    }

    return {
        props: {
            posts: posts,
            repositories: repositories
        }
    };
};

type Props = {
    posts: Post[];
    repositories: Repository[];
};

const Home = ({ posts, repositories }: Props) => {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <div>
            <main>
                <div className="container">
                    <div className="row py-3 py-md-5">
                        <div className="col-lg-4">
                            <ProfileCard />
                        </div>
                        <div className="col-lg-8">
                            <div className="card card-section">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <Navigation
                                                tabs={sections}
                                                activeTab={activeTab}
                                                setActiveTab={setActiveTab}
                                            />
                                        </div>
                                        <div className="col-12 tab-content">
                                            <div
                                                className={`${
                                                    activeTab === 'about' ? '' : 'd-none'
                                                }`}
                                            >
                                                <About />
                                            </div>
                                            <div
                                                className={`${
                                                    activeTab === 'resume' ? '' : 'd-none'
                                                }`}
                                            >
                                                <Resume />
                                            </div>
                                            <div
                                                className={`${
                                                    activeTab === 'portfolio' ? '' : 'd-none'
                                                }`}
                                            >
                                                <Portfolio repositories={repositories} />
                                            </div>
                                            <div
                                                className={`${
                                                    activeTab === 'blog' ? '' : 'd-none'
                                                }`}
                                            >
                                                <Blog posts={posts} />
                                            </div>

                                            <div
                                                className={`${
                                                    activeTab === 'contact' ? '' : 'd-none'
                                                }`}
                                            >
                                                <Contact />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
