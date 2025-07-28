import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-6 py-10 z-10">
      <FeatureCard title="Create" text="Lorem ipsum dolor sit amet..." linkText="Get Started" />
      <FeatureCard title="Login" text="Lorem ipsum dolor sit amet..." linkText="Find an ATM" />
      <FeatureCard title="Manage" text="Lorem ipsum dolor sit amet..." linkText="Download the App" />
    </div>
  );
};

export default Features;