/* This example requires Tailwind CSS v2.0+ */
import React, {useContext, useState} from "react";
import {OutboundLink} from "gatsby-plugin-google-gtag"

import {AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon} from '@heroicons/react/outline'


export default function Example() {
    return (
        <div className="py-12 bg-white">
            <OutboundLink href="/">
                BACK!
            </OutboundLink>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Order</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Thank you for your order
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Your order has been processed and we will inform you of the next steps in your order in extra
                        email.
                    </p>
                </div>


            </div>
        </div>
    )
}
