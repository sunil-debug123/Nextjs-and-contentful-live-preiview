import React from "react";
import ProfileCard from "./ProfileCard";

export default function Author({ data }) {
    return (
        <div className="mb-16">
            <dh-component>
                <div className="container mx-auto pt-16 text-center">
                    <div className="pb-8">
                        <p className="text-contentful-blue text-lg font-normal pb-3">
                            Contentful Live Preview Demo
                        </p>
                        <h1 className="xl:text-4xl text-3xl text-gray-800 font-extrabold pb-6 mx-auto">
                            <span className="inline-block">
                                <i className="fab fa-contentful text-xl text-blue-600 mr-2"></i> {/* Contentful icon */}
                                The <span className='text-blue-600'>Next.js</span> App which supports Contentful Live Preview
                            </span>
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        {data.map((entry) => (
                            <ProfileCard author={entry} key={entry?.sys?.id} />
                        ))}
                    </div>
                </div>
            </dh-component>
        </div>
    );
}
