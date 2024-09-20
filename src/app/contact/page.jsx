"use client";
import dynamic from "next/dynamic";
import React from "react";
const HydrationTestNoSSR = dynamic(() => import("@/components/HydrationTest"), {ssr: false});

const Contact = () => {
  return (
    <div>
      <HydrationTestNoSSR />
      <h1>This is contact page</h1>
    </div>
  );
};

export default Contact;
