import React from "react";
import Layout from "../layout/layout";
import SEO from "../components/SEO";

const Blog = () => {
	return (
		<>
			<SEO
				title="Blog - Otto Africa"
				description="Read the latest news, updates, and insights from Otto Africa. Learn about payment solutions, fintech trends, and how to grow your business."
				keywords="Otto Africa blog, fintech blog, payment solutions blog, business insights"
				url="https://ottoafrica.com/blog"
			/>
			<Layout />
		</>
	);
};

export default Blog;
