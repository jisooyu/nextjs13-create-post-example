'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Admin = () => {
	const { data: session } = useSession();
	const router = useRouter();
	return session ? (
		<div className='flex justify-center items-center p-5 text-red-500 text-lg font-bold'>
			Page allowed only for login users
		</div>
	) : (
		(window.alert('Sign in, please'), router.push('/'))
	);
};

export default Admin;
