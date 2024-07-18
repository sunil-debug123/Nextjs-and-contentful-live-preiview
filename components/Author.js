/*
  We have to make this a client component to use the `useContentfulInspectorMode` and `useContentfulLiveUpdates` hooks to enable live preview mode.
  This does not mean it is rendered on the client, but that the HTML, CSS and JavaScript are shipped to the client to hydrate the page.
  This is necessary because we need interactivity to enable live preview mode.
*/
'use client';

import {
    useContentfulInspectorMode,
    useContentfulLiveUpdates,
} from '@contentful/live-preview/react';

import React from "react";

export default function Author({ data }) {
    const livePost = useContentfulLiveUpdates(data);
    const inspectorProps = useContentfulInspectorMode({ entryId: data?.sys?.id });

    return (
        <div className="mb-16">
            <dh-component>
                <div className="container flex justify-center mx-auto pt-16">
                    <div>
                    <p className="text-contentful-blue text-lg text-center font-normal pb-3">Contentful Live Preview Demo</p>
                        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                            <span className="inline-block">
                                <i className="fab fa-contentful text-xl text-blue-600 mr-2"></i> {/* Contentful icon */}
                                The <span className='text-blue-600'> Next.js </span> App which support Contentful Live Preview
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="w-full bg-gray-100 px-10 pt-10">
                    <div className="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src={livePost?.profilePic?.url} alt={livePost?.firstName} role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold text-3xl text-center mb-1">
                                            {livePost?.firstName}
                                        </h1>
                                        <p className="text-gray-800 text-sm text-center">{livePost?.occupation}</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">{livePost?.bio}</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dh-component>
        </div>
    );
}
