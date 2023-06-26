import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Navbar from './Components/Navbar/Navbar';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome to Mikasa Space" >
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>
            <Navbar auth={auth} />
        </>
    );
}
