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
    <div class="bg-white dark:bg-gray-800 flex justify-center items-center w-screen h-screen p-5">
      <div class="border shadow-teal-300 shadow-md max-w-2xl p-6 rounded-lg dark:bg-gray-700 dark:text-gray-300">
        <h1 class="text-4xl font-mono font-extrabold py-3">Author</h1>
        <ul class="list-disc text-lg px-6">
          <li {...inspectorProps({ fieldId: 'firstName' })}>{livePost?.firstName}</li>
          <li {...inspectorProps({ fieldId: 'lastName' })}> {livePost?.lastName}</li>
          <li {...inspectorProps({ fieldId: 'city' })}> {livePost?.city}</li>
        </ul>
      </div>
    </div>
  );
}
