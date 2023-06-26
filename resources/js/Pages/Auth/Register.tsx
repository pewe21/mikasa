import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from 'laravel-precognition-react-inertia';
import { Head, Link } from '@inertiajs/react';

export default function Register() {
    const form = useForm('post', "/register", {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    // const { data,setData, processing, errors, reset, submit } = useForm('post', {
    //     name: '',
    //     email: '',
    //     password: '',
    //     password_confirmation: '',
    // });

    useEffect(() => {
        return () => {
            form.reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        form.submit();
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={form.data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => form.setData('name', e.target.value)}

                        required
                    />

                    <InputError message={form.errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={form.data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => form.setData('email', e.target.value)}
                        onBlur={(e) => form.validate('email')}
                        required
                    />
                    {form.invalid('email') && <InputError message={form.errors.email} className="mt-2" />}
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={form.data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => form.setData('password', e.target.value)}

                        required
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={form.data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => form.setData('password_confirmation', e.target.value)}
                        onBlur={(e) => form.validate('password')}
                        required
                    />

                    {form.invalid('password') && <InputError message={form.errors.password} className="mt-2" />}
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={form.processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
