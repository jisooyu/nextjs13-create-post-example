import Image from 'next/image';

export const metadata = {
	title: 'NextJS 13 tutorial 2',
	description: 'nextjs 13 tutorial 2  - creating & posting prompt',
};

export default function Home() {
	return (
		<main className='feed text-blue-900 font-bold'>
			<h1>Authentication of Next.js using Next-Auth</h1>
			<p>NextJS 13 Tutorial 1 : Authentication</p>
		</main>
	);
}
