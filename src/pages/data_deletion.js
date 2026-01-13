import React from "react";
import SEO from "../components/SEO";

const DataDeletion = () => {
	return (
		<>
			<SEO
				title="Account and Data Deletion - Otto Africa"
				description="Learn how to delete your Otto Africa account and request data deletion. Follow our step-by-step guide to remove your account and personal data."
				keywords="account deletion, data deletion, delete account, Otto Africa account deletion"
				url="https://ottoafrica.com/otto-data-deletion"
			/>
			<div className="max-w-2xl mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-4">
				Otto Account and Data Deletion
			</h1>
			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					Steps to Delete Account:
				</h2>
				<p className="mb-2">To request account deletion:</p>
				<ol className="list-decimal list-inside">
					<li className="mb-2">
						Log in to your Otto account within the app.
					</li>
					<li className="mb-2">Navigate to the settings page.</li>
					<li className="mb-2">
						Find the option to send a message to support.
					</li>
					<li className="mb-2">
						Send deletion request.
					</li>
				</ol>
				<p className="mt-2">
					Alternatively, you can contact support at contact@ottoafrica.com
					to request account deletion.
				</p>
			</div>
			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					Data Deletion Details:
				</h2>
				<p className="mb-2">
					Upon account closure, the following data types will be
					deleted:
				</p>
				<ul className="list-disc list-inside">
					<li className="mb-2">Transaction history</li>
					<li className="mb-2">User profile information</li>
				</ul>
				<p className="mt-2">
					Certain data may be retained for legal or regulatory
					reasons, and will be securely stored for a period of time
					determined by applicable laws and regulations.
				</p>
			</div>
			<div>
				<h2 className="text-xl font-semibold mb-2">Timeline:</h2>
				<p className="mb-2">
					We aim to process account deletion requests within 10
					business days.
				</p>
			</div>
		</div>
		</>
	);
};

export default DataDeletion;
