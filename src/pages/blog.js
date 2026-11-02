import React from "react";
import Layout from "../layout/layout";
import SEO from "../components/SEO";

/**
 * Blog.
 * Route-level components compose shared UI primitives so merchant workflows stay consistent across the portal.
 */
const Blog = () => {
	return (
		<>
			<SEO
				title="Blog - Scan Africa"
				description="Read the latest news, updates, and insights from Scan Africa. Learn about payment solutions, fintech trends, and how to grow your business."
				keywords="Scan Africa blog, fintech blog, payment solutions blog, business insights"
				url="https://scanafrica.com/blog"
			/>
			<Layout />
		</>
	);
};

export default Blog;
