import AuthorCard from "@/app/AuthorCard/page";
import BlogCard from "@/components/BlogCard";
import Feature from "@/components/Feature";
import Mega from "@/app/Blog/page";
import React from "react";
import ResponsiveNav from "./Navbar/ResponsiveNav";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <Feature></Feature>
      <Mega></Mega>
      <AuthorCard></AuthorCard>
    </div>
  );
}
