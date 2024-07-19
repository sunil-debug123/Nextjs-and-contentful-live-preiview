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
import Image from 'next/image';
import React from "react";

export default function ProfileCard({ author }) {
    const livePost = useContentfulLiveUpdates(author);
    const inspectorProps = useContentfulInspectorMode({ entryId: author?.sys?.id });

    return (
        <div className="max-w-sm w-full bg-gray-100 px-6 pt-6 rounded-lg shadow-lg">
            <div className="relative flex justify-center -mt-16">
                <div className="h-32 w-32">
                    <Image width={100} height={100} {...inspectorProps({ fieldId: 'profilePic' })} src={livePost?.profilePic?.url} alt={livePost?.firstName} role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                </div>
            </div>
            <div className="px-6 mt-16 text-center">
                <h1 className="font-bold text-3xl mb-1" {...inspectorProps({ fieldId: 'firstName' })}>
                    {livePost?.firstName}
                </h1>
                <p className="text-gray-800 text-sm" {...inspectorProps({ fieldId: 'occupation' })}>{livePost?.occupation}</p>
                <p className="text-gray-600 text-base pt-3 font-normal" {...inspectorProps({ fieldId: 'bio' })}>
                    {livePost?.bio}
                </p>
            </div>
        </div>
    );
}
